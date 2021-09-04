import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import {
  Box,
  Grid,
  Container,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Navigation from './components/navigation';
import Home from './components/home';
import PokemonList from './components/pokemonList';
import Card from './components/card';
import PokemonDetails from './components/pokemonDetails';
import MyTeam from './components/myTeam';
import Search from './components/search';




function App() {

 
  return (
    <HashRouter>
    <Navigation/>
    
      <Box textAlign="center" fontSize="xl">
        <Grid minH="10vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
  
        </Grid>
      </Box>
    <Container>
          <Box>
            <Switch>
           <Route path='/' exact={true} component={Home} />
           <Route path='/pokemonlist'  component={PokemonList} />
           <Route path='/card'  component={Card} />
           <Route path='/pokemon/:id'  component={PokemonDetails} />
           <Route path='/team'  component={MyTeam} />
           <Route path='/search' component={Search}/>
           
            </Switch>

          </Box>
        </Container>
    </HashRouter>
    
  );
}

export default App;
