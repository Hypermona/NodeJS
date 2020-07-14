const express = require("express");
const bodyPraser = require("body-parser");

const Promo = require("../models/promotions");

const promotionRouter = express.Router();

promotionRouter.use(bodyPraser.json());

promotionRouter
  .route("/")
  .get((req, res, next) => {
    Promo.find({})
      .then(
        (Promo) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(Promo);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .post((req, res, next) => {
    Promo.create(req.body)
      .then(
        (promo) => {
          console.log("promo Created ", promo);
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(promo);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /Promotions");
  })
  .delete((req, res, next) => {
    Promo.remove({})
      .then(
        (resp) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(resp);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

promotionRouter
  .route("/:promotionsId")
  .get((req, res, next) => {
    Promo.findById(req.params.promotionsId)
      .then(
        (promo) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(promo);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end(
      "POST operation not supported on /Promotions/" + req.params.promotionsId
    );
  })
  .put((req, res, next) => {
    Promo.findByIdAndUpdate(
      req.params.promotionsId,
      {
        $set: req.body,
      },
      { new: true }
    )
      .then(
        (promo) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(promo);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .delete((req, res, next) => {
    Promo.findByIdAndRemove(req.params.promotionsId)
      .then(
        (resp) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(resp);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

module.exports = promotionRouter;
