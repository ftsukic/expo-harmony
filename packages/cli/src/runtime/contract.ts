import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';

import { getConfig } from '@expo/config';
import { createNativeModuleContracts, verifyModulesAsync, type Manifest, type ModuleDescriptor } from '@expo-harmony/expo-modules-autolinking';
import { harmonyRuntimeSchemaVersion, type HarmonyRuntimeContract } from '@expo-harmony/expo-modules-autolinking/runtime';
import JSON5 from 'json5';

import { publishUpdatesConfigurationAsync } from '../updates/export';
import { HarmonyCliError } from '../errors';
import { atomicCopy, atomicWriteJson } from '../file';
import type { HarmonyBuildPlan } from '../native/types';
import { readMetroRuntimeAsync, readNativeRuntime, readProjectRuntimeAsync, resolveRuntimeVersionAsync, type HarmonyMetroRuntime } from './config';

async function createRuntimeContractAsync(
  root: string,
  project: Pick<Awaited<ReturnType<typeof readProjectRuntimeAsync>>, 'native' | 'runtimeVersion'>,
  modules: readonly ModuleDescriptor[],
  metro?: HarmonyMetroRuntime
): Promise<HarmonyRuntimeContract> {
  const resolution = metro ?? await readMetroRuntimeAsync(root);
  const require = createRequire(path.join(root, 'package.json'));
  const version = (name: string) => require(`${name}/package.json`).version as string;
  const native = createRequire(require.resolve(resolution.harmonyPackage + '/package.json'));

  return {
    schemaVersion: harmonyRuntimeSchemaVersion(project.native),
    platform: 'harmony',
    runtimeVersion: project.runtimeVersion,
    development: true,
    expo: version('expo'),
    expoModulesCore: version('expo-modules-core'),
    rnoh: native('./package.json').version,
    react: version(resolution.reactPackage),
    hermes: native('hermes-compiler/package.json').version,
    engine: 'hermes-v1',
    bundleFormat: 'js-source',
    renderer: 'rnoh',
    modules: createNativeModuleContracts(modules),
    config: project.native,
  };
}

export async function resolveRuntimeRequirementsAsync(
  root: string,
  metro?: HarmonyMetroRuntime
): Promise<HarmonyRuntimeContract> {
  const result = await verifyModulesAsync({ projectRoot: root });
  if (!result.valid) {
    throw new HarmonyCliError(
      'ERR_HARMONY_RUNTIME_MODULES',
      result.diagnostics.filter(item => item.severity === 'error').map(item => item.message).join('\n'),
      { operation: 'runtime-contract' }
    );
  }

  const project = await readProjectRuntimeAsync(root);

  return createRuntimeContractAsync(root, project, result.modules, metro);
}

export async function publishRuntimeContractAsync(
  root: string,
  plan: HarmonyBuildPlan
): Promise<HarmonyRuntimeContract> {
  const manifest = JSON.parse(await fs.promises.readFile(path.join(root, '.expo/harmony/autolinking.json'), 'utf8')) as Manifest;
  const { exp: config } = getConfig(root, { skipSDKVersionRequirement: true, isModdedConfig: true });
  const native = readNativeRuntime(plan);
  // ponytail: publish the native project as built; plugin introspection describes a new prebuild.
  const contract = await createRuntimeContractAsync(root, {
    native: native.config,
    runtimeVersion: await resolveRuntimeVersionAsync(root, config, native.app),
  }, manifest.modules);
  const read = (file: string) => JSON5.parse(fs.readFileSync(file, 'utf8'));
  const directory = path.join(plan.harmonyRoot, 'oh_modules/@rnoh/react-native-openharmony');
  contract.rnoh = read(path.join(directory, 'oh-package.json5')).version;
  contract.hermes = read(path.join(directory, 'src/main/cpp/third-party/hermes/npm/hermes-compiler/package.json')).version;
  contract.development = plan.buildMode === 'debug';

  const require = createRequire(path.join(root, 'package.json'));
  const file = path.join(plan.exportPaths.rawfileRoot, 'expo-harmony-runtime.json');
  const source = require.resolve('@expo-harmony/expo-modules-autolinking/runtime-source');
  const target = path.join(plan.moduleRoot, 'src/main/ets/generated/HarmonyRuntime.ts');

  await atomicCopy(source, target, root);
  await atomicWriteJson(contract, file, root);
  await atomicWriteJson(contract, path.join(root, '.expo/harmony/runtime.json'), root);
  await publishUpdatesConfigurationAsync(root, plan.exportPaths.rawfileRoot, config, contract.runtimeVersion);

  return contract;
}
