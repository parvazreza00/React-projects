import React,{useState, useEffect} from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Failed ot fetch post data");
        }
        const data = await res.json();
        setData(data);
        setIsLoading(false);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [url]);

  return {data, isLoading, error}
};

export default useFetch;
