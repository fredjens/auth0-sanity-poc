import express from "express";
import cors from "cors";

import { getUser } from "./services/auth0";
import { queryUsers } from "./services/sanity";

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());

/**
 * Middleware
 */

async function checkAuth(req, res, next) {
  const { user: userId } = req.headers;
  const user = await getUser(userId);

  if (!user || !user.sub) {
    return res.sendStatus(403);
  }

  req.userId = user.sub;

  return next();
}

/**
 * Controller
 */

async function controller(req, res) {
  const data = await queryUsers();

  let currentUser = data.find(
    ({ auth0_user_id }) => auth0_user_id === req.userId
  );

  return res.json({ currentUser });
}

/**
 * Route
 */

app.get("/", checkAuth, controller);

app.listen(port);

console.log("Running on port ", port);
