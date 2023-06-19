"use strict";

module.exports = (error, req, res, next) => {
  console.log(error);
  res.status(500).json({
    code: 500,
    query: req.query,
    route: req.originalUrl,
    body: req.body,
    message: `SERVER ERROR  ${error.message}`,
  });
};
