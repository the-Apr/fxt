module.exports = {
  
  entry: './app/app.js', 
  optimization: {
    usedExports: true, // Enable tree shaking
  },
};