const testimonialDetails = require('../models/testimonial.model');
const { ObjectID } = require('mongodb');
const moment = require('moment');

const addTestimonial = async (reqData) => {
    const addTestimonial = new testimonialDetails({
        testimonial: reqData.testimonial,
        author: reqData.author,
        createdAt: moment().format()
    });
    const data = await addTestimonial.save(addTestimonial);
    return data;
};

const getTestimonial = async () => {
    const data = testimonialDetails.find()
    return data;
}

const getTestimonialByID = async (tId) => {

    const data = testimonialDetails
        .findById(tId)
    return data;
}

const getLatestTestimonial = async (req, res) => {
    const data = await testimonialDetails.findOne()
        .sort({ "createdAt": -1 })
    return data
}

const updateTestimonial = async (reqData, reqId) => {
    const testimonialUpdateDetails = new testimonialDetails({
        _id: reqId,
        testimonial: reqData.testimonial,
        author: reqData.author,
        updatedAt: moment().format()
    })

    const data = await testimonialUpdateDetails
        .updateOne(testimonialUpdateDetails)
    return data;
}

const deleteTestimonials = async (reqId) => {
    if (!ObjectID.isValid(reqId)) {
        return res.status(404).send();
    }
    const data = await testimonialDetails.findByIdAndRemove(reqId)
    return data;
};



module.exports = {
    addTestimonial,
    deleteTestimonials,
    getTestimonial,
    getTestimonialByID,
    getLatestTestimonial,
    updateTestimonial
}