const Mongoose = require("mongoose");
const userModel = new Mongoose.Schema({
  name: { type: String },
  email: { type: String , unique:true},
  pass: { type: String },
  role: { type: String, default:"user" }
});
module.exports = Mongoose.model("userModel", userModel);