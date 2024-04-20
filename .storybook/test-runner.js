/*
Lesson 9: Add accessibility tests with axe-playwright

Storybook comes with a fully configurable test runner.
Use the `preVisit` hook to inject necessary libraries into the page.
And `postVisit` to do any necessary validations.

Uncomment (or write) the code below.

Fix CSS (See locations in README)
*/

const { injectAxe, checkA11y } = require("axe-playwright");

module.exports = {
  async preVisit(page) {
    await injectAxe(page);
  },
  async postVisit(page) {
    await checkA11y(page, "#storybook-root", {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    });
    const accessibilityTree = await page.accessibility.snapshot();
    expect(accessibilityTree).toMatchSnapshot();
  },
};

/*
Lesson 10: Capture snapshots of the accessibility tree (probably the only acceptable use of Jest Snapshots)

With the Storybook test-runner setup, we can intgrate different testing side-effects.
Now we can serialize the accessibility tree and compare snapshots against future changes.

Move the code below into the `postVisit` function and re-run tests.
*/

// const accessibilityTree = await page.accessibility.snapshot();
// expect(accessibilityTree).toMatchSnapshot();
