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
         {
            test: /\.(svg|woff|woff2|ttf|eot)(\?.*$|$)/,
            use: ['file-loader']
         }
      ]
   },
   plugins: [
    new ExtractTextPlugin({filename:'bundle.css'})
   ]
};