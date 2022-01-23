const userModel = require("../../db/models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const logIn = async (req, res) => {
  let { email, pass } = req.body;
  try {
    const user = await userModel.findOne({ email: email });
    if (user) {
      const check = await bcrypt.compare(pass, user.pass);
      if (check === true) {
        const payload = { userId: user._id, userName: user.name };
        const token = jwt.sign(payload, "ABC");
        res.status(200).json({ token, user });
      } else {
        res.status(403).json("wrong PassWord!");
      }
    } else {
      res.status(404).json("wrong Email!");
    }
  } catch (error) {
    res.send(error);
  }
};
module.exports = { logIn };
