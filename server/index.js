const express = require("express");
const app = express();
const port = 3001;

app.get("/", (_, res) => res.send("Hello World!"));

app.get("/api/json-data", (_, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ a: 1 }));
});

const download = (_, res) => {
  var file = __dirname + "/data/hello.txt";
  res.download(file); // Set disposition and send it.
};

app.get("/api/download", download);
app.post("/api/download", download);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
