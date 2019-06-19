const express = require('express');
const testimonialRouter = express.Router({ mergeParams: true });
const testimonials = require('../controller/testimonial.controller');


// POST(ADD) Testimonial API
testimonialRouter.post("/addTestimonial", (req, res, next) => {
    testimonials.addTestimonial(req.body)
        .then(result => res.json(result))
        .catch(next);
});

// GET Testimonial API
testimonialRouter.get("/getTestimonial", (req, res, next) => {
    testimonials.getTestimonial()
        .then(result => res.json(result))
        .catch(next)
});

// GET Testimonial By ID
testimonialRouter.get("/getTestimonial/:id", (req, res, next) => {
    testimonials.getTestimonialByID(req.params.id)
        .then(result => res.json(result))
        .catch(next)
});

// GET Latest Testimonial
testimonialRouter.get("/latestTestimonial", (req, res, next) => {
    testimonials.getLatestTestimonial()
        .then(result => res.json(result))
        .catch(next)
});

// UPDATE Testimonial
testimonialRouter.put("/updateTestimonial/:id", (req, res, next) => {
    testimonials.updateTestimonial(req.body, req.params.id)
        .then(result => res.json(result))
        .catch(next)
});

// Delete Testimonial
testimonialRouter.delete("/deleteTestimonial/:id", (req, res, next) => {
    testimonials.deleteTestimonials(req.params.id)
        .then(result => res.json(result))
        .catch(next)
})

module.exports = testimonialRouter;