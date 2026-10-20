/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

export interface HarmonyConfigPluginErrorOptions {
  cause?: unknown;
  file?: string;
  operation?: string;
}

export class HarmonyConfigPluginError extends Error {
  declare readonly code: string;
  declare readonly operation: string;
  declare readonly file?: string;

  constructor(code: string, message: string, options: HarmonyConfigPluginErrorOptions = {}) {
    super(message, options.cause === undefined ? undefined : { cause: options.cause });

    this.name = 'HarmonyConfigPluginError';
    this.code = code;
    this.operation = options.operation || 'config-plugin';

    if (options.file) this.file = options.file;
  }
}
