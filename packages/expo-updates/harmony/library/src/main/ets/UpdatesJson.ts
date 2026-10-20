/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

export function isRecord(value: unknown): value is Record<string, ESObject> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}
