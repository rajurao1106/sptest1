import path from 'path';
import fs from 'fs';

import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../src/App';

const PORT = 3000;
const app = express();

const router = express.Router();

const serverRenderer = (req, res, next) => {
  // Read the build/index.html file for the static template
  fs.readFile(path.resolve('./dist/index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading index.html', err);
      return res.status(500).send('An error occurred');
    }

    // Replace the root div with server-side rendered content
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
      )
    );
  });
};

// Define route for server-side rendering
router.use('^/$', serverRenderer);

// Serve static assets from the build folder
router.use(
  express.static(path.join(__dirname, '..', 'dist'), { maxAge: '30d' })
);

// Attach the router to the app
app.use(router);

// Start the server
app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`);
});
