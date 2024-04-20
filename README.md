# How I Test a Million UI States with Every Merge — Visual Testing with Storybook

- [Lesson 1: Anatomy of a Story](./src/stories/Button.stories.js#L5)
- [Lesson 2: Compose stories](./src/stories/Button.stories.js#L60)
- [Lesson 3: Document extreme cases](./src/stories/Header.stories.js#L29)
- [Lesson 4: Set story viewport](./src/stories/Header.stories.js#L54)
- [Lesson 5: Anatomy of a play function](./src/stories/Page.stories.js#L16)
- [Lesson 6: Compose play functions](./src/stories/Page.stories.js#L41)
- [Lesson 7: Stories eliminate complex setup](./src/stories/Page.jsx#L7)
- Lesson 8: Run tests headlessly
  - `npm install @storybook/test-runner --save-dev`
  - `npx playwright install`
  - `npx exec test-storybook`
- [Lesson 9: Add accessibility tests with ax-eplaywright](./.storybook/test-runner.js#L2)
  - `npm install axe-playwright`
  - [fix button.css](./src/stories/button.css#L12)
  - [fix page anchor](./src/stories/page.css#L27)
- [Lesson 10: Capture snapshots of the accessibility tree (probably the only acceptable use of Jest Snapshots)](./.storybook/test-runner.js#L32)
- [Lesson 11: Integrate visual tests with Chromatic]
  - Log into chromatic.com
  - Add project and connect with GitHub
  - `npm install --save-dev chromatic`
  - `npx chromatic --project-token=<project_token>`
  - Go to project
  - Explore UI features