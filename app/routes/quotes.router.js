const express = require("express");
const quotesRouter = express.Router({ mergeParams: true });
const quotes = require("../controller/quotes.controller");


// POST(Add) Quote API 
quotesRouter.post('/quoteAdd', (req, res, next) => {
    quotes.addQuote(req.body)
        .then(result => res.json(result))
        .catch(next);
});

// GET Quote API
quotesRouter.get('/quoteList', (req, res, next) => {
    quotes.getQuotes()
        .then((result) => res.json(result))
        .catch(next);
});

// GET Individual Quote
quotesRouter.get('/quoteList/:id', (req, res, next) => {
    quotes.getQuotesIndividual(req.params.id)
        .then((result) => res.json(result))
        .catch(next);
});

// GET  Latest Qoute
quotesRouter.get('/latestQuote', (req, res, next) => {
    quotes.getLatestQuote()
        .then(result => res.json(result))
        .catch(next);
})

// UPDATE Quote
quotesRouter.put('/quoteUpdate/:id', (req, res, next) => {
    quotes.updateQuote(req.body, req.params.id)
        .then(result => res.json(result))
        .catch(next);
})

// DELETE Quote API
quotesRouter.delete('/quoteDelete/:id', (req, res, next) => {
    quotes.deleteQuote(req.params.id)
        .then(result => res.json(result))
        .catch(next);
});

module.exports = quotesRouter;
