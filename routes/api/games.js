const router = require("express").Router();
const gamesController = require("../../controllers/gamesController");

router.route("/")
  .get(gamesController.findAll)
  .post(gamesController.create);

router.route("/:id")
  .get(gamesController.findById)
  .put(gamesController.update)
  .delete(gamesController.remove);

module.exports = router;