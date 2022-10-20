import * as React from "react";
import { within, userEvent } from "@storybook/testing-library";
// TODO: 8 Use jest assertions!
// import { expect } from "@storybook/jest";

import { Page } from "./Page";

export default {
  title: "Example/Page",
  component: Page,
  parameters: {
    layout: "fullscreen",
    // TODO: 13 Set the viewports in Chromatic at a component level.
    //          For composed views and templates, we want to see them at all viewports.
    // chromatic: { viewports: [640, 768, 1024, 1280, 1536] },
  },
};

export const LoggedOut = {};

export const LoggedIn = {
  render: renderWithMockedData,
  // TODO: 6 Anatomy of Play functions (show story first)
  //         - async funtion
  //         - testing-library event API
  //         - actions performed on stories
  //         - actions logged in Interactions panel
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.getByRole("button", { name: /Log in/i });
    await userEvent.click(loginButton);

    // expect(canvas.getByText(/Jane Doe/));
  },
};

// TODO: 7 Compose play functions with others
// export const LogInThenLogOut = {
//   render: LoggedIn.render, // re-uses LoggedIn.render method
//   play: async ({ canvasElement }) => {
//     await LoggedIn.play({ canvasElement }); // re-uses LoggedIn.play function

//     // performs an additional interaction
//     const canvas = within(canvasElement);
//     const loginButton = await canvas.getByRole("button", { name: /Log out/i });
//     await userEvent.click(loginButton);

//     // expect(canvas.getByText(/Log in/));
//   },
// };

// TODO: 9 Rewards strong component isolation
//         - Page component is a pure function of props
//         - We provide a small mock to test the interface and interactions
function renderWithMockedData() {
  function MockUser({ children }) {
    const userState = React.useState(null);

    return typeof children === "function" ? children(userState) : children;
  }

  return (
    <MockUser>
      {([user, setUser]) => (
        <Page
          onLogin={() => setUser({ name: "Jane Doe" })}
          onLogout={() => setUser(null)}
          onCreateAccount={() => setUser({ name: "Jane Doe" })}
          user={user}
        />
      )}
    </MockUser>
  );
}

// TODO: 10 The test-runner runs headless chromium in jest
//          requires @storybook/test-runner and addition of "test-storybook script"
