import "../src/themes.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// TODO: 14 Add global types for color scheme
//          (show url to demonstrate globals)
export const globalTypes = {
  scheme: {
    name: "Scheme",
    description: "Select light or dark theme",
    defaultValue: "light",
    toolbar: {
      icon: "mirror",
      items: ["light", "dark", "both"],
      showName: true,
      dynamicTitle: true,
    },
  },
  // TODO: 15 Add global types for color contrast
  contrast: {
    name: "Contrast",
    description: "Select less or more contrast",
    defaultValue: "less",
    toolbar: {
      icon: "contrast",
      items: ["less", "more", "both"],
      showName: true,
      dynamicTitle: true,
    },
  },
};

// TODO: 16 Add global decorator to display various themes
