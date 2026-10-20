/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

import type { UpdateAsset, UpdateRecord } from '../UpdatesProtocol';

export interface AssetEntity extends Omit<UpdateAsset, 'launch'> {
  id: number;
  downloadTime?: number;
  marked: boolean;
}

export interface UpdateEntity extends Omit<UpdateRecord, 'assets'> {
  keep: boolean;
  launchAssetId?: number;
}

export interface JSONDataEntity {
  id: number;
  scope: string;
  key: string;
  value: ESObject;
  lastUpdated: number;
}
