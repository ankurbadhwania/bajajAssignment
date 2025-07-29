const express = require("express");
const app = express();
const routes = require("./routes/route");

app.use(express.json());
app.use(routes);

const port = 3000;
app.listen(port, () => {
  console.log("server connected on port", port);
});
