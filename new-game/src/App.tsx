import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'


const App = () => {
  return (
    <>
      <Grid 
        templateAreas={{
          base:`'nav' 'main'`,
          lg:`'nav nav' 'aside main'`, //992 pixel breakpoint (happens at 991 width pixel)
        }}
      >
        
        <GridItem area="nav">
          <NavBar/>
        </GridItem>

        <Show above='lg'>        
          <GridItem area="aside" bg='pink.300'>
            Aside
          </GridItem>
        </Show>
        
        <GridItem area="main" bg='green.300'>
          <GameGrid/>
        </GridItem>

      </Grid>    
    </>
  )
}

export default App