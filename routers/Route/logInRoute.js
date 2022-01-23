const express = require("express");
const logInRoute = express.Router();

const { logIn } = require("../Controler/logIn");
logInRoute.post("/logIn", logIn);

module.exports = logInRoute;