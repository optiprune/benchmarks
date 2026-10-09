# Trial 05: Turborepo Workspace Boundaries

**Category:** `workspace-boundaries`  
**Entry point:** `packages/app/src/index.ts`

## What this fixture proves

Resolves package-name imports to workspace package sources without a full build.

## Fixture files

- `package.json`
- `packages/app/package.json`
- `packages/app/src/index.ts`
- `packages/ui/package.json`
- `packages/ui/src/index.ts`
- `turbo.json`

## Ground truth

### Expected live graph

- `packages/app/src/index.ts`
- `packages/ui/src/index.ts`

### Expected dead graph / findings

- None

### Expected resolver or plugin diagnostics

- `workspace-link:@trials/ui`

## Acceptance criteria

An analyzer passes this trial when it preserves every expected live node, reports every expected dead node or finding, and emits the relevant diagnostics without introducing false positives. For Trial 15, the proposed fix must be validated before writing and leave the fixture parseable, resolvable, and type-safe.
