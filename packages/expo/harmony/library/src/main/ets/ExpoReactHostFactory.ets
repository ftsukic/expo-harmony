/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

import { ExpoReactHost, ExpoReactHostOptions } from './ExpoReactHost';

export class ExpoReactHostFactory {
  private static host?: ExpoReactHost;

  static getDefaultReactHost(options: ExpoReactHostOptions): ExpoReactHost {
    if (ExpoReactHostFactory.host === undefined) ExpoReactHostFactory.host = new ExpoReactHost(options);
    return ExpoReactHostFactory.host;
  }
}
