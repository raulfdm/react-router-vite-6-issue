# React Router + Vite 6 dependency import issue

## Requirements

- Node 22
- pnpm 9 (using npm behaves the same)

## Setup

All setup has the same settings, except for the react-router dependency version.

You'll find a lot of vite\* folders but that's because I wanted to try out to see if the problem was with Vite or not.

## Reproducing

### Non buggy

From root:

```
cd vite5-react-router712 && pnpm i && pnpm run dev
```

At [http://localhost:5173/](http://localhost:5173/), you'll find the app working.

### Buggy

From root:

```
cd vite6-react-router712 && pnpm i && pnpm run dev
```

At [http://localhost:5173/](http://localhost:5173/), you'll find the issue:

```
Cannot find module '/Users/raulmelo/development/sandbox/react-router-xstate/vite6-react-router712/node_modules/.pnpm/@xstate+react@5.0.2_@types+react@19.0.7_react@19.0.0_xstate@5.19.2/node_modules/use-sync-external-store/shim/with-selector' imported from /Users/raulmelo/development/sandbox/react-router-xstate/vite6-react-router712/node_modules/.pnpm/@xstate+react@5.0.2_@types+react@19.0.7_react@19.0.0_xstate@5.19.2/node_modules/@xstate/react/dist/xstate-react.development.esm.js
Did you mean to import "use-sync-external-store/shim/with-selector.js"?
```
