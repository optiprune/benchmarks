# Trial 08: Worker Threads & Service Workers

**Category:** `worker-entrypoints`  
**Entry point:** `src/index.ts`

## What this fixture proves

Recognizes standard Worker URL constructors as source graph entry points.

## Fixture files

- `src/index.ts`
- `src/sw.ts`
- `src/unused-worker.js`
- `src/worker.js`

## Ground truth

### Expected live graph

- `src/index.ts`
- `src/worker.js`

### Expected dead graph / findings

- `src/sw.ts`
- `src/unused-worker.js`

### Expected resolver or plugin diagnostics

- `worker-url:./worker.js`

## Acceptance criteria

An analyzer passes this trial when it preserves every expected live node, reports every expected dead node or finding, and emits the relevant diagnostics without introducing false positives. For Trial 15, the proposed fix must be validated before writing and leave the fixture parseable, resolvable, and type-safe.
