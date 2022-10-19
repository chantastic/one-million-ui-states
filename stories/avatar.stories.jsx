import Avatar from "./avatar";
import aang from "./assets/avatars/Aang.png";

export default { title: "Example/Avatar", component: Avatar };

// 📝 Great because it's just code. But is static
export function Default() {
  return <Avatar src={aang} alt="Aang, the last airbender" />;
}

// 📝 CSF 3 makes these fields interactive
export const DefaultWithControls = {
  args: {
    src: aang,
    alt: "Aang, the last airbender",
  },
};

// 📝 with multi-theme decorator
export const ThemeGrid = {
  args: {
    src: aang,
    alt: "Aang, the last airbender",
  },
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      function Cell(props) {
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
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}
        >
          <Cell data-color-scheme="light" data-contrast="less">
            <Story />
          </Cell>
          <Cell data-color-scheme="light" data-contrast="more">
            <Story />
          </Cell>
          <Cell data-color-scheme="dark" data-contrast="less">
            <Story />
          </Cell>
          <Cell data-color-scheme="dark" data-contrast="more">
            <Story />
          </Cell>
        </div>
      );
    },
  ],
};
