/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

import { ExpoAbilityStage } from '@expo-harmony/expo';
import type { ExpoHarmonyHostProvider, ExpoReactHost } from '@expo-harmony/expo';
import { expoReactHost } from '../PackageProvider';
import { expoHarmonyHostProvider } from '../generated/ExpoHarmonyHostProvider';

export default class EntryAbilityStage extends ExpoAbilityStage {
  protected override getExpoReactHost(): ExpoReactHost {
    return expoReactHost;
  }

  protected override getExpoHarmonyHostProvider(): ExpoHarmonyHostProvider {
    return expoHarmonyHostProvider;
  }
}
