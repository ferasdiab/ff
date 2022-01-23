const mongoose = require("mongoose");

const FavoriteModel = new mongoose.Schema({
  moviesId: { type: mongoose.Schema.Types.ObjectId, ref: "moviesModels" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "userModel" },
  
});
module.exports = mongoose.model("FavoriteModel", FavoriteModel);