module.exports = {
  presets: [
    "@babel/preset-react",
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-spread",
    "@babel/plugin-proposal-optional-chaining",
    "transform-object-rest-spread"
  ],
  env: {
    test: {
      presets: [
        [
          "@babel/preset-env",
        ],
      ],
    },
  },
  ignore: [
  ],
};
