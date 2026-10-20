/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

import { requireNativeModule } from 'expo-modules-core';

const manager = requireNativeModule<{ getDevicePushTokenAsync(): Promise<string> }>('ExpoPushTokenManager');
let pending: Promise<string> | undefined;

// Upstream 55.0.27 retains a rejected promise forever. Always release it so a
// transient Push Kit/network failure can be retried by the application.
export async function getDevicePushTokenAsync(): Promise<{ type: 'harmony'; data: string }> {
  const request = pending ??= manager.getDevicePushTokenAsync();

  try {
    return { type: 'harmony', data: await request };
  } finally {
    if (pending === request) pending = undefined;
  }
}
