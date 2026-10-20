/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

import type { ConfigPlugin } from '@expo/config-plugins';

export type NavigationBarPluginProps = {
  backgroundColor?: string | null;
  barStyle?: 'light' | 'dark' | null;
  position?: 'relative' | 'absolute';
  visibility?: 'visible' | 'hidden';
};

declare const withNavigationBar: ConfigPlugin<NavigationBarPluginProps | void>;
export default withNavigationBar;
