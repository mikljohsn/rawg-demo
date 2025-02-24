
import { Image, List, ListItem, HStack, Text, Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data: genres } = useGenres();

  return (
    <>
    <Heading>Genres</Heading>
    <List>
      {genres.map((genre) => (      
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
            <Image src={getCroppedImageUrl(genre.image_background)}
              alt={genre.name}
              boxSize={"32px"}
              borderRadius={8}
              objectFit={"cover"} />
            <Text>{genre.name}</Text>
            </HStack>
          </ListItem>
      ))}
    </List>
    </>
  );
};

export default GenreList;