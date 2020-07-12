const express = require("express");
const bodyPraser = require("body-parser");

const promotionRouter = express.Router();

promotionRouter.use(bodyPraser.json());

promotionRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send all the promotiones to you!");
  })
  .post((req, res, next) => {
    res.end(
      `Will add the promotion ${req.body.name} with details: ${req.body.description}`
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("Put operation is not supported on /promotiones");
  })
  .delete((req, res, next) => {
    res.end("deleting all the promotiones ");
  });
promotionRouter
  .route("/:promotionId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end(`will send the promotion ${req.params.promotionId} to you!`);
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end(`THe put method is not work for dush ${req.params.promotionId}`);
  })
  .post((req, res, next) => {
    res.end(
      `Will update the promotion ${req.body.name} with description ${req.body.description}`
    );
  })
  .delete((req, res, next) => {
    res.end(`We are deleting promotion ${req.params.promotionId}`);
  });
module.exports = promotionRouter;
