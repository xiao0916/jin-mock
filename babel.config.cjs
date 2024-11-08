module.exports = {
  sourceMaps: true,
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          ie: 11,
          browsers: "last 2 versions",
        },
        useBuiltIns: "usage",
        corejs: "3.39",
      },
    ],
  ],
  ignore: ["node_modules"],
};
