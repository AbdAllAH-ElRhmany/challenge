const Quiz = require("../models/Quiz");

exports.create = async (req, res) => {
  const newQuiz = new Quiz(req.body);
  try {
    const quiz = await newQuiz.save();
    res.status(200).json(quiz);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.update = async (req, res) => {
  try {
    const quiz = await Quiz.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json("Quiz Updated Successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.delete = async (req, res) => {
  try {
    const quiz = await Quiz.findByIdAndDelete(req.params.id);
    res.status(200).json("Quiz Deleted Successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getOne = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    res.status(200).json(quiz);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getAll = async (req, res) => {
  try {
    let limit = null;
    if (req.query.limit) limit = req.query.limit;
    const Quizzes = await Quiz.find().limit(limit);
    res.status(200).json(Quizzes);
  } catch (err) {
    res.status(500).json(err);
  }
};
