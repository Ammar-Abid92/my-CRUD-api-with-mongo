const express = require("express");
const app = express();
const db = require("./config/db");

db.connection
  .once("open", () => {
    console.log("DB connected");
  })
  .on("error", (err) => {
    console.log("ERROR in connection", err);
  });

app.listen(process.env.PORT || 3000, function () {
  console.log("listening on 3000");
});

app.use(express.json());

app.use("/", require("./routes"));
