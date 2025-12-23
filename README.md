# ChangeLog

![NPM Version](https://img.shields.io/npm/v/changelog-test-project)

[Website](https://eguneys.github.io/ChangeLog) • \[link\] Documentation

A Test project to test semantic versioning.

## A Quick Look


```ts
import { changelog } from 'changelog'

let cl = changelog()

console.log('hello', cl)
```

## Features

- A Custom Changelog
  - A nested change log


## How to Keep an Open-Source Project

- Keep a ChangeLog

- Git tags
 Every release is a git tag

```bash
 git tag v0.3.0
 git push origin v0.3.0
```

- Create a GitHub Release

Title: v0.3.0
Paste changelog section

- Commit style

  - Imperative messages
  - One logical change per commit

- Example

```bash

# 1. Make sure main is clean
git status

# 2. Update version in package.json

# 3. Update CHANGELOG.md


# 4. Commit
git commit -am "Release v0.3.0"

# 5. Tag
git tag v0.3.0
git push origin main --tags

# 6. Publish
pnpm publish

```

### Publishing with pnpm

If this is your first publish or you want safety:
   `pnpm publish --access public`

If you want a dry run:
   `pnpm publish --dry-run`


## Recommended Project Layout
```graphql
your-lib/
├─ src/                 # Library source
├─ dist/                # Build output (published)
├─ docs/                # Generated API data (gitignored)
│  └─ index.json
├─ website/             # Public project website (Vite)
│  ├─ src/
│  ├─ public/
│  └─ vite.config.ts
├─ docs-site/           # API docs renderer (Vite)
│  ├─ src/
│  ├─ public/
│  └─ vite.config.ts
├─ package.json
├─ pnpm-workspace.yaml
├─ CHANGELOG.md
├─ README.md
└─ LICENSE
```


## Release Day

```
# release
pnpm test
pnpm build
pnpm publish

# docs
pnpm docs:build
pnpm --filter docs-site build
pnpm --filter website build
```

## Versioning

This project follows Semantic Versioning.
Breaking changes will only occur in major releases.

## Please Buy me a Coffee

[Buy Me a Coffee](https://buymeacoffee.com/eguneys)