// TODO: 11 Automate accessibility checks with
// const { injectAxe, checkA11y } = require("axe-playwright");

// module.exports = {
//   async preRender(page, context) {
//     await injectAxe(page);
//   },
//   async postRender(page, context) {
//     await checkA11y(page, "#root", {
//       detailedReport: true,
//       detailedReportOptions: {
//         html: true,
//       },
//     });

//     // TODO: 12 Capture snapshots of the accessibility tree (probably the only acceptable use of Jest Snapshots)
//     // const accessibilityTree = await page.accessibility.snapshot();
//     // expect(accessibilityTree).toMatchSnapshot();
//   },
// };
