module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    // 📝 Bring accessibility checks right into documentation
    //    Installed once. Available to everyone.
    // "@storybook/addon-a11y"
  ],
  "framework": "@storybook/react"
}