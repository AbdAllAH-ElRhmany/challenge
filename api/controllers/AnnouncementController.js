const Announcement = require("../models/Announcement");

exports.create = async (req, res) => {
  const newAnnouncement = new Announcement(req.body);
  try {
    const announcement = await newAnnouncement.save();
    res.status(200).json(announcement);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.update = async (req, res) => {
  try {
    const announcement = await Announcement.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json("Announcement Updated Successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.delete = async (req, res) => {
  try {
    const announcement = await Announcement.findByIdAndDelete(req.params.id);
    res.status(200).json("Announcement Deleted Successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getOne = async (req, res) => {
  try {
    const announcement = await Announcement.findById(req.params.id);
    res.status(200).json(announcement);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getAll = async (req, res) => {
  try {
    let limit = null;
    if (req.query.limit) limit = req.query.limit;
    const announcements = await Announcement.find().limit(limit);
    res.status(200).json(announcements);
  } catch (err) {
    res.status(500).json(err);
  }
};
