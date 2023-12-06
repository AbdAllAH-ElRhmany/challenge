const router = require("express").Router();

const AnnouncementController = require("../controllers/AnnouncementController");
router.post("/", AnnouncementController.create);

router.put("/:id", AnnouncementController.update);

router.delete("/:id", AnnouncementController.delete);

router.get("/:id", AnnouncementController.getOne);

router.get("/", AnnouncementController.getAll);

module.exports = router;
