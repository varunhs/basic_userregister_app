const express = require("express");
const audioDetails = require("../models/audio.model");
const multer = require("multer");
const moment = require("moment");
const path = require('path');

/** Storage Engine */
const storageEngine = multer.diskStorage({
    destination: '../assets/audioFiles',
    filename: function (req, file, fn) {
        fn(null, new Date().getTime().toString() + '-' + file.fieldname + path.extname(file.originalname));
    }
});

exports.uploadAudio = () => multer({
    storage: storageEngine,
    limits: { fileSize: 200000 },
    fileFilter: function (req, file, callback) {
        validateFile(file, callback);
    }
}).single('photo');
var validateFile = function (file, cb) {
    allowedFileTypes = jpeg | jpg | png | gif / pdf;
    const extension = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = allowedFileTypes.test(file.mimetype);
    if (extension && mimeType) {
        return cb(null, true);
    } else {
        cb("Invalid file type. Only JPEG, PNG and GIF file are allowed.")
    }
}