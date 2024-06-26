import { SimpleGrid, Text } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import GameCard from "./GameCard";
import useData from "../hooks/useData";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {

 const {data,error,isLoading} = useData<Game>("games");
  
 const skeleton = [
  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
 ]
  return (
    <>
        <SimpleGrid columns={{sm:1,md:2,lg:3,xl:5}} spacing={3} padding={'20px'}>
          {isLoading && skeleton.map((x) => 
            <GameCardContainer>
              <GameCardSkeleton key={x}/>
            </GameCardContainer>
          )}

          {data.map((x) => 
            <GameCardContainer>
              <GameCard game={x} key={x.id}></GameCard>
            </GameCardContainer>
          )}
        </SimpleGrid>
        {error && <Text color='red'>{error}</Text>}
    </>
  )
}

export default GameGrid