import axios from "axios";

const baseUrl = "https://a6i9w6ly.api.sanity.io/v1";

/**
 * Sanity query wrapper
 */

export async function sanityQuery(query) {
  const url = `${baseUrl}/data/query/dev`;
  let res = {};

  try {
    res = await axios.get(`${url}?query=${query}`, {
      headers: {
        Authorization:
          "Bearer skrEIOnqfVJS17kPA3lCi0JshD2kQfSNnr5m7Ey2mpw6UJnfLkLDOFenSgCAN1qnlV6gB9JjSI5rkALZeTY94FtthiafMWYi9CUfRBbXdDgzJ6OWus2BigSMUWkWF11JAFXfbXRnBxh18wE7ZuOJsWeW0tYzpcWK8cLClk4uxAID4l8nOtuV"
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
