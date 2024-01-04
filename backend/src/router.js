const express = require("express");

const router = express.Router();

const artistsRouter = require("./routers/artistsRouter");

router.use("/artists", artistsRouter);

module.exports = router;
