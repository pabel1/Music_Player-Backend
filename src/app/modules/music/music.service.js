const ErrorHandler = require("../../../ErrorHandler/errorHandler");
const MusicModel = require("./music.model");

const createMusicIntoDB = async (payload) => {
  const music = new MusicModel(payload);
  const newMusic = await music.save();

  return newMusic;
};

const musicServices = {
  createMusicIntoDB,
};

module.exports = musicServices;
