/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

import type { ReactActivityHandler, ReactRootViewBuilder, ReactRootViewContext } from '@expo-harmony/expo-modules-core';

export class ExpoReactRootViewFactory {
  static create(handlers: ReactActivityHandler[], context: ReactRootViewContext): ReactRootViewBuilder | undefined {
    for (const handler of handlers) {
      const builder = handler.createReactRootViewContainer?.(context);
      if (builder !== undefined) return builder;
    }
    return undefined;
  }

  static getDelayLoadAppHandler(handlers: ReactActivityHandler[], context: ReactRootViewContext): Promise<void> | undefined {
    for (const handler of handlers) {
      const delay = handler.getDelayLoadAppHandler?.(context);
      if (delay !== undefined) return delay;
    }
    return undefined;
  }
}
