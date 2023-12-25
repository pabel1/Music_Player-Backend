const mongoose = require("mongoose");
const musicSchema = new mongoose.Schema(
  {
    musicUrl: {
      type: String,
      required: true,
    },
    musicDetails: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const MusicModel = mongoose.model("music", musicSchema);

module.exports = MusicModel;
