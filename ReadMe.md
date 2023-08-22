# Vite TypeScript MUI Emotion Styled Theme Issue

This repository is a minimal reproduction of an issue involving `vite`, `typescript`, `@mui/material`, `@emotion/styled` and theme.

## Problem Description

When running tests, there's an error that occurs with theme properties being undefined. This seems to involve a combination of `@emotion/styled` and `@mui/material` theme provider.

Error during testing:

```
TypeError: Cannot read properties of undefined (reading 'backgrounds')
```

## Full error message

```
npm test

> vite-typescript-mui-emotion-styled-theme-issue@0.0.0 test
> vitest


 RUN  v0.34.2 ./vite-typescript-mui-emotion-styled-theme-issue

stdout | unknown test
Download the React DevTools for a better development experience: https://reactjs.org/link/react-devtools

 ✓ src/themes/themes.test.tsx  (6 tests) 7ms
stdout | unknown test
Download the React DevTools for a better development experience: https://reactjs.org/link/react-devtools

stderr | src/button/Button.test.tsx > <Button /> > should render correctly with dark theme
The above error occurred in the <StyledButton> component:

    at ./vite-typescript-mui-emotion-styled-theme-issue/node_modules/@emotion/react/dist/emotion-element-6bdfffb2.esm.js:46:39
    at Button (./vite-typescript-mui-emotion-styled-theme-issue/src/button/Button.tsx:6:3)
    at ThemeProvider (./vite-typescript-mui-emotion-styled-theme-issue/node_modules/@mui/private-theming/node/ThemeProvider/ThemeProvider.js:39:5)
    at ThemeProvider (./vite-typescript-mui-emotion-styled-theme-issue/node_modules/@mui/system/ThemeProvider/ThemeProvider.js:50:5)
    at ThemeProvider (./vite-typescript-mui-emotion-styled-theme-issue/node_modules/@mui/material/node/styles/ThemeProvider.js:21:14)

Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.

stderr | src/button/Button.test.tsx > <Button /> > should render correctly with light theme
The above error occurred in the <StyledButton> component:

    at ./vite-typescript-mui-emotion-styled-theme-issue/node_modules/@emotion/react/dist/emotion-element-6bdfffb2.esm.js:46:39
    at Button (./vite-typescript-mui-emotion-styled-theme-issue/src/button/Button.tsx:6:3)
    at ThemeProvider (./vite-typescript-mui-emotion-styled-theme-issue/node_modules/@mui/private-theming/node/ThemeProvider/ThemeProvider.js:39:5)
    at ThemeProvider (./vite-typescript-mui-emotion-styled-theme-issue/node_modules/@mui/system/ThemeProvider/ThemeProvider.js:50:5)
    at ThemeProvider (./vite-typescript-mui-emotion-styled-theme-issue/node_modules/@mui/material/node/styles/ThemeProvider.js:21:14)

Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.

 ❯ src/button/Button.test.tsx  (2 tests | 2 failed) 40ms
   ❯ src/button/Button.test.tsx > <Button /> > should render correctly with dark theme
     → Cannot read properties of undefined (reading 'backgrounds')
   ❯ src/button/Button.test.tsx > <Button /> > should render correctly with light theme
     → Cannot read properties of undefined (reading 'backgrounds')

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Tests 2 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 FAIL  src/button/Button.test.tsx > <Button /> > should render correctly with dark theme
 FAIL  src/button/Button.test.tsx > <Button /> > should render correctly with light theme
TypeError: Cannot read properties of undefined (reading 'backgrounds')
 ❯ Object.defineProperty.enumerable src/button/Button.styled.tsx:6:56
      4|
      5| export const StyledButton = styled(MUIButton)<{ theme?: Theme }>`
      6|     background-color: ${(props) => props.theme.palette.backgrounds.custom};
       |                                                        ^
      7|     color: ${(props) => props.theme.palette.text.primary};
      8|     padding: 8px 16px;
 ❯ handleInterpolation node_modules/@emotion/serialize/dist/emotion-serialize.esm.js:142:24
 ❯ Module.serializeStyles node_modules/@emotion/serialize/dist/emotion-serialize.esm.js:267:15
 ❯ node_modules/@emotion/styled/base/dist/emotion-styled-base.esm.js:147:46
 ❯ node_modules/@emotion/react/dist/emotion-element-6bdfffb2.esm.js:47:12
 ❯ renderWithHooks node_modules/react-dom/cjs/react-dom.development.js:16305:18
 ❯ updateForwardRef node_modules/react-dom/cjs/react-dom.development.js:19226:20
 ❯ beginWork node_modules/react-dom/cjs/react-dom.development.js:21636:16
 ❯ HTMLUnknownElement.callCallback node_modules/react-dom/cjs/react-dom.development.js:4164:14
 ❯ HTMLUnknownElement.dispatchEvent node_modules/happy-dom/src/event/EventTarget.ts:167:41

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/2]⎯

 Test Files  1 failed | 1 passed (2)
      Tests  2 failed | 6 passed (8)
   Start at  13:37:42
   Duration  2.71s (transform 667ms, setup 0ms, collect 3.17s, tests 47ms, environment 502ms, prepare 297ms)
```

## Steps to reproduce

1. Clone this repository.
2. Install the dependencies using `npm install`.
3. Run the tests using `npm test`.

## Project Setup

The project was initialized using:

```
npx create-vite-app --template react-ts
```

Then I updated all the packages.

### Key Dependencies

Here are the notable packages involved:

- **@emotion/react** & **@emotion/styled**: For styling components.
- **@mui/material**: Material-UI components.
- **vite**: Build tool.
- **vitest**: Testing tool.
- **react** & **react-dom**: The main libraries.

For a complete list of dependencies and versions, refer to [`package.json`](./package.json).

## Workaround

Currently trying to figure it out, but I know that this used to work with previous versions of related packages.

---

## Feedback

If you have any insights or solutions to the issue, please contribute or open an issue.
