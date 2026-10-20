/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

import { ExpoModule, ExpoModuleDefinition } from '@expo-harmony/expo-modules-core';
import { EASClientID } from './EASClientID';

export class EASClientModule extends ExpoModule {
  definition(): ExpoModuleDefinition {
    const identity = new EASClientID(this.context.uiAbilityContext.getApplicationContext());
    return new ExpoModuleDefinition()
      .name('EASClient')
      .constant('clientID', (): string => identity.clientID)
      .constant('deterministicUniformValue', (): number => identity.deterministicUniformValue);
  }
}
