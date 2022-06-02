const express = require("express");
const router = express.Router();

router.use("/v1/users", require("./users"));
router.use("/v1/ads", require("./ads"));

module.exports = router;
