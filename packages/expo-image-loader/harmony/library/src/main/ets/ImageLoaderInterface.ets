/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

import { ExpoServiceKey } from '@expo-harmony/expo-modules-core';
import { image } from '@kit.ImageKit';

export interface ImageLoaderResultListener {
  onSuccess(pixel: image.PixelMap): void;
  onFailure(cause: Error): void;
}

export interface ImageLoaderInterface {
  loadImageForDisplayFromURL(url: string): Promise<image.PixelMap>;
  loadImageForDisplayFromURL(url: string, listener: ImageLoaderResultListener): void;
  loadImageForManipulationFromURL(url: string): Promise<image.PixelMap>;
  loadImageForManipulationFromURL(url: string, listener: ImageLoaderResultListener): void;
}

export const ImageLoaderInterfaceKey = new ExpoServiceKey<ImageLoaderInterface>('ImageLoaderInterface');
