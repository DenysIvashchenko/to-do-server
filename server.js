const expres = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = expres();

//Bodyparser Middleware
app.use(bodyParser.json());

//DB config
const db = require("./config/keys").mongoURI;

//Connect to Mongo DB

mongoose
  .connect(db)
  .then(() => console.log("Mongo connected..."))
  .catch((err) => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server work on port ${port}`));
