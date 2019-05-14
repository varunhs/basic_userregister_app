const express = require('express');
const testimonials = require('../controller/testimonial.controller');

const testimonialRouter = express.Router();

testimonialRouter.route("/addTestimonial").post(testimonials.addTestimonial);
testimonialRouter.route("/deleteTestimonial/:id").delete(testimonials.deleteTestimonials);
testimonialRouter.route("/getTestimonial").get(testimonials.getTestimonial);
testimonialRouter.route("/getTestimonial/:id").get(testimonials.getTestimonialByID);
testimonialRouter.route("/latestTestimonial").get(testimonials.getLatestTestimonial);
testimonialRouter.route("/updateTestimonial/:id").put(testimonials.updateTestimonial);

module.exports = testimonialRouter;