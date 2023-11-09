import axios from "axios";
import { useEffect, useState } from "react";

function NewsGetApi() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchNews() {
    const options = {
      method: "GET",
      url: "https://api.collectapi.com/news/getNews?country=tr&tag=general",
      headers: {
        'authorization': 'apikey 7Hkkf5614MlvhG5BLqgUKm:3YkyX2G6PdMjOz0OtBQWgF',
        'content-type': 'application/json'
      }
    }

    try {
      setLoading(true);
      setError(null);

      const response = await axios.request(options);
      setData(response.data.result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchNews();
  }, []);


  return { data, loading, error };
}

export default NewsGetApi;
