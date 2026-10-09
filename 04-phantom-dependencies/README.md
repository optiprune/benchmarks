# Trial 04: Phantom Dependencies

**Category:** `dependency-declarations`  
**Entry point:** `src/index.ts`

## What this fixture proves

Reports a direct import that is available only transitively and absent from the declaring package manifest.

## Fixture files

- `node_modules/some-framework/package.json`
- `package.json`
- `src/index.ts`

## Ground truth

### Expected live graph

- `src/index.ts`
- `node_modules/some-framework/package.json`

### Expected dead graph / findings

- None

### Expected resolver or plugin diagnostics

- `phantom-dependency:lodash-es`
- `declared-direct-import:false`

## Acceptance criteria

An analyzer passes this trial when it preserves every expected live node, reports every expected dead node or finding, and emits the relevant diagnostics without introducing false positives. For Trial 15, the proposed fix must be validated before writing and leave the fixture parseable, resolvable, and type-safe.
