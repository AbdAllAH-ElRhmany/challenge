const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
    dueTo: {
      type: Date,
      required: true,
    },
    type: {
      type: String,
      enum: ["quiz", "assignment"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Quizze", QuizSchema);
