# autoTest - Playwright Automation Portfolio

A small, self-contained example of my test automation approach: Page Object Model
design, Playwright's built-in locators/assertions, and a multi-browser config.

> This is a personal portfolio example built against Playwright's public TodoMVC
> demo app - it does not contain any employer code or data. My production
> automation work (Motive: Playwright component/VRT testing, Kotlin Android
> automation, API automation) lives in private company repositories for
> confidentiality reasons; see my resume/LinkedIn for details on that work.

## Stack
- **Playwright** (`@playwright/test`) - test runner + assertions
- **JavaScript** - page objects and specs
- **Page Object Model (POM)** - see `pages/TodoPage.js`

## Structure
```
autoTest/
  pages/
    TodoPage.js       # Page Object for the TodoMVC demo app
  tests/
    todo.spec.js      # Specs: add, complete, filter todos
  playwright.config.js  # Multi-browser config (Chromium/Firefox/WebKit)
  package.json
```

## Patterns demonstrated
- **Page Object Model** - page interactions and locators encapsulated in a
  class, kept out of the test specs
- **Locator-first Playwright API** (`getByRole`, `getByPlaceholder`,
  `getByTestId`) instead of brittle CSS/XPath selectors
- **Web-first assertions** (`toHaveCount`, `toHaveClass`) that auto-wait,
  avoiding manual sleeps
- **Cross-browser project matrix** (Chromium, Firefox, WebKit)

## Running locally
```bash
npm install
npx playwright install
npm test
```

---

For my day-to-day SDET work - Visual Regression Testing ownership, Kotlin
Android automation, and Storybook/Playwright component testing at scale (376
tests across 83 story files) - see my resume.
