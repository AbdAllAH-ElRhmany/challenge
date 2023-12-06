const mongoose = require("mongoose");

const AnnouncementSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    userImg: {
      type: String,
    },
    course: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Announcement", AnnouncementSchema);
