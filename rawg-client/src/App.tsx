import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import { Store } from "./hooks/useStores";
import StoreList from "./components/storeList";


export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  store: Store | null;

}

function App() {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleSelectedGenre = (genre: Genre | null) =>
     setGameQuery({...gameQuery, genre});
  const handleOnSelectedPlatform = (platform: Platform | null) =>
     setGameQuery({...gameQuery, platform});
  const handleOnSelectedStore = (store: Store | null) =>
     setGameQuery({...gameQuery, store});

 /*  const handleSelect = (key: keyof GameQuery, value: Genre | Platform | Store | null) => {
    setGameQuery({ ...gameQuery, [key]: value })}; */ //maytbe use this later

  return (
    <Grid
      templateAreas={{
        base: `"header" "main"`,
        lg: `"header header" "aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem pl="2" area={"header"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" area={"aside"}>
          <GenreList onSelectedGenre={handleSelectedGenre}
            selectedGenre={gameQuery.genre}
          />
          <StoreList onSelectedStore={handleOnSelectedStore}
            selectedStore={gameQuery.store}
          />
        </GridItem>
      </Show>
      <GridItem pl="2" area={"main"}>
        <PlatformSelector
          selectedPlatform={gameQuery.platform}
          onSelectedPlatform={handleOnSelectedPlatform}
        />
        <GameGrid
          gameQuery={gameQuery}
           />
      </GridItem>
    </Grid>
  );
}

export default App;
