import { useState, useEffect } from "react";
import axios from "axios";

function useData(userId) {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      const { data } = await axios.get("http://localhost:8080", {
        headers: {
          user: userId
        }
      });

      setLoading(false);
      setData(data);
    };

    getData();
  }, [userId]);

  return { data, loading };
}

export default useData;
