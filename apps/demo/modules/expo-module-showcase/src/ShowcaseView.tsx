/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

import { requireNativeViewManager } from 'expo-modules-core';
import type { ComponentType } from 'react';

import type { ShowcaseViewProps } from './types';

let NativeView: ComponentType<ShowcaseViewProps> | undefined;

export function ShowcaseView(props: ShowcaseViewProps) {
  NativeView ??= requireNativeViewManager<ShowcaseViewProps>('ExpoModuleShowcase');
  return <NativeView {...props} />;
}
