// babel-register.js

require('ignore-styles'); // Ignore styles when running server-side

require('@babel/register')({
    ignore: [/(node_module)/], // Ignore node_modules
    presets: ['@babel/preset-env', '@babel/preset-react'], // Use presets for modern JS and React
});

// Import the server file
require('./server/index.cjs'); // Adjust this path if needed
