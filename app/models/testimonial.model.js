const mongoose = require('mongoose');

const TestimonialDetailsSchema = new mongoose.Schema({
    testimonial: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: false
    },
    updatedAt: {
        type: Date,
        required: false
    }
})

module.exports = mongoose.model("testimonialDetails", TestimonialDetailsSchema);