/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

/* global Buffer, console, process, URL */

import { execFileSync } from 'node:child_process';
import { lstatSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';

// Edit this template to update every managed header on the next run.
const HEADER = [
  'Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).',
  'Released under MIT license. https://github.com/renbaoshuo/expo-harmony',
];
// Keep these markers stable even when the template changes.
const MARKER = '@expo-harmony-copyright';
const END_MARKER = '@end-expo-harmony-copyright';

const BLOCK_EXTENSIONS = new Set([
  '.js', '.jsx', '.mjs', '.cjs', '.ts', '.tsx', '.mts', '.cts', '.ets',
  '.c', '.cc', '.cpp', '.cxx', '.h', '.hh', '.hpp', '.hxx', '.m', '.mm',
  '.swift', '.kt', '.kts', '.java', '.gradle', '.cs', '.go', '.rs', '.dart',
  '.css', '.scss', '.less', '.json5', '.jsonc',
]);
const HASH_EXTENSIONS = new Set([
  '.py', '.pyw', '.sh', '.bash', '.zsh', '.fish', '.rb', '.podspec',
  '.cmake', '.exp', '.tcl', '.pl', '.pm', '.yaml', '.yml', '.toml',
]);
const HTML_EXTENSIONS = new Set(['.html', '.htm', '.xml', '.xhtml', '.vue', '.svelte']);
const HASH_FILENAMES = new Set(['CMakeLists.txt', 'Makefile', 'GNUmakefile', 'Dockerfile', 'Gemfile', 'Rakefile']);
const EXCLUDED_DIRECTORIES = new Set([
  '.git', '.yarn', '.expo', '.hvigor', '.ohpm', '.cxx', 'node_modules', 'oh_modules',
  'build', 'dist', 'coverage', 'generated', 'vendor', 'third-party', 'third_party',
]);

const STYLES = {
  block: {
    leading: /^(?:\s+|\/\*[\s\S]*?\*\/|\/\/[^\r\n]*(?:\r?\n|$))*/,
    comments: /\/\*[\s\S]*?\*\//g,
    render: () => ['/*!', ` * ${MARKER}`, ' *', ...HEADER.map(line => ` * ${line}`), ' */'],
  },
  hash: {
    leading: /^(?:\s+|#[^\r\n]*(?:\r?\n|$))*/,
    render: () => [`# ${MARKER}`, '#', ...HEADER.map(line => `# ${line}`), `# ${END_MARKER}`],
  },
  html: {
    leading: /^(?:\s+|<!--[\s\S]*?-->)*/,
    comments: /<!--[\s\S]*?-->/g,
    render: () => ['<!--', MARKER, '', ...HEADER, '-->'],
  },
};

function sourceStyle(file) {
  if (file.split('/').some(part => EXCLUDED_DIRECTORIES.has(part))) return;
  const name = path.basename(file.replace(/\.tpl$/, ''));
  if (name === 'oh-package-lock.json5' || /\.(?:min|bundle)\.js$/.test(name)) return;
  const extension = path.extname(name).toLowerCase();
  if (BLOCK_EXTENSIONS.has(extension)) return 'block';
  if (HASH_EXTENSIONS.has(extension) || HASH_FILENAMES.has(name)) return 'hash';
  if (HTML_EXTENSIONS.has(extension)) return 'html';
}

function removeHeaders(leading, styleName) {
  const style = STYLES[styleName];
  if (style.comments) {
    leading = leading.replace(style.comments, (comment) => {
      const lines = comment
        .replace(/^\/\*\*?|\*\/$|^<!--|-->$/g, '')
        .split(/\r?\n/)
        .map(line => line.replace(/^\s*\* ?/, '').trim())
        .filter(Boolean);
      return lines[0] === MARKER ? '' : comment;
    });
  }
  if (styleName === 'hash') {
    leading = leading.replace(
      new RegExp(`^(?:#\\r?\\n)?# ${MARKER}\\r?\\n(?:#[^\\r\\n]*\\r?\\n)*?# ${END_MARKER}[^\\r\\n]*(?:\\r?\\n|$)`, 'gm'),
      ''
    );
  }
  return leading;
}

function updateSource(source, styleName) {
  const bom = source.startsWith('\uFEFF') ? '\uFEFF' : '';
  let body = source.slice(bom.length);
  const newline = body.match(/\r?\n/)?.[0] || '\n';
  let prologue = '';
  // These declarations must remain before the copyright comment.
  const declaration = body.match(/^(?:#![^\r\n]*(?:\r?\n|$)|<\?xml\b[\s\S]*?\?>[ \t]*(?:\r?\n)?)/);
  if (declaration) {
    prologue = declaration[0];
    body = body.slice(prologue.length);
  }
  if (styleName === 'hash') {
    const magic = body.match(/^(?:[ \t]*(?:#[^\r\n]*)?\r?\n)?[ \t]*#[^\r\n]*(?:coding[:=][ \t]*[-\w.]+|frozen_string_literal:[ \t]*(?:true|false))[^\r\n]*(?:\r?\n|$)/);
    if (magic) {
      prologue += magic[0];
      body = body.slice(magic[0].length);
    }
  }
  if (prologue && !prologue.endsWith('\n')) prologue += newline;
  const style = STYLES[styleName];
  const leading = body.match(style.leading)[0];
  body = (removeHeaders(leading, styleName) + body.slice(leading.length)).replace(/^(?:[ \t]*\r?\n)+/, '');
  return bom + prologue + style.render().join(newline) + newline + newline + body;
}

const { values: options, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    'dry-run': { type: 'boolean' },
    'check': { type: 'boolean' },
    'help': { type: 'boolean', short: 'h' },
  },
});
if (options.help) {
  console.log(`Usage: node scripts/update-copyright.mjs [--dry-run | --check] [path ...]
Add or update source copyright headers. Paths are relative to the repository root.
--dry-run  List changes without writing files.
--check    Do not write; exit 1 if any header is missing or outdated.
Edit HEADER in this script to change the shared copyright text.
Scans tracked and non-ignored untracked files; skips dependencies, third-party
code, generated directories, lockfiles, JSON, Markdown, binary files and symlinks.`);
} else {
  if (options['dry-run'] && options.check) throw new Error('Use either --dry-run or --check.');
  const root = fileURLToPath(new URL('../', import.meta.url));
  const files = execFileSync('git', [
    'ls-files', '-z', '--cached', '--others', '--exclude-standard', '--deduplicate', '--', ...positionals,
  ], { cwd: root, encoding: 'utf8', maxBuffer: 16 * 1024 * 1024 }).split('\0').filter(Boolean);
  let changed = 0;
  let unchanged = 0;
  let skipped = 0;
  for (const file of files) {
    const style = sourceStyle(file);
    const absolute = path.join(root, file);
    if (!style || !lstatSync(absolute, { throwIfNoEntry: false })?.isFile()) {
      skipped++;
      continue;
    }
    const buffer = readFileSync(absolute);
    const source = buffer.toString('utf8');
    if (buffer.includes(0) || !Buffer.from(source).equals(buffer)) {
      skipped++;
      continue;
    }
    const updated = updateSource(source, style);
    if (updated === source) {
      unchanged++;
      continue;
    }
    changed++;
    console.log(`${options.check ? 'Needs update' : options['dry-run'] ? 'Would update' : 'Updated'}: ${file}`);
    if (!options.check && !options['dry-run']) writeFileSync(absolute, updated);
  }
  console.log(`${changed} ${options.check || options['dry-run'] ? 'need updating' : 'updated'}, ${unchanged} unchanged, ${skipped} skipped.`);
  if (options.check && changed > 0) process.exitCode = 1;
}
