module.exports = {
    // Array of file patterns to load for the test suite
    // `test/**/*.js` will include all JS files in the `test` directory and its subdirectories
    spec: 'test/**/*.test.js',
  
    // Specify a reporter to use (e.g., 'spec', 'dot', 'nyan')
    reporter: 'spec',
  
    // Set a timeout for tests, in milliseconds
    // Default is 2000ms (2 seconds)
    timeout: 30000, // 30 seconds
  
    // Use Babel for transpiling modern JavaScript (if needed)
    // Remove if not using Babel
    // require: '@babel/register',
  
    // Enable or disable recursive test directory searching
    // Default is true
    recursive: true,
  
    // Enable or disable the display of test progress
    // 'true' will show the progress of the test suite
    // Default is false
    progress: true,
  
    // Enable or disable colors in the output
    // Default is true
    colors: true,
  };
  