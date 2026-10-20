/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

import { requireOptionalNativeModule } from 'expo-modules-core';

import type { ShowcaseConsumerModule, ShowcaseNativeModule } from './types';

// A missing local module must not prevent the rest of the demo from opening.
export const showcaseModule = requireOptionalNativeModule<ShowcaseNativeModule>('ExpoModuleShowcase');
export const showcaseConsumer = requireOptionalNativeModule<ShowcaseConsumerModule>('ExpoModuleShowcaseConsumer');
