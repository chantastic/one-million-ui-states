// import isChromatic from "chromatic/isChromatic";
import "../src/color-scheme.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  scheme: {
    name: "Scheme",
    description: "Select light or dark theme",
    defaultValue: "light",
    toolbar: {
      icon: "mirror",
      items: ["light", "dark", "both"],
      dynamicTitle: true,
    },
  },
};
