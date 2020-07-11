const express = require("express");
const bodyPraser = require("body-parser");

const leaderRouter = express.Router();

leaderRouter.use(bodyPraser.json());

leaderRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send all the leaderes to you!");
  })
  .post((req, res, next) => {
    res.end(
      `Will add the leader ${req.body.name} with details: ${req.body.description}`
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("Put operation is not supported on /leaderes");
  })
  .delete((req, res, next) => {
    res.end("deleting all the leaderes ");
  });
leaderRouter
  .route("/:leaderId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end(`will send the leader ${req.params.leaderId} to you!`);
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end(`THe put method is not work for dush ${req.params.leaderId}`);
  })
  .post((req, res, next) => {
    res.end(
      `Will update the leader ${req.body.name} with description ${req.body.description}`
    );
  })
  .delete((req, res, next) => {
    res.end(`We are deleting leader ${req.params.leaderId}`);
  });
module.exports = leaderRouter;
