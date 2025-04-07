
import { Platform } from "./usePlatforms";
import { GameQuery } from "../App";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Response } from "../services/api-client";
import ApiClient from "../services/api-client";


export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const apiClient = new ApiClient<Game>("/games");


const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<Response<Game>, Error>({
  queryKey: ["games", gameQuery],
  queryFn: ({ pageParam=1 }) => 
    apiClient.getAll({
      params: {
        genres: gameQuery.genre?.slug,
        parent_platforms: gameQuery.platform?.id,
        stores: gameQuery.store?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam,
      },
    }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    }
});

//useGames is a custom hook that fetches games from the /games endpoint
//it takes an optional selectedGenre parameter to filter games by genre
//it also takes an optional dependencies parameter to refetch data when the selectedGenre changes
/* const useGames = (gameQuery: GameQuery) =>
  useData<Game>("/games", {
    params: {
      genres: gameQuery.genre?.slug,
      parent_platforms: gameQuery.platform?.id,
      stores: gameQuery.store?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText
    }
  },
    [gameQuery]); */
export default useGames;
