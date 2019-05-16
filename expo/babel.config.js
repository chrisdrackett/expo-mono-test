module.exports = api => {
  api.cache(true);

  const presets = ["babel-preset-expo"];

  const plugins = [
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          "^react-native$": "react-native-web",
          ui: "@test/ui"
        }
      }
    ]
  ];

  return {
    presets,
    plugins
  };
};
