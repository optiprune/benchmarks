# Trial 07: Class Member & Method Reachability

**Category:** `class-reachability`  
**Entry point:** `src/index.ts`

## What this fixture proves

Analyzes member-level reachability and flags unused private methods and never-instantiated classes.

## Fixture files

- `src/calculator.ts`
- `src/index.ts`

## Ground truth

### Expected live graph

- `src/index.ts`
- `class:Calculator`
- `method:Calculator.add`

### Expected dead graph / findings

- `method:Calculator.normalize`
- `class:NeverUsed`
- `method:NeverUsed.run`

### Expected resolver or plugin diagnostics

- `member-reachability`

## Acceptance criteria

An analyzer passes this trial when it preserves every expected live node, reports every expected dead node or finding, and emits the relevant diagnostics without introducing false positives. For Trial 15, the proposed fix must be validated before writing and leave the fixture parseable, resolvable, and type-safe.
