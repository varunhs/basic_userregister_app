const testimonialDetails = require('../models/testimonial.model');
const { ObjectID } = require('mongodb');
const moment = require('moment');

exports.addTestimonial = (req, res) => {
    const addTestimonial = new testimonialDetails({
        testimonial: req.body.testimonial,
        author: req.body.author,
        createdAt: moment().format()
    });
    addTestimonial.save()
        .then(data => {
            res.send({
                message: data || "Testimonial added successfully"
            }).catch(err => {
                res.status(400).send({
                    message: err.message || "Some error occured while adding Testimonial"
                });
            });
        })
        .catch(err => {
            res.status(404).send(err);
        });
};

exports.deleteTestimonials = (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    testimonialDetails.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                return res.status(404).send();
            }
            res.send({
                message: data || "Testimonial Deleted Successfully"
            });
        })
        .catch(err => {
            res.status(400).send(err);
        });
};

exports.getTestimonial = (req, res) => {
    testimonialDetails
        .find()
        .then(data => {
            if (!data) {
                return res.status(404).send();
            }
            res.send(data);
        })
        .catch(err => {
            res.status(404).send(err);
        })
}

exports.getTestimonialByID = (req, res) => {
    var id = req.params.id;
    testimonialDetails
        .findById(id)
        .then(data => {
            if (!data) {
                return res.status(404).send()
            }
            res.send(data)
        })
        .catch(err => {
            res.status(404).send(err);
        })
}

exports.getLatestTestimonial = (req, res) => {
    testimonialDetails.findOne()
        .sort({ "createdAt": -1 })
        .then(data => {
            if (!data) {
                return res.status(404).send()
            }
            res.send(data);
        }).catch(err => {
            res.status(404).send(err)
        })
}

exports.updateTestimonial = (req, res) => {
    const testimonialUpdateDetails = new testimonialDetails({
        _id: req.params.id,
        testimonial: req.body.testimonial,
        author: req.body.author,
        updatedAt: moment().format()
    })

    testimonialUpdateDetails
        .updateOne(testimonialUpdateDetails)
        .then(data => {
            res.send({ message: data || "Testimonial Updated Successfully" });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creating the Register"
            });
        });
} 