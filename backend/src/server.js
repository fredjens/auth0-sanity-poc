import express from "express";
import cors from "cors";

import { checkAuth } from "./middleware/auth";
import { queryUsers } from "./services/sanity";

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());

/**
 * Routes
 */

app.get("/", checkAuth, async function(req, res) {
  const data = await queryUsers();

  let currentUser = data.find(
    ({ auth0_user_id }) => auth0_user_id === req.userId
  );

  return res.json({ currentUser });
});

/**
 * Attach to port and run
 */

app.listen(port);

console.log("Running on port ", port);
