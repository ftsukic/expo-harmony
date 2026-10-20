/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

import type { ExportedConfigWithProps } from '@expo/config-plugins';

import type { ExpoConfigWithHarmony, ExpoHarmonyPlatform, HarmonyConfig } from './config';

export type HarmonyConfigPlugin<Props = void> = <Config extends ExpoConfigWithHarmony>(
  config: Config,
  props: Props
) => Config;

export type HarmonyModConfig<T> = Omit<ExportedConfigWithProps<T>, 'platforms' | 'modRawConfig' | 'modRequest'> & {
  platforms?: ExpoHarmonyPlatform[];
  harmony?: HarmonyConfig;
  modRawConfig: ExpoConfigWithHarmony;
  modRequest: Omit<ExportedConfigWithProps<T>['modRequest'], 'platform' | 'nextMod'> & {
    platform: 'harmony';
    nextMod?: HarmonyModAction<T>;
    modFile?: string;
    modFileExists?: boolean;
  };
};

export type HarmonyModAction<T = unknown> = (
  config: HarmonyModConfig<T>
) => HarmonyModConfig<T> | Promise<HarmonyModConfig<T>>;
