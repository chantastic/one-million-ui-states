import Avatar from "./avatar";
import aang from "./assets/avatars/Aang.png";

import isChromatic from "chromatic/isChromatic";

export default { title: "Example/Avatar", component: Avatar };

export const Default = {
  args: {
    src: aang,
    alt: "Aang, the last airbender",
  },
  decorators: [withSelectableTheme],
};

// TODO: 13 Allow for multiple themes in the same story
//          This works great for atoms that we want to test across themes
//          (show themes.css file)
// export const ThemeGrid = {
//   args: {
//     src: aang,
//     alt: "Aang, the last airbender",
//   },
//   parameters: {
//     layout: "fullscreen",
//   },
//   // TODO: 17 Remove previous decorator
//   // decorators: [withTheme],
// };

function withSelectableTheme(Story, context) {
  let { scheme, contrast } = context.globals;

  if (isChromatic()) {
    scheme = "both";
    contrast = "both";
  }

  function Flex(props) {
    return (
      <div
        {...props}
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "2rem 0 2rem",
        }}
      />
    );
  }

  if (scheme === "both" && contrast === "both") {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
        }}
      >
        <Flex data-color-scheme="light" data-contrast="less">
          <Story />
        </Flex>
        <Flex data-color-scheme="light" data-contrast="more">
          <Story />
        </Flex>
        <Flex data-color-scheme="dark" data-contrast="less">
          <Story />
        </Flex>
        <Flex data-color-scheme="dark" data-contrast="more">
          <Story />
        </Flex>
      </div>
    );
  }

  if (scheme === "light" && contrast === "both") {
    return (
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <Flex data-color-scheme="light" data-contrast="less">
          <Story />
        </Flex>
        <Flex data-color-scheme="light" data-contrast="more">
          <Story />
        </Flex>
      </div>
    );
  }

  if (scheme === "dark" && contrast === "both") {
    return (
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <Flex data-color-scheme="dark" data-contrast="less">
          <Story />
        </Flex>
        <Flex data-color-scheme="dark" data-contrast="more">
          <Story />
        </Flex>
      </div>
    );
  }

  if (scheme === "both" && contrast === "less") {
    return (
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <Flex data-color-scheme="light" data-contrast="less">
          <Story />
        </Flex>
        <Flex data-color-scheme="dark" data-contrast="less">
          <Story />
        </Flex>
      </div>
    );
  }

  if (scheme === "both" && contrast === "more") {
    return (
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <Flex data-color-scheme="light" data-contrast="more">
          <Story />
        </Flex>
        <Flex data-color-scheme="dark" data-contrast="more">
          <Story />
        </Flex>
      </div>
    );
  }

  if (scheme === "light" && contrast === "less") {
    return (
      <Flex data-color-scheme="light" data-contrast="less">
        <Story />
      </Flex>
    );
  }

  if (scheme === "light" && contrast === "more") {
    return (
      <Flex data-color-scheme="light" data-contrast="more">
        <Story />
      </Flex>
    );
  }

  if (scheme === "dark" && contrast === "less") {
    return (
      <Flex data-color-scheme="dark" data-contrast="less">
        <Story />
      </Flex>
    );
  }

  if (scheme === "dark" && contrast === "more") {
    return (
      <Flex data-color-scheme="dark" data-contrast="more">
        <Story />
      </Flex>
    );
  }

  if (scheme === "both" && contrast === "") {
    return (
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <Flex data-color-scheme="light" data-contrast="more">
          <Story />
        </Flex>
        <Flex data-color-scheme="light" data-contrast="more">
          <Story />
        </Flex>
      </div>
    );
  }

  return <Story />;
}
