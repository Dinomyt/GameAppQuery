import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Game } from "../hooks/useGames";
import GameCard from "./GameCard";
import useData from "../hooks/useData";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";

interface Props {
  selectedGenre: Genre | null
  selectedPlatform: Platform | null
}


const GameGrid = ({selectedGenre, selectedPlatform}: Props) => {
  // const { data, error, isLoading } = useData<Game>("games");
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);

  const skeleton = Array.from({ length: 20 }, (_, index) => index + 1); // Generate an array of numbers 1 to 20

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={3} padding={'20px'}>
        {isLoading
          ? skeleton.map((x) => (
              <GameCardContainer key={x}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))
          : data.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
      </SimpleGrid>
      {error && <Text color="red">{error}</Text>}
    </>
  );
};

export default GameGrid;
