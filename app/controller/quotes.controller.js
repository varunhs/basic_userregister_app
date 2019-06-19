const quotesDetails = require("../models/quotes.model");
const moment = require("moment");

const addQuote = async (reqData) => {
  const quoteAdd = new quotesDetails({
    quote: reqData.quote,
    createdAt: moment().format()
  });
  const data = await quoteAdd.save(quoteAdd)
  return data;
};

const getQuotes = async () => {
  const data = await quotesDetails.find();
  return data;
};

const getQuotesIndividual = async (id) => {
  const data = await quotesDetails
    .findById(id)
  return data;
};

const updateQuote = async (reqData, reqId) => {
  const quoteUpdateDetails = new quotesDetails({
    _id: reqId,
    quote: reqData.quote,
    updatedAt: moment().format()
  });
  const data = quoteUpdateDetails
    .updateOne(quoteUpdateDetails)
  return data
};

const getLatestQuote = async () => {
  const data = await quotesDetails.findOne()
    .sort({ "createdAt": -1 })
  return data;
}

const deleteQuote = async (id) => {
  // if (!ObjectID.isValid(id)) {
  //   throw new HttpError('Bad Request', 'Missing inputId', 400);
  // }
  const data = await quotesDetails
    .findByIdAndRemove(id)
  return data;
};

module.exports = {
  addQuote,
  deleteQuote,
  getQuotes,
  getQuotesIndividual,
  updateQuote,
  getLatestQuote
}
