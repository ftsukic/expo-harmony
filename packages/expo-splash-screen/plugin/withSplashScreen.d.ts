/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

import type { ConfigPlugin } from '@expo/config-plugins';

export type HarmonySplashResizeMode = 'contain' | 'cover' | 'native';

export interface HarmonySplashScreenConfig {
  backgroundColor?: string;
  imageWidth?: number;
  image?: string;
  resizeMode?: HarmonySplashResizeMode;
  dark?: {
    backgroundColor?: string;
    image?: string;
  };
}

export interface SplashScreenPluginConfig extends HarmonySplashScreenConfig {
  harmony?: HarmonySplashScreenConfig;
}

declare const withSplashScreen: ConfigPlugin<SplashScreenPluginConfig | null>;

export = withSplashScreen;
