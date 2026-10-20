/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

import Constants from 'expo-constants';

export function configSnapshot() {
  const config = Constants.expoConfig as (typeof Constants.expoConfig & {
    harmony?: Record<string, unknown>;
    plugins?: unknown[];
  }) | null;
  if (!config?.harmony) throw new Error('缺少内嵌的 Harmony 配置。');
  return config;
}
