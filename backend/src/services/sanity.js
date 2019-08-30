import axios from "axios";

const baseUrl = "https://a6i9w6ly.api.sanity.io/v1";

export async function queryUsers() {
  const url = `${baseUrl}/data/query/dev`;
  let res = {};

  try {
    res = await axios.get(`${url}?query=*[_type=="user"]`, {
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
