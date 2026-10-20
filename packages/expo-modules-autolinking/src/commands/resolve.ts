/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

import { resolveModulesAsync } from '../autolinking/resolve';

import { addCommonOptions, toApiOptions } from './autolinkingOptions';
import { writeResult } from './output';

function registerResolveCommand(program, io) {
  addCommonOptions(program.command('resolve [searchPaths...]').description('resolve Harmony module metadata'))
    .option('-j, --json', 'output results in the plain JSON format', false)
    .action(async (searchPaths, options) => {
      writeResult(io, await resolveModulesAsync(toApiOptions(options, searchPaths)), options);
    });
}

export { registerResolveCommand };
