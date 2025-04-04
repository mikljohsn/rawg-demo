import { useQuery } from "@tanstack/react-query";
import { Response } from "../services/api-client";
import ApiClient from "../services/api-client"; //import the apiClient to make the api calls
import platforms from "../data/platforms"; //import the platforms data from the data folder

export interface Platform {
  id: number;
  name: string;
  slug: string
}


const apiClient = new ApiClient<Platform>("/platforms"); //create an instance of the ApiClient with the endpoint /platforms


const usePlatforms = () => useQuery<Response<Platform>, Error>({
  queryKey: ["platforms"],
  queryFn: apiClient.getAll, //fetch the platforms from the api and return the data
  staleTime: 1000 * 60 * 60 * 24, //set the stale time to 24 hours, so the data is fresh for 24 hours
  cacheTime: 1000 * 60 * 60 * 24, //set the cache time to 24 hours, so the data is cached for 24 hours
  initialData: platforms, //set the initial data to an empty array, so the data is not undefined
});

export default usePlatforms;
