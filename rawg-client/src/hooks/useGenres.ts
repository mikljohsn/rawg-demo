import useData from "./useData";


export interface Genre {
    id: number;
    name: string;
    slug: string;
    image_background: string;
}

const useGenres = () =>  useData<Genre>("/genres"); //pass the endpoint to the useData hook to fetch the genres from the useGenres hook
//cleaner solution to fetch genres from the useGenres hook, so we don't need to specify the endpoint in the component, 
// which should only be concerned with rendering the data
export default useGenres;
