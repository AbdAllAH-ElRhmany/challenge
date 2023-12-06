const router = require("express").Router();

const QuizController = require("../controllers/QuizController");
router.post("/", QuizController.create);

router.put("/:id", QuizController.update);

router.delete("/:id", QuizController.delete);

router.get("/:id", QuizController.getOne);

router.get("/", QuizController.getAll);

module.exports = router;
