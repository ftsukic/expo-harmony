#!/usr/bin/env node
/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

import { runCli } from '../generator.mjs';

runCli(process.argv.slice(2)).catch((error) => {
  process.stderr.write(`create-expo-harmony-module: ${error instanceof Error ? error.message : String(error)}\n`);
  process.exitCode = 1;
});
