module.exports = {
  "stories": [
    
    "./../src/**/stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/preset-create-react-app",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
       {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
           modules: true,
           localIdentName: '[name]__[local]--[hash:base64:5]',
        }
      }
    },


  ],
  "framework": "@storybook/react"
}