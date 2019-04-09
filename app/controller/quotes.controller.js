const quotesDetails = require("../models/quotes.model");
const { ObjectID } = require("mongodb");

exports.addQuote = (req, res) => {
  const quoteAdd = new quotesDetails({
    quote: req.body.quote
  });
  quoteAdd.save().then(data => {
    res
      .send({
        message: data.message || "Quote Added Successfully"
      })
      .catch(err => {
        res.status(400).send({
          message: err.message || "Some error occured while inserting quote"
        });
      });
  });
};

exports.deleteQuote = (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  quotesDetails
    .findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        return res.status(404).send();
      }
      res.send({
        message: data.message || "Quote Deleted Successfully"
      });
    })
    .catch(err => {
      res.status(400).send(err);
    });
};

exports.getQuotes = (req, res) => {
  quotesDetails
    .find()
    .then(quoteList => {
      if (!quoteList) {
        return res.status(404).send();
      }
      res.send(quoteList);
    })
    .catch(err => {
      res.status(400).send(e);
    });
};

exports.getQuotesIndividual = (req, res) => {
  var id = req.params.id;
  quotesDetails
    .findById(id)
    .then(data => {
      if (!data) {
        return res.status().send();
      }
      res.send(data);
    })
    .catch(err => {
      res.status(404).send(err);
    });
};
