/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

import fs from 'node:fs';
import path from 'node:path';

const PackageMetadata = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8')
) as Readonly<{ name: string; version: string }>;

export { PackageMetadata };
