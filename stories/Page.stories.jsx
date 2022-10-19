import * as React from "react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import { Page } from "./Page";

export default {
  title: "Example/Page",
  component: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const LoggedOut = {};

export const LoggedIn = {
  render: renderWithMockedData,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.getByRole("button", { name: /Log in/i });
    await userEvent.click(loginButton);

    // expect(canvas.getByText(/Jane Doe/));
  },
};

// 📝 Compose play functions together
// export const LogInThenLogOut = {
//   render: LoggedIn.render,
//   play: async ({ canvasElement }) => {
//     await LoggedIn.play({ canvasElement });

//     const canvas = within(canvasElement);
//     const loginButton = await canvas.getByRole("button", { name: /Log out/i });
//     await userEvent.click(loginButton);

//     // expect(canvas.getByText(/Log in/));
//   },
// };

// 📝 rewards strong component isolation
// 🔗 addons available for [MSW](https://github.com/mswjs/msw-storybook-addon)
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
