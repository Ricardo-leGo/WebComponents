module.exports = {
  "stories": [
    "./../src/**/stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/react",
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addons",
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register',
    '@storybook/addon-controls/register',
    '@storybook/addon-viewport/register',
    '@storybook/preset-create-react-app',
  ]
}