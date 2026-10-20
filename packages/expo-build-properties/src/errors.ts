/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

import { HarmonyConfigPluginError, type HarmonyConfigPluginErrorOptions } from '@expo-harmony/config-plugins';

export class ExpoBuildPropertiesError extends HarmonyConfigPluginError {
  constructor(message: string, options: HarmonyConfigPluginErrorOptions = {}) {
    super('ERR_HARMONY_BUILD_PROPERTIES', message, { ...options, operation: 'build-properties' });
    this.name = 'ExpoBuildPropertiesError';
  }
}
