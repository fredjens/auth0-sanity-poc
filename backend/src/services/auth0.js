import axios from "axios";

export async function getUser(user) {
  const baseUrl = "https://fredjens.eu.auth0.com/userinfo";
  let userData = {};

  if (!user) {
    return;
  }

  try {
    userData = await axios.get(baseUrl, {
      headers: {
        Authorization: "Bearer " + user
      }
    });
  } catch (err) {
    console.log(err);
  }

  return userData.data;
}
