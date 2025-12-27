**27 Dec, 25**

# Understanding Advance Mocking Technique and Testing React App

## 1: Slighlty Advanced Mocking

- [Video PH](https://web.programming-hero.com/l2-b3-reward-courses/video/l2-b3-reward-courses-1-slighlty-advanced-mocking)

## 2: Mocking Modules Globally and What to Test What Not

## 3: Different Testing Environment and DOM Testing

- Different testing environment

  - NodeJS (Default)
    - Node apis and modules
    - Browser and other browser api is not available
  - Happy-DOM (vitest specific) - Provides the virtual browser environment with bowser apis and the DOM which makes it possible to test frontend codes.
  - JSDOM - Provides the virtual browser environment with bowser apis and the DOM which makes it possible to test frontend codes.

- `Commands`

```bash
yarn init -y
```

```bash
yarn add vitest -D
```

```bash
  "scripts": {
    "test": "vitest"
  },
```

- [ph vdo](https://web.programming-hero.com/l2-b3-reward-courses/video/l2-b3-reward-courses-3-different-testing-environment-and-dom-testing)
