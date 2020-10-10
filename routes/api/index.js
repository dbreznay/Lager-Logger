const router = require("express").Router();
const gameRoutes = require("./games");
const cardRoutes = require("./cards");
const userRoutes = require("./users");

router.use("/games", gameRoutes);

router.use("/cards", cardRoutes);

router.use("/users", userRoutes);

module.exports = router;