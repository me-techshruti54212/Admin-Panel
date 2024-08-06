const express = require("express");
const router = express.Router();
const { userBasicDetails } = require("../controllers/userBasicDetails"); // Ensure correct import

router.get("/user-basic-details", userBasicDetails);

module.exports = router;
