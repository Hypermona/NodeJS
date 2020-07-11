const express = require("express");
const bodyPraser = require("body-parser");

const dishRouter = express.Router();

dishRouter.use(bodyPraser.json());

dishRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send all the dishes to you!");
  })
  .post((req, res, next) => {
    res.end(
      `Will add the dish ${req.body.name} with details: ${req.body.description}`
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("Put operation is not supported on /dishes");
  })
  .delete((req, res, next) => {
    res.end("deleting all the dishes ");
  });
dishRouter
  .route("/:dishId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end(`will send the dish ${req.params.dishId} to you!`);
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end(`THe put method is not work for dush ${req.params.dishId}`);
  })
  .post((req, res, next) => {
    res.end(
      `Will update the dish ${req.body.name} with description ${req.body.description}`
    );
  })
  .delete((req, res, next) => {
    res.end(`We are deleting dish ${req.params.dishId}`);
  });
module.exports = dishRouter;
