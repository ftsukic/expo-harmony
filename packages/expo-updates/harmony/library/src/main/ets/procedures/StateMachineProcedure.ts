/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

import { UpdatesStateEvent, UpdatesStateValue } from '../UpdatesStateEvent';

export interface ProcedureContext {
  process(event: UpdatesStateEvent): void;
  readonly state: UpdatesStateValue;
  reset(): void;
  cancelRestart(): void;
}

export interface StateMachineProcedure<T> {
  run(context: ProcedureContext): Promise<T>;
}
