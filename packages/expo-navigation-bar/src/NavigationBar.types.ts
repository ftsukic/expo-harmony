/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

export type NavigationBarButtonStyle = 'light' | 'dark';

export type NavigationBarVisibility = 'visible' | 'hidden';

/** @deprecated This will be removed in a future Expo release. */
export type NavigationBarBehavior = 'overlay-swipe' | 'inset-swipe' | 'inset-touch';

/** @deprecated This will be removed in a future Expo release. */
export type NavigationBarPosition = 'relative' | 'absolute';

export type NavigationBarVisibilityEvent = {
  visibility: NavigationBarVisibility;
  /** Harmony uses 2 for hidden and 0 for visible, not Android's full system UI bitmask. */
  rawVisibility: number;
};

export type NavigationBarStyle = 'auto' | 'inverted' | 'light' | 'dark';
