import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import useGameQueryStore from "../state";
import usePlatform from "../hooks/usePlatform";
import useStores from "../hooks/useStores";

const GameHeading = () => {
  const { genreId, platformId, storeId } = useGameQueryStore((s) => s.gameQuery);

  const { data: dataGenres } = useGenres();
  const genre = dataGenres?.results.find((g) => g.id === genreId);

  const platform = usePlatform(platformId);

  const { data: dataStores} = useStores(); 
  const store = dataStores?.results.find((s) => s.id === storeId);
  

  const heading = `${platform?.name || ""} ${genre?.name || ""} ${store?.name || ""} Games`;

  return (
    <Heading as="h1" fontSize="5xl" paddingY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;