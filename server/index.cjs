
require('ignore-styles').default(['.css', '.scss', '.png', '.jpeg', '.svg']);

require('@babel/register')({
  ignore: [/(node_modules)/],
  presets: ['@babel/preset-env', '@babel/preset-react']
})

require('./server.cjs')
