/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

export type Log = Pick<Console, 'error' | 'log' | 'warn'>;

export function progress(options: { io?: Log }, message: string): void {
  options.io?.log(`› ${message}`);
}
