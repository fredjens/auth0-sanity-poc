import { getUser } from "../services/auth0";

/**
 * Middleware
 */

export async function checkAuth(req, res, next) {
  console.log("Auth0: checking auth");

  const { user: userId } = req.headers;
  console.log("Auth0 userId: ", userId);

  if (!userId || userId === "undefined") {
    console.log("no user id");
    return res.sendStatus(403);
  }

  const user = await getUser(userId);

  if (user && user.sub) {
    req.userId = user.sub;
  } else {
    return res.sendStatus(403);
  }

  return next();
}
