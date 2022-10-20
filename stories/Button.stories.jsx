// TODO: 1. Anatomy of a story
import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  args: { primary: false, label: "Button" },
};

// TODO: 2. Stories can be JSX. Just like you'd use them in an app
// export const Default = <Button label="Sad Button" primary={true} />;

export const Primary = {
  args: {
    primary: true,
  },
};

export const Secondary = {};

export const Large = {
  args: {
    size: "large",
  },
};

export const Small = {
  args: {
    size: "small",
  },
};

// TODO: 3 Because CSF 3 uses objects, stories are easy to compose from other stories
// export const LargePrimary = {
//   args: {
//     ...Large.args,
//     ...Primary.args,
//   },
// };
