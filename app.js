const express = require('express');

const app = express();

// Define your API routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
