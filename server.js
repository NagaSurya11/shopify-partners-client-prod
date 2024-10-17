const express = require("express");
const helmet = require("helmet");
const { join } = require("path");

const app = express();

const port = process.env.SERVER_PORT || 3000;


app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.use(express.static(join(__dirname, "client")));

app.get('*', (req, res) => res.sendFile(join(__dirname, 'client', 'index.html')));

app.listen(port, () => console.log(`Server listening on port ${port}`));
