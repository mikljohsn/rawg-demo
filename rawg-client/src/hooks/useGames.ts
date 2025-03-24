import useData from "./useData";
import { Platform } from "./usePlatforms";
import { GameQuery } from "../App";
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

//useGames is a custom hook that fetches games from the /games endpoint
//it takes an optional selectedGenre parameter to filter games by genre
//it also takes an optional dependencies parameter to refetch data when the selectedGenre changes
const useGames = (gameQuery: GameQuery) =>
  useData<Game>("/games", {
    params: {
      genres: gameQuery.genre?.slug,
      parent_platforms: gameQuery.platform?.id,
      stores: gameQuery.store?.id,
      ordering: gameQuery.sortOrder
    }
  },
    [gameQuery]);
export default useGames;
