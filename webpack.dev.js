const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common(), {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 8080,
  },
});

module.exports = (env) => {
  console.log(env);
  return merge(
    common(env),
    {
      mode: 'development',
      devtool: 'source-map',
      devServer: {
        port: 8080,
      },
    }
  );
}