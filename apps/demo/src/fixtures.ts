/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

import AntDesign from '@expo/vector-icons/AntDesign';

export const DYNAMIC_FONT_FAMILY = 'HarmonyDemoDynamic';

export function antDesignFontAsset(): number | string {
  const asset = Object.values(AntDesign.font)[0];
  if (asset === undefined) throw new Error('AntDesign 未暴露其内置字体资源。');
  return asset;
}
