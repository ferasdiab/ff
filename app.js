const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
require("./db/db");
app.use(express.json());
app.use(cors());

const moviesRoute = require("./routers/Route/moviesRoute");
const sinUpRoute = require("./routers/Route/sinUpRoute");
const logInRoute = require("./routers/Route/logInRoute");
const favortRoute = require("./routers/Route/favortRoute");

app.use(moviesRoute);
app.use(favortRoute);
app.use(sinUpRoute);
app.use(logInRoute);

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(process.env.PORT, () => {
  console.log("server is on");
});
