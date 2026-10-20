/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

import type { common } from '@kit.AbilityKit';
import type { ReactRuntimeBinding, ReactRuntimeContext } from '@expo-harmony/expo-modules-core';

import { expoLogBoxController } from './ExpoLogBoxController';

export class ExpoLogBoxRuntimeBinding implements ReactRuntimeBinding {
  constructor(_context: common.Context) {}

  bind(context: ReactRuntimeContext): () => void {
    return expoLogBoxController.bindRuntime(context);
  }
}
