# Trial 03: Circular Dependency Dead Islands

**Category:** `strongly-connected-components`  
**Entry point:** `src/index.ts`

## What this fixture proves

Finds an isolated A↔B strongly connected component instead of marking it live merely because it is cyclic.

## Fixture files

- `src/a.ts`
- `src/b.ts`
- `src/index.ts`
- `src/live.ts`

## Ground truth

### Expected live graph

- `src/index.ts`
- `src/live.ts`

### Expected dead graph / findings

- `src/a.ts`
- `src/b.ts`

### Expected resolver or plugin diagnostics

- `isolated-scc:#0`
- `cycle:src/a.ts<->src/b.ts`

## Acceptance criteria

An analyzer passes this trial when it preserves every expected live node, reports every expected dead node or finding, and emits the relevant diagnostics without introducing false positives. For Trial 15, the proposed fix must be validated before writing and leave the fixture parseable, resolvable, and type-safe.
