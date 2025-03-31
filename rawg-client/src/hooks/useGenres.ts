import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Response } from "../services/api-client";
//import useData from "./useData";
import genres from "../data/genres";


export interface Genre {
    id: number;
    name: string;
    slug: string;
    image_background: string;
}

/* const useGenres = () =>  useData<Genre>("/genres"); //pass the endpoint to the useData hook to fetch the genres from the useGenres hook
//cleaner solution to fetch genres from the useGenres hook, so we don't need to specify the endpoint in the component, 
// which should only be concerned with rendering the data */

const useGenres = () => useQuery<Response<Genre>, Error>({ //useQuery is a hook that fetches data from the api and returns the data from react-query. Provide the generics

    queryKey: ["genres"],
    queryFn: () =>
         apiClient.get<Response<Genre>>("/genres").then(res => res.data), //fetch the genres from the api and return the data
    staleTime: 1000 * 60 * 60 * 24, //set the stale time to 24 hours, so the data is fresh for 24 hours
    cacheTime: 1000 * 60 * 60 * 24, //set the cache time to 24 hours, so the data is cached for 24 hours
    initialData: genres
})
export default useGenres;
