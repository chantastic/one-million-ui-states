import isChromatic from "chromatic/isChromatic";
import Avatar from "./avatar";
import aang from "./assets/avatars/Aang.png";

export default {
  title: "Example/Avatar",
  decorators: [withColorScheme],
};

export function Default() {
  return <Avatar src={aang} alt="Aang, the last airbender" />;
}

function withColorScheme(Story, context) {
  let { scheme } = context.globals;

  if (isChromatic()) {
    scheme = "both";
  }

  if (scheme === "light") {
    return (
      <Flex className="color-scheme--light">
        <Story />
      </Flex>
    );
  }

  if (scheme === "dark") {
    return (
      <Flex className="color-scheme--dark">
        <Story />
      </Flex>
    );
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

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      <Flex className="color-scheme--light">
        <Story />
      </Flex>
      <Flex className="color-scheme--dark">
        <Story />
      </Flex>
    </div>
  );
}
