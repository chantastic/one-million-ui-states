import { fn } from "@storybook/test";
import { Button } from "./Button";

/*
Lesson 1: Anatomy of a Story

Let's learn about stories by commenting out and re-writing sections of this file.
- Remove named exports (stories)
- Remove args (story args)
- Remove component args
- Remove component argsTypes
- Remove autodocs tag
- Remove parameters
- Remove title meta
- Remove component meta
- Write MVP story
*/

export default {
  // title: "Example/Button",
  component: Button,
  // parameters: {
  //   layout: "centered",
  // },
  // tags: ["autodocs"],
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
  // args: { onClick: fn() },
};

export const Primary = {
  args: {
    primary: true,
    label: "Button",
  },
};

// export const Secondary = {
//   args: {
//     label: "Button",
//   },
// };

export const Large = {
  args: {
    size: "large",
    label: "Button",
  },
};

// export const Small = {
//   args: {
//     size: "small",
//     label: "Button",
//   },
// };

/*
Lesson 2: Compose stories

Stories (using SCF object syntax) can compose args from other stories.
Uncomment (or re-write) the story below to make a new story from others.
*/

export const LargePrimary = {
  args: {
    ...Large.args,
    ...Primary.args,
  },
};
