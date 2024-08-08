const express = require("express");
const router = express.Router();
const { dashboard } = require("../controllers/dashboard"); // Ensure correct import
const { usersList } = require("../controllers/usersList"); // Ensure correct import

router.get("/api/dashboard", dashboard);

router.get("/api/usersList", usersList);

module.exports = router;
