import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import { Store } from "./hooks/useStores";
import useStores from "./hooks/useStores";
import CustomList from "./components/CustomList";
import useGenres from "./hooks/useGenres";
import SortSelector from "./components/SortSelector";



export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  store: Store | null;
  sortOrder: string;
  searchText: string;
}

function App() {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleSelectedGenre = (genre: Genre | null) =>
     setGameQuery({...gameQuery, genre});
  const handleOnSelectedPlatform = (platform: Platform | null) =>
     setGameQuery({...gameQuery, platform});
  const handleOnSelectedStore = (store: Store | null) =>
     setGameQuery({...gameQuery, store});
  const handleOnSelectSortOrder = (sortOrder: string) =>
     setGameQuery({...gameQuery, sortOrder});
  const handleOnSearch = (searchText: string) =>
     setGameQuery({...gameQuery, searchText: searchText});

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
        <NavBar onSearch={handleOnSearch} />
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" area={"aside"}>
           {/* <GenreList
             onSelectedGenre={handleOnSelectedGenre}
             selectedGenre={gameQuery.genre}
           />
           <StoreList
             onSelectedStore={handleSelectedStore}
             selectedStore={gameQuery.store}
           /> */}
           <CustomList
             title="Genres"
             onSelectedItem={handleSelectedGenre}
             selectedItem={gameQuery.genre}
             useDataHook={useGenres}
           />
           <CustomList
             title="Stores"
             onSelectedItem={handleOnSelectedStore}
             selectedItem={gameQuery.store}
             useDataHook={useStores}
           />
        </GridItem>
      </Show>
      <GridItem pl="2" area={"main"}>
        <HStack>
        <PlatformSelector
          selectedPlatform={gameQuery.platform}
          onSelectedPlatform={handleOnSelectedPlatform}
        />
        <SortSelector 
          sortOrder={gameQuery.sortOrder}
          onSelectSortOrder={handleOnSelectSortOrder}
        />
        </HStack>
        <GameGrid
          gameQuery={gameQuery}
           />
      </GridItem>
    </Grid>
  );
}

export default App;
