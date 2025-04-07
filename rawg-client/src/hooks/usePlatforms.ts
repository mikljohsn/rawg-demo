import { useQuery } from "@tanstack/react-query";
import { Response } from "../services/api-client";
import ApiClient from "../services/api-client"; //import the apiClient to make the api calls
import platforms from "../data/platforms"; //import the platforms data from the data folder
import ms from "ms";

export interface Platform {
  id: number;
  name: string;
  slug: string
}


const apiClient = new ApiClient<Platform>("/platforms/lists/parents"); //create an instance of the ApiClient with the endpoint


const usePlatforms = () => useQuery<Response<Platform>, Error>({
  queryKey: ["platforms"],
  queryFn: apiClient.getAll, //fetch the platforms from the api and return the data
  staleTime: ms("1d"),
  cacheTime: ms("1d"),
  initialData: platforms, //set the initial data to an empty array, so the data is not undefined
});

export default usePlatforms;
