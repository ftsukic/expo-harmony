/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

import { createRequire } from 'node:module';

import { installHarmonyManifest } from '../development/manifest';

installHarmonyManifest(process.cwd());
process.argv.splice(1, 1);
const run = createRequire(__filename);
run(process.argv[1]);
