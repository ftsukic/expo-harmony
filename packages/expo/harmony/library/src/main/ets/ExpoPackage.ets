/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

import { RNPackage } from '@rnoh/react-native-openharmony';

export class ExpoPackage extends RNPackage {
  override getDebugName(): string {
    return '@expo-harmony/expo';
  }
}
