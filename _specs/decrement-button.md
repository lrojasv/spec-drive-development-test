# Spec for decrement-button

branch: claude/feature/decrement-button
figma_component (if used): N/A

## Summary

Add a decrement button to the right of the existing increment button on the counter page. Clicking the decrement button reduces the counter value by one. Both buttons appear side by side, providing full control over the counter value.

## Functional Requirements

- A decrement button is displayed to the right of the existing increment button
- Clicking the decrement button reduces the counter value by exactly 1
- The updated counter value is reflected immediately in the UI after each click
- The increment button retains its existing position and behavior unchanged
- Both buttons are visually consistent with the current Bootstrap styling

## Figma Design Reference (only if referenced)

N/A

## Possible Edge Cases

- The counter should be allowed to go below zero, or a minimum value of 0 should be enforced — this needs to be decided
- Both buttons pressed in rapid succession should each register correctly
- The layout should remain centered and not break when both buttons are displayed side by side on small screens

## Acceptance Criteria

- [ ] A decrement button is visible to the right of the increment button
- [ ] Clicking the decrement button decreases the displayed counter by 1
- [ ] The counter updates reactively without a page reload
- [ ] The increment button continues to work correctly alongside the new decrement button
- [ ] Both buttons are styled consistently using Bootstrap
- [ ] The centered card layout is not broken by the addition of the second button

## Open Questions

- Should the counter be allowed to go below 0, or should the decrement button be disabled/hidden when the count is 0?

## Testing Guidelines

Create a test file(s) in the ./tests folder for the new feature, and create meaningful tests for the following cases, without going too heavy:

- Clicking the decrement button decreases the count by 1
- Clicking decrement after increment results in the original value (increment then decrement = 0)
- The decrement button is present in the DOM to the right of the increment button
