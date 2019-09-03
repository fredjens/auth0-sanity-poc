import axios from "axios";

const baseUrl = process.env.SANITY_URL;
const sanityToken = process.env.SANITY_TOKEN;

/**
 * Sanity query wrapper
 */

export async function sanityQuery(query) {
  const url = `${baseUrl}/data/query/dev`;
  let res = {};

  try {
    res = await axios.get(`${url}?query=${query}`, {
      headers: {
        Authorization: `Bearer ${sanityToken}`
      }
    });
  } catch (err) {
    console.log("ERR", err);
  }

  return res.data.result;
}

/**
 * Get all users
 */

export const queryUsers = async () => {
  console.log("Sanity: get all users");
  return await sanityQuery('*[_type=="user"]');
};
