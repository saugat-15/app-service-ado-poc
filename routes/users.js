var express = require("express");
var router = express.Router();
var dotenv = require("dotenv");
dotenv.config();
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resources" + process.env.KEYVAULT_SECRET);
});

module.exports = router;
