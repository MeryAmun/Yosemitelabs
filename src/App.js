import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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



function App() {

 
  return (
    <BrowserRouter>
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
           <Route path='/list'  component={PokemonList} />
           <Route path='/card'  component={Card} />
            </Switch>

          </Box>
        </Container>
    </BrowserRouter>
    
  );
}

export default App;
