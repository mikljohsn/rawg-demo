import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import PlatformSelector from "./components/PlatformSelector";
import useStores from "./hooks/useStores";
import CustomList from "./components/CustomList";
import useGenres from "./hooks/useGenres";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import useGameQueryStore from "./state";


function App() {

const { genreId, storeId } = useGameQueryStore((s) => s.gameQuery);

const setStoreId = useGameQueryStore((s) => s.setStoreId);
const setGenreId = useGameQueryStore((s) => s.setGenreId);

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
           <CustomList
            title="Genres"
            onSelectedItemId={setGenreId}
            selectedItemId={genreId}
            useDataHook={useGenres}
          />
          <CustomList
            title="Stores"
            onSelectedItemId={setStoreId}
            selectedItemId={storeId}
            useDataHook={useStores}
          /> 
        </GridItem>
      </Show>
      <GridItem pl="2" area={"main"}>
        <Box>
          <GameHeading />
          <HStack>
            <PlatformSelector 
            />
            <SortSelector            
            />
          </HStack>
        </Box>
        <GameGrid
        />
      </GridItem>
    </Grid>
  );
}

export default App;
