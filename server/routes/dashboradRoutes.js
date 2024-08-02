const express = require("express");
const router = new express.Router();
const {userBasicDetails} = require("../controllers/userBasicDetails");

router.get("/user-basic-details", userBasicDetails)