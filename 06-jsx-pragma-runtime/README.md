# Trial 06: JSX/TSX Pragma & Runtime Injection

**Category:** `jsx-runtime`  
**Entry point:** `src/index.tsx`

## What this fixture proves

Recognizes jsxImportSource and automatic runtime package requirements.

## Fixture files

- `package.json`
- `src/index.tsx`
- `src/runtime.ts`

## Ground truth

### Expected live graph

- `package.json`
- `src/index.tsx`
- `src/runtime.ts`

### Expected dead graph / findings

- None

### Expected resolver or plugin diagnostics

- `jsxImportSource:@emotion/react`
- `runtime:@emotion/react/jsx-runtime`

## Acceptance criteria

An analyzer passes this trial when it preserves every expected live node, reports every expected dead node or finding, and emits the relevant diagnostics without introducing false positives. For Trial 15, the proposed fix must be validated before writing and leave the fixture parseable, resolvable, and type-safe.
