import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

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
const useGames = (selectedGenre: Genre | null, seletedPlatform: Platform | null) =>
  useData<Game>("/games", { params: { genres: selectedGenre?.slug, parent_platforms: seletedPlatform?.id } }, [selectedGenre, seletedPlatform]);
export default useGames;
