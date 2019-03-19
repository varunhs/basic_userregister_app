const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dbConfig = require("./config/database.config");
const routes = require("./app/routes/index.router");

const app = express();
mongoose.Promise = global.Promise;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// require("./app/routes/userRegister.route.js")(app);
app.use("/api", routes);

mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch(err => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({ message: "WELCOME TO NODE EXAMPLE PROJECT" });
});

app.listen(5000, () => {
  console.log("SERVER IS RUNNING AT PORT 5000");
});
