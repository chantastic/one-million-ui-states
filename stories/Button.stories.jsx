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
