/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

import { getConfig, type ProjectConfig } from '@expo/config';
import { normalizeHarmonyConfig, type ExpoConfigWithHarmony } from '@expo-harmony/config-plugins';

import { withHarmonyPrebuildConfig } from './withHarmonyPrebuildConfig';

export type HarmonyProjectConfig = Omit<ProjectConfig, 'exp'> & {
  exp: ExpoConfigWithHarmony;
};

export async function getPrebuildConfigAsync(root: string): Promise<HarmonyProjectConfig> {
  const project = getConfig(root, {
    skipSDKVersionRequirement: true,
    isModdedConfig: true,
  });
  const config = withHarmonyPrebuildConfig(project.exp);

  normalizeHarmonyConfig(config);

  return { ...project, exp: config };
}
