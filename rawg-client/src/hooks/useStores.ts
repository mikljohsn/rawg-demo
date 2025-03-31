import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { Response } from "../services/api-client";
import stores from "../data/stores"; //import the stores data from the data folder


export interface Store {
    id: number;
    name: string;
    slug: string;
    image_background: string;
}

const apiClient = new ApiClient<Store>("/stores"); //create an instance of the ApiClient with the endpoint /stores

const useStores = () =>  useQuery<Response<Store>, Error>({
    queryKey: ["stores"],
    queryFn: apiClient.getAll, //fetch the stores from the api and return the data
    staleTime: 1000 * 60 * 60 * 24, //set the stale time to 24 hours, so the data is fresh for 24 hours
    cacheTime: 1000 * 60 * 60 * 24, //set the cache time to 24 hours, so the data is cached for 24 hours
    initialData: stores
});
export default useStores;
