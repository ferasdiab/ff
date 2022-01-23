const express = require("express");
const moviesRoute = express.Router();

const { getmovies, postmovies, deleteMovies,getComment, addComment, deleteComment, postvideo, updatemovies} = require("../Controler/movies");
const { authentication } = require("../midlleWare/authentication");

moviesRoute.get("/movies", authentication, getmovies);
// سوينا ميدلوير يشيك على نوعه
moviesRoute.post("/movies", authentication,  postmovies);
moviesRoute.delete("/movies/:id", authentication, deleteMovies);
moviesRoute.post("/Comment/:id", authentication, addComment);
moviesRoute.get("/Comment/:id",authentication, getComment);
moviesRoute.patch("/comment/:id", authentication, deleteComment);
moviesRoute.post("/video", authentication, postvideo);
moviesRoute.put("/updet", authentication, updatemovies);









module.exports = moviesRoute;