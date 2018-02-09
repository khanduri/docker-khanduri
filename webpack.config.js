// This library allows us to combine paths easily
const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
   entry: path.join(__dirname, './app/static/scripts', 'index.jsx'),
   output: {
      path: path.join(__dirname, './app/static/dist'),
      filename: 'bundle.js'
   },
   resolve: {
      extensions: ['.js', '.jsx']
   },
   module: {
      rules: [
         {
             test: /\.jsx/,
             use: {
                loader: 'babel-loader',
                options: { presets: ['react', 'es2015'] }
             }
         },
         {
            test: /\.(s*)css/,
            use: ExtractTextPlugin.extract({ 
              fallback:'style-loader',
              use:['css-loader','sass-loader'],
            })
         },
         {
            test: /\.(png|jp(e*)g|ttf|svg)$/,
            use: ['url-loader']
         },
         { test: /\.svg$/, loader: 'url?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]' },
         { test: /\.woff$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]' },
         { test: /\.woff2$/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]' },
         { test: /\.[ot]tf$/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]' },
         { test: /\.eot$/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]' }
      ]
   },
   plugins: [
    new ExtractTextPlugin({filename:'bundle.css'}),
   ]
};