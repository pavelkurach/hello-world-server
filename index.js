const express = require("express");
const cors = require("cors");
const port = process.env.PORT;

const app = express();

app.get("/", (request, response) => {
  response.send("Hello world");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`)
});