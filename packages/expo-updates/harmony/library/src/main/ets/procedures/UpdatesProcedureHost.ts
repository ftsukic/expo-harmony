/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

import { UpdatesConfiguration } from '../UpdatesConfiguration';
import { UpdatesStorage } from '../UpdatesStorage';
import { RemoteLoader } from '../loader/RemoteLoader';
import { UpdatesSelectionPolicy } from '../selectionpolicy/UpdatesSelectionPolicy';
import { Json, UpdateRecord } from '../UpdatesProtocol';

export interface UpdatesProcedureHost {
  readonly configuration: UpdatesConfiguration;
  readonly storage: UpdatesStorage;
  readonly loader: RemoteLoader;
  readonly policy: UpdatesSelectionPolicy;
  readonly launched: UpdateRecord | undefined;
  readonly embedded: UpdateRecord | undefined;
  loadEmbedded(): Promise<void>;
  remote(promise: Promise<Json>): void;
}
