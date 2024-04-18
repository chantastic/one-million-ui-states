import { within, userEvent, expect } from "@storybook/test";

import { Page } from "./Page";

export default {
  title: "Example/Page",
  component: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const LoggedOut = {};

/*
Lesson 5: Anatomy of a play function

Play functions use testing-library functions to create stories from user interactions.
They can include user events and Jest-style assertions.

You can observe the interactions that created a story in the Interactions Pane of the Addon Panel.

- Find and remove the click event that logs in the user
- What happens to both the story and interactions pane? 
*/

export const LoggedIn = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole("button", { name: /Log in/i });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();

    const logoutButton = canvas.getByRole("button", { name: /Log out/i });
    await expect(logoutButton).toBeInTheDocument();
  },
};
