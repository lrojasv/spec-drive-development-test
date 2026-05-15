# Plan: Bootstrap UI with Centered Layout

## Context

The counter page works functionally but has no styling. The goal is to integrate Bootstrap 5, apply a modern gradient background, and center the title, counter, and button on the screen — both horizontally and vertically. No new Angular logic is needed; this is a pure styling change.

User decisions:
- Background: **gradient** (e.g. dark blue → purple)
- Bootstrap version: **5** (latest stable)

---

## Steps

### 1. Install Bootstrap 5

```
npm install bootstrap
```

This adds `bootstrap` to `dependencies` in `counter-app/package.json`.

### 2. Register Bootstrap CSS in angular.json

In `counter-app/angular.json`, add Bootstrap's CSS to the `styles` array under the build `options`:

```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
]
```

Bootstrap must come before `src/styles.css` so custom styles can override it.

### 3. Restyle counter-page.html with Bootstrap classes

Replace the current plain markup in `counter-app/src/app/counter-page/counter-page.html` with Bootstrap utility classes:

- Outer wrapper: full-viewport-height flex container, centered content (`d-flex vh-100 justify-content-center align-items-center`)
- Inner card: Bootstrap `card` with `shadow` and `text-center p-5` for padding
- Title: `h1` with `display-4 fw-bold mb-2`
- Account number: `text-muted small mb-4`
- Counter value: `display-1 fw-bold mb-4` in an accent color (using a custom class or Bootstrap text utilities)
- Button: `btn btn-primary btn-lg px-5`

### 4. Add gradient background in styles.css

In `counter-app/src/styles.css`, add a full-page gradient:

```css
body {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  min-height: 100vh;
}
```

And style the card to stand out against the dark background (semi-transparent or white card, accent color for the count).

### 5. Update tests for Bootstrap classes

Update `counter-app/tests/counter-page.spec.ts` to replace or extend existing DOM checks:

- Card container has class `card`
- Title element exists and has `display-4` or `h1` tag
- Counter value element has a prominent size class
- Button element has class `btn` and `btn-primary`

The 4 existing functional tests (count init, single click, multi-click, account number static) must continue to pass unchanged.

---

## Critical files

| File | Action |
|------|--------|
| `counter-app/package.json` | Modified by `npm install bootstrap` |
| `counter-app/angular.json` | Add Bootstrap CSS to `styles` array |
| `counter-app/src/app/counter-page/counter-page.html` | Rewrite with Bootstrap classes |
| `counter-app/src/styles.css` | Add gradient background on `body` |
| `counter-app/tests/counter-page.spec.ts` | Add Bootstrap class assertions |

---

## Verification

1. `npm start` — app opens at `http://localhost:4200/counter` with a dark gradient background and the card centered on screen
2. Click increment button — counter increments, card stays centered
3. Resize browser to mobile width — layout stays centered and readable
4. `npm test` — all 6 tests pass (2 app tests + 4 functional counter tests + new Bootstrap class tests)
