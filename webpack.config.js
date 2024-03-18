const webpack = require('webpack');

module.exports = {
  entry: './app/app.js', 
  optimization: {
    usedExports: true, 
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'), 
      '__VUE_PROD_DEVTOOLS__': false, 
      '__VUE_OPTIONS_API__': true, 
      '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': false 
      
    })
  ]
};