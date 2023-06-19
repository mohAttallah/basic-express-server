require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

// Error Handler (middleware)
const pageNotFound = require("./src/error-handlers/404");
const serverError = require("./src/error-handlers/500");

// middleware
const validator = require("./src/middleware/validator");
const agent = require("./src/middleware/browserAgent");
const logger = require("./src/middleware/logger");

app.use(logger);

app.get("/", agent, (req, res) => {
  res.status(200).json({
    message: "Welcome To Home Page",
    agent: req.userAgent,
  });
});

// endpoint :http://localhost:3000/person?name=Mohamad
app.get("/person", validator, (req, res) => {
  const name = req.query.name;
  res.status(200).json({
    code: 200,
    name: name,
  });
});

// Error Handle
app.use("*", pageNotFound);
app.use(serverError);

function start(port) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = {
  app,
  start,
};
