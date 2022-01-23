const userModel = require("../../db/models/userModel");
const bcrypt = require("bcrypt");
// بيكربت تسوي تشفير لكلمة المرور 
const addUserSinUp = async (req, res) => {
  // اخذنا من البدي الاسم والايميل والباس
  let { name, email, pass } = req.body;
  console.log({ name, email, pass });
  try {
    // علشان تشفر الباسوورد
    pass = await bcrypt.hash(pass, 10);
    const newUser = new userModel({
      name,
      email,
      pass,
    });
    const result = await newUser.save();
    res.status(201).json(result);
  } catch (error) {
    res.send(error);
  }
};
module.exports = { addUserSinUp };