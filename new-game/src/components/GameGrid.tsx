import { useEffect, useState } from "react"
import apiClient from "../Service/apiClient"
import { Text } from "@chakra-ui/react"

interface Game {
  id: number
  name: string
}

interface FetchGameResponse {
  count: number
  results: Game []
}

const GameGrid = () => {

  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  const fetchData = () => {
    apiClient.get('/games')
    .then(response => setGames(response.data.results))
    .catch(error => {
      setError(error.message);
    })
  }


  useEffect(() => {
    fetchData();
  }, [])
  
  return (
    <>
        <ul>
          {games.map(x => 
            <li key={x.id}>
              {x.name}
            </li>
          )}
          {error && <Text color='red'>{error}</Text>}
        </ul>
    </>
  )
}

export default GameGrid