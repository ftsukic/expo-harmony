/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

import type Want from '@ohos.app.ability.Want';

export function copyWant(want: Want): Want {
  return { ...want, entities: want.entities?.slice(), parameters: want.parameters === undefined ? undefined : { ...want.parameters } };
}
