import axios from "axios";

export async function getUser(user) {
  const baseUrl = process.env.AUTH0_URL;
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
