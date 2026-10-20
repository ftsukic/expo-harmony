/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

import { ActionButton, Note, Panel, ResultPanel, useAsyncResult } from './ui';

export type ContractDefinition = {
  description: string;
  label: string;
  run: () => Promise<string> | string;
  title: string;
};

export function ContractCard({ definition }: { definition: ContractDefinition }) {
  const result = useAsyncResult();
  return (
    <Panel eyebrow="构建契约" title={definition.title}>
      <Note>{definition.description}</Note>
      <ActionButton
        disabled={result.state.phase === 'running'}
        label={definition.label}
        onPress={() => void result.run(definition.run)}
      />
      <ResultPanel state={result.state} />
    </Panel>
  );
}
