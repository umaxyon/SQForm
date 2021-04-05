module.exports = {
  stories: ['../stories/*.stories.{js,mdx}'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    'storybook-addon-material-ui',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true
      }
    }
  ],
  webpackFinal: config => {
    config.module.rules = [
      ...config.module.rules,
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ];

    return config;
  }
};
