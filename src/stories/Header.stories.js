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

export const LoggedInWithShortName = {
  args: {
    user: {
      name: "Jo",
    },
  },
};

export const LoggedInWithLongName = {
  args: {
    user: {
      name: "John Jacob Jingleheimer Schmidt",
    },
  },
};

/*
Lesson 4: Set story viewport

Using paramaters (in addition to args), we describe full UI cases.
Like the combination of a long name in small viewport.

Uncomment (or rewrite) the story below to see how long names render on mobile.
Note that this requires args from the `LoggedInWithLongName` story.
*/

export const LoggedInWithLongNameOnMobile = {
  args: LoggedInWithLongName.args,
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

/*
NOTE:
The viewport API is incredibly strange.
"mobile1" is a magic string in Storybook.
Read more about viewports here: https://storybook.js.org/docs/essentials/viewport#minimal_viewports
*/
