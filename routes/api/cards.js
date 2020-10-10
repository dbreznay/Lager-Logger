const router = require("express").Router();
const cardsController = require("../../controllers/cardsController");

router.route("/")
  .get(cardsController.findAll)
  .post(cardsController.create);

router.route("/:id")
  .get(cardsController.findById)
  .put(cardsController.update)
  .delete(cardsController.remove);

module.exports = router;