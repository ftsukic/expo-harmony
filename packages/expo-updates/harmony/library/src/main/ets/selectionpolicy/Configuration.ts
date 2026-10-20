/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

import { Headers } from '../UpdatesProtocol';

export function equalHeaders(first: Headers | null | undefined, second: Headers | null | undefined): boolean {
  if (first == null || second == null) return first == null && second == null;
  return Object.keys(first).length === Object.keys(second).length && Object.entries(first).every(([key, value]) => second[key] === value);
}
