/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

import path from 'node:path';

import { Help } from './help';
import type { Log } from './log';
import { resolveProject } from './project';

export type Command = (argv: string[], io: Log) => Promise<number>;

export function parseCommandArgs<T extends { help: boolean; project?: string }>(
  parse: (argv: string[]) => T,
  argv: string[],
  io: Log
): { options: T; projectRoot: string } | null {
  const options = parse(argv);
  if (options.help) {
    io.log(Help);
    return null;
  }

  return {
    options,
    projectRoot: resolveProject(options.project ? path.resolve(options.project) : process.cwd()),
  };
}
