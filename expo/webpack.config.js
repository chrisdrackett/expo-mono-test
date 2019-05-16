const merge = require('webpack-merge')
// This will automatically get the dev/prod config based on process.env.NODE_ENV.
const expoConfig = require('@expo/webpack-config')

// https://github.com/apollographql/apollo-client/issues/4421
const modelLoaderConfiguration = {
  test: /\.mjs$/,
  include: /node_modules/,
  type: 'javascript/auto',
}

// Expo expects a function so we can pass around options.
module.exports = function(env, argv) {
  return merge(expoConfig(env, argv), {
    module: {
      rules: [modelLoaderConfiguration],
    },
  })
}
