/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

export interface DevMenuManagerProtocol {
  readonly isVisible: boolean;
  openMenu(screen?: string | null): boolean;
  closeMenu(): boolean;
  hideMenu(): boolean;
  toggleMenu(): boolean;
}

export interface DevMenuBridgeProtocol {
  module?(name: string): Object | null;
  /**
   * Returns all modules accepted by the caller's runtime conformance check.
   * ArkTS erases interfaces, so the check replaces Objective-C's Protocol value.
   * The provider must query its complete module registry, not only cached lookups.
   */
  modulesConforming?(conforms: (module: Object) => boolean): Object[];
  requestReload?(): void;
}

export interface DevMenuHostDelegate {
  devMenuNavigateHome?(): void;
  devMenuTogglePerformanceMonitor?(): void;
  devMenuToggleElementInspector?(): void;
  devMenuShouldShowReactNativeDevMenu?(): boolean;
}

export interface DevMenuUIResponderExtensionProtocol {
  EXDevMenu_handleKeyCommand(key: KeyEvent): void;
}
