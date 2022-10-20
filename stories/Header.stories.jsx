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

// TODO: 4 Because we're documenting isolated components, it's trivial to set up extreme cases
// export const LoggedInWithLongName = {
//   args: {
//     user: {
//       name: "John Jacob Jingleheimer Schmidt",
//     },
//   },
// };

// TODO: 5 Using paramaters (in addition to args), we can set up full UI cases.
//         Like the combination of a long name in small viewport.
// export const LoggedInWithLongNameOnMobile = {
//   args: LoggedInWithLongName.args,
//   parameters: {
//     viewport: {
//       defaultViewport: "mobile1",
//     },
//   },
// };
