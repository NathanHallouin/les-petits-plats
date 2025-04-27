const createExpoWebpackConfigAsync = require("@expo/webpack-config");
const { withNativewind } = require("nativewind/webpack");
const path = require("path");

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  // alias pour que "components/…" et "assets/…" fonctionnent en web
  config.resolve.alias = {
    ...config.resolve.alias,
    components: path.resolve(__dirname, "components"),
    assets: path.resolve(__dirname, "assets"),
  };

  return withNativewind(config);
};
