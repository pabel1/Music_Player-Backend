const httpStatus = require("http-status");
const catchAsyncError = require("../../../ErrorHandler/catchAsyncError");
const sendResponse = require("../../../shared/sendResponse");
const musicServices = require("./music.service");

const createMusic = catchAsyncError(async (req, res) => {
  console.log(req.file);
  const result = await musicServices.createMusicIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Music created successfully",
    data: {
      result,
    },
  });
});

const musicController = {
  createMusic,
};
module.exports = musicController;
