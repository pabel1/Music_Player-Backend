/* eslint-disable node/no-extraneous-require */
const express = require("express");
const { UploadFileCloudinary } = require("../../../Middleware/upload");
const musicController = require("./music.controller");
const { selectFormName } = require("./music.constant");

const router = express.Router();
router.post(
  "/create",
  UploadFileCloudinary.fields(
    selectFormName.map((item) => ({ name: item, maxCount: 2 }))
  ),
  musicController.createMusic
);
router.get("/get-all", musicController.getAllMusic);

const musicRouter = router;
module.exports = musicRouter;
