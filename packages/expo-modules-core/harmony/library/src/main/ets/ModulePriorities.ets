/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

export class ModulePriorities {
  private static readonly priorities: Map<string, number> = new Map([
    ['@expo-harmony/expo-dev-launcher', 20],
    ['@expo-harmony/expo-updates', 10],
  ]);

  static get(name?: string): number {
    return name === undefined ? 0 : (ModulePriorities.priorities.get(name) ?? 0);
  }
}
