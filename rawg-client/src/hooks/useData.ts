import { useEffect, useState } from "react";
import apiClient, { Response } from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";


//usedata is a generic hook that fetches data from an endpoint and returns the data, error, and loading state
const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, dependencies?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<Response<T>>(endpoint, { 
        ...requestConfig,
        signal: controller.signal
       })
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
  }, dependencies ? [...dependencies] : [] //ternary operator that returns dependencies if they exist, otherwise returns an empty array
);

  return { data, error, isLoading };
};
export default useData;
