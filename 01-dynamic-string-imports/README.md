# Trial 01: Dynamic String Imports

**Category:** `dynamic-imports`  
**Entry point:** `src/index.ts`

## What this fixture proves

Resolves locale path patterns and keeps only the reachable locale set.

## Fixture files

- `src/index.ts`
- `src/locales/fr.ts`
- `src/locales/unused.ts`
- `package.json`

## Ground truth

### Expected live graph

- `src/index.ts`
- `src/locales/fr.ts`

### Expected dead graph / findings

- `src/locales/unused.ts`

### Expected resolver or plugin diagnostics

- `dynamic-import-pattern:./locales/*.ts`

## Acceptance criteria

An analyzer passes this trial when it preserves every expected live node, reports every expected dead node or finding, and emits the relevant diagnostics without introducing false positives. For Trial 15, the proposed fix must be validated before writing and leave the fixture parseable, resolvable, and type-safe.
