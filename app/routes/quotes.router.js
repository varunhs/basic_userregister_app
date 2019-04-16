const express = require("express");
const quotes = require("../controller/quotes.controller");

const quotesRouter = express.Router();

quotesRouter.route("/quoteAdd").post(quotes.addQuote);
quotesRouter.route("/quoteDelete/:id").delete(quotes.deleteQuote);
quotesRouter.route("/quoteList").get(quotes.getQuotes);
quotesRouter.route("/quoteList/:id").get(quotes.getQuotesIndividual);
quotesRouter.route("/quoteUpdate/:id").put(quotes.updateQuote);
quotesRouter.route("/latestQuote").get(quotes.getLatestQuote);

module.exports = quotesRouter;
