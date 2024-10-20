// express js inilatizing the app

const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// defining the endpoints
app.get("/", (req, res) => {
  res.send("Hello World! This is the server home page");
});
