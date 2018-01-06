var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    entry: './src/main.js',
    styles: './src/styles/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'

        ],
      },

      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          esModule: false,
          loaders: {
            'scss': [
              'vue-style-loader',
              'css-loader',
              'svg-fill-loader/encodeSharp',
              'sass-loader',
                {
                    loader: "sass-resources-loader",
                    options:{
                        resources:[
                            './src/styles/variables.scss',
                            './src/styles/mixins.scss'
                        ]
                    }
                }
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
        {
            test: /\.svg$/,
            use:[
                "url-loader",
                {
                    loader: "svg-fill-loader?fill=#fff"
                }
            ]
        }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'styles': path.resolve(__dirname, 'src/styles/components'),
      'src': path.resolve(__dirname, 'src'),
      'img':path.resolve(__dirname, 'src/assets/img'),
      'font':path.resolve(__dirname, 'src/assets/fonts')
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: false,
    overlay: true,
    open: false
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
