const express = require("express");
const audios = require("../controller/audio.controller");

const audioRouter = express.Router();

audioRouter.route("/uploadAudio").post(audios.uploadAudio);
audioRouter.route("/getAudio").get();
audioRouter.route("/updateAudio/:id").put();
audioRouter.route("/deleteAudio/:id").delete();

module.exports = audioRouter;