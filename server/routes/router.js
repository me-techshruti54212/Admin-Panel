const express = require("express");
const router = express.Router();
const { dashboard } = require("../controllers/dashboard"); 
const { usersList } = require("../controllers/usersList"); 
const { userConnections } = require("../controllers/userConnections"); 

router.get("/api/dashboard", dashboard);

router.get("/api/usersList", usersList);

router.get("/api/usersConnection", userConnections);

module.exports = router;
