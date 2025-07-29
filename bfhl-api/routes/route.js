const express = require("express");
const router = express.Router();
const  handlePost  = require("../controllers/controller");

router.post("/bfhl", handlePost);

module.exports = router;
