/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

declare module 'libexpo_eas_client.so' {
  const client: {
    clientID(path: string): string | undefined;
    clientID(path: string, candidate: string): string;
  };

  export default client;
}
