/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

import type { AndroidSymbol } from 'expo-symbols';
import type { ImageSourcePropType } from 'react-native';

export { SymbolView } from './SymbolView';
export type * from './SymbolModule.types';

export async function unstable_getMaterialSymbolSourceAsync(
  _symbol: AndroidSymbol | null,
  _size: number,
  _color: string
): Promise<ImageSourcePropType | null> {
  return null;
}
