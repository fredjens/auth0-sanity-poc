import { getUser } from "../services/auth0";

/**
 * Middleware
 */

export async function checkAuth(req, res, next) {
  console.log("Auth0: checking auth");

  const { user: userId } = req.headers;
  const user = await getUser(userId);

  if (user && user.sub) {
    req.userId = user.sub;
  } else {
    return res.sendStatus(403);
  }

  return next();
}
