# Plan: Decrement Button

## Context

The counter page currently has only an increment button. This adds a decrement button to the right of it so users can reduce the count. The counter has a minimum of 0 — the decrement button is disabled when count is already 0.

User decision: **stop at 0** (button disabled, not hidden).

---

## Steps

### 1. Add `decrement()` method to the component

In `counter-app/src/app/counter-page/counter-page.ts`, add:

```
decrement(): void {
  if (this.count > 0) this.count--;
}
```

No other logic changes needed.

### 2. Update the template

In `counter-app/src/app/counter-page/counter-page.html`:

- Wrap the existing button and the new decrement button in a `d-flex gap-3 justify-content-center` container so they sit side by side
- Add the decrement button to the **right** of the increment button
- Style it as `btn btn-outline-primary btn-lg px-5` (outline variant to visually distinguish from the primary increment button)
- Bind `[disabled]="count === 0"` on the decrement button

### 3. Update tests

In `counter-app/tests/counter-page.spec.ts`, add:

- Decrement button is present in the DOM
- Clicking decrement after one increment returns count to 0
- Decrement button is disabled when count is 0
- Decrement button is enabled when count is greater than 0
- Count does not go below 0 when decrement is clicked repeatedly at 0

The existing 10 tests (functional + Bootstrap class assertions) must continue to pass.

Note: existing test "should increment count to 1 after one click" uses `querySelector('button')` which selects the **first** button. After this change, there will be two buttons. The increment button stays first in the DOM, so that test continues to work. The decrement button test should use `querySelectorAll('button')[1]` or a dedicated selector.

---

## Critical files

| File | Action |
|------|--------|
| `counter-app/src/app/counter-page/counter-page.ts` | Add `decrement()` method |
| `counter-app/src/app/counter-page/counter-page.html` | Wrap buttons in flex row, add decrement button with `[disabled]` binding |
| `counter-app/tests/counter-page.spec.ts` | Add 5 new tests for decrement behavior |

---

## Verification

1. `npm start` — page shows two buttons side by side; increment button on left, decrement on right
2. Count starts at 0 — decrement button is visually disabled
3. Click increment → count becomes 1, decrement button enables
4. Click decrement → count returns to 0, decrement button disables again
5. `npm test` — all tests pass (10 existing + 5 new = 15 total)
