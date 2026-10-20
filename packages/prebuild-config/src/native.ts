/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

function isRnohAutolinkingDisabled(source: string): boolean {
  if (typeof source !== 'string' || !source.trim()) {
    throw new TypeError('module hvigorfile.ts must start from the canonical Harmony template source.');
  }
  return /\bautolinking\s*:\s*null\b/u.test(source.replace(/\r\n?/gu, '\n'));
}

export {
  isRnohAutolinkingDisabled,
};
