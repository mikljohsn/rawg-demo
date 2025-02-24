import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


interface Response<T> {
    count: number;
    results: T[];
}

//usedata is a gneneric hook that fetches data from an endpoint and returns the data, error, and loading state
const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<Response<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results)
        setIsLoading(false);
      })
      .catch((err) => {        
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      })

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
};
export default useData;
