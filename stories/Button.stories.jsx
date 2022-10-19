import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  args: { primary: false, label: "Button" },
};

export const Primary = {
  args: {
    primary: true,
  },
};

export const Secondary = {};

export const Large = {
  args: {
    size: "large",
  },
};

export const Small = {
  args: {
    size: "small",
  },
};

// 📝 Because these are just objects, we can compose stories from other stories
// export const LargePrimary = {
//   args: {
//     ...Large.args,
//     ...Primary.args,
//   },
// };

// 📝 Extreme casing: demonstrating extreme and non-ideal cases
// export const LongCTAOnMobile = {
//   args: {
//     primary: true,
//     label:
//       "The compliance team doesn't care how ugly this is. All this text must be present — legally…",
//   },
//   parameters: {
//     viewport: {
//       defaultViewport: "mobile1",
//     },
//   },
// };
