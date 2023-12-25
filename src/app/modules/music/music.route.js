/* eslint-disable node/no-extraneous-require */
const express = require("express");
const { UploadFileCloudinary } = require("../../../Middleware/upload");
const musicController = require("./music.controller");

const router = express.Router();
router.post(
  "/create",
  UploadFileCloudinary.single("music_file"),
  musicController.createMusic
);

const musicRouter = router;
module.exports = musicRouter;
