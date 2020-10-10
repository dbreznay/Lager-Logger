const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const routes = require("./routes")
const app = express();
const session = require("express-session");
const passport = require("passport");
const flash = require('connect-flash');
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(flash());
app.use(express.static("public"));
app.use(session({
  secret: "keyboard cat",
  resave: false,
  saveUninitialize: true,
}));

app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} 

app.use(logger("dev"));

app.use(routes);

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/memoryGame"
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true  })
  .then(() => console.log('MongoDB Connected...'))

/
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});