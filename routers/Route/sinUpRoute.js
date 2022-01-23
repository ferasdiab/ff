const express = require("express");
const sinUpRoute = express.Router();

const { addUserSinUp } = require("../Controler/sinUp");

sinUpRoute.post("/sinUp", addUserSinUp);

module.exports = sinUpRoute;