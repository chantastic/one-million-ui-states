import Avatar from "./avatar";
import aang from "./assets/avatars/Aang.png";

export default { title: "Example/Avatar", component: Avatar };

export const Default = {
  args: {
    src: aang,
    alt: "Aang, the last airbender",
  },
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

function withTheme(Story) {
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
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
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
