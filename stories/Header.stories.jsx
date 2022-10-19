import { Header } from "./Header";

export default {
  title: "Example/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
};

export const LoggedOut = {};

export const LoggedIn = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
};

// 📝 Because these are just objects, we can compose stories from other stories
// export const LoggedInLongName = {
//   args: {
//     user: {
//       name: "John Jacob Jingleheimer Schmidt",
//     },
//   },
// };

// 📝 Extreme casing: demonstrating extreme and non-ideal cases
// export const LoggedInLongNameOnMobile = {
//   args: LoggedInLongName.args,
//   parameters: {
//     viewport: {
//       defaultViewport: "mobile1",
//     },
//   },
// };
