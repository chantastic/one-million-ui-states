import { Header } from "./Header";
import { fn } from "@storybook/test";

export default {
  title: "Example/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
};

export const LoggedIn = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
};

export const LoggedOut = {};

/*
Lesson 3: Document extreme cases

Stories are isolated UI states.
They're cheap to create, making it easy to capture extreme cases.

Uncomment (or re-write) the code below to document both short and long extreme cases.
*/

// export const LoggedInWithShortName = {
//   args: {
//     user: {
//       name: "Jo",
//     },
//   },
// };

// export const LoggedInWithLongName = {
//   args: {
//     user: {
//       name: "John Jacob Jingleheimer Schmidt",
//     },
//   },
// };
