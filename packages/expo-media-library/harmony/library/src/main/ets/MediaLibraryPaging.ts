/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

const CURSOR_LIMIT: number = 64;

class QueryIdentity {
  album: string | undefined;
  sort: string[];
  types: string[];
  since: number | undefined;
  until: number | undefined;

  constructor(album: string | undefined, sort: string[], types: string[], since?: number, until?: number) {
    this.album = album;
    this.sort = sort;
    this.types = types;
    this.since = since;
    this.until = until;
  }
}

export function queryIdentity(album: string | undefined, sort: string[], types: string[], since?: number, until?: number): string {
  return JSON.stringify(new QueryIdentity(album, sort, types, since, until));
}

class Cursor {
  query: string;
  uri: string;
  position: number;

  constructor(query: string, uri: string, position: number) {
    this.query = query;
    this.uri = uri;
    this.position = position;
  }
}

export class MediaLibraryPaging {
  private positions: Cursor[] = [];
  private destroyed: boolean = false;

  destroy(): void {
    this.destroyed = true;
    this.positions = [];
  }

  remember(query: string, uri: string, position: number): void {
    if (this.destroyed) return;

    this.forget(query, uri);
    this.positions.push(new Cursor(query, uri, position));
    if (this.positions.length > CURSOR_LIMIT) this.positions.shift();
  }

  async start(
    query: string,
    after: string | undefined,
    count: number,
    read: (position: number) => Promise<string>,
    locate?: (uri: string) => Promise<number>,
  ): Promise<number> {
    if (after === undefined) return 0;

    if (locate !== undefined) {
      const index = await locate(after);

      return Number.isSafeInteger(index) && index >= 0 && index < count ? index + 1 : -1;
    }

    const cached = this.positions.find((entry: Cursor): boolean => entry.query === query && entry.uri === after);

    if (cached !== undefined) {
      // The result set can change between pages without an observer.
      if (cached.position < count && (await read(cached.position)) === after) {
        this.remember(query, after, cached.position);

        return cached.position + 1;
      }

      this.forget(query, after);
    }

    for (let position = 0; position < count; position += 1) {
      if ((await read(position)) === after) {
        this.remember(query, after, position);

        return position + 1;
      }
    }

    return -1;
  }

  private forget(query: string, uri: string): void {
    this.positions = this.positions.filter((entry: Cursor): boolean => entry.query !== query || entry.uri !== uri);
  }
}
