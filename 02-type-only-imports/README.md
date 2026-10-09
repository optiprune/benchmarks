# Trial 02: TypeScript Type-Only Imports

**Category:** `typescript-type-graph`  
**Entry point:** `src/index.ts`

## What this fixture proves

Separates type reachability from runtime package dependency reachability.

## Fixture files

- `package.json`
- `src/index.ts`
- `src/types.ts`

## Ground truth

### Expected live graph

- `src/index.ts`
- `src/types.ts`

### Expected dead graph / findings

- None

### Expected resolver or plugin diagnostics

- `edge:type-only-import`
- `runtime-dependency:none`

## Acceptance criteria

An analyzer passes this trial when it preserves every expected live node, reports every expected dead node or finding, and emits the relevant diagnostics without introducing false positives. For Trial 15, the proposed fix must be validated before writing and leave the fixture parseable, resolvable, and type-safe.
