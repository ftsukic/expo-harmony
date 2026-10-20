/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

/** An author-facing coded error whose code is preserved across the Host bridge. */
export class ExpoModuleError extends Error {
  readonly code: string;
  readonly cause?: Object;
  readonly path?: string;

  constructor(code: string, message: string, cause?: Object, path?: string) {
    if (code.length === 0) {
      throw new Error('Expo module error codes cannot be empty.');
    }

    super(message);

    this.name = 'ExpoModuleError';
    this.code = code;
    this.cause = cause;
    this.path = path;
  }
}
