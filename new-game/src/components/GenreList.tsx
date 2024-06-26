import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useData from "../hooks/useData";
import { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../Service/getCroppedImageUrl ";

const GenreList = () => {
    
    const {data} = useData<Genre>("/genres")
  
    return (
    <>
        <List>
        {data.map((x) =>
            <ListItem key= {x.id}>
            <HStack>
                <Image boxSize={16} src={getCroppedImageUrl(x.image_background)} borderRadius={4}/>
                <Text>{x.name}</Text>
            </HStack>
            </ListItem>
        )}

        </List>

    </>
  )
}

export default GenreList