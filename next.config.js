module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
    })

    return config
  },
}