var express = require("express");
var app = express();
const cors = require("cors");
const axios = require("axios");

var port = process.env.PORT || 8080;

app.use(cors());

const url = "https://fredjens.eu.auth0.com/userinfo";

app.get("/", async function(req, res) {
  let user;

  try {
    const params = {
      headers: {
        Authorization: "Bearer " + req.headers.user
      }
    };

    console.log("params", params);
    user = await axios.get(url, params);
    console.log("user", user);
  } catch (err) {
    //console.log("err", err);
    res.send(400);
  }
  console.log("user", user.data);

  res.json({ user: user.data });
});

app.listen(port);

console.log("Running on port ", port);
