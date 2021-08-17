import React, { Component } from 'react'
import axios from 'axios'
import {
Container,
SimpleGrid,
  Heading,
  Text,
  Box
} from '@chakra-ui/react';

class Home extends Component {
    state = {
      pokemons: []
    }


  componentDidMount(){
    axios.get('https://pokeapi.co/api/v2/pokemon/').then(response => {
      console.log(response)
  this.setState({
    pokemons: response.data
  })
    })
  }
  render() {
    const { pokemons } = this.state;
    const pokemonList = pokemons.length ? (
      pokemons.map(pokemon => {
        console.log(pokemon)
        return (
          <Box>
        
       {pokemon.name}
       
        </Box>
        )
        
      })
    ) : (
      <Text>No Availaible Pokemon</Text>
    )
    return (
      <Box textAlign="center" fontSize="xl">
      <Heading mt={10}
      color="teal.500">Welcome to Pokemon Web App User Stories</Heading>
     <Container>
     <Heading mt={10}>My Team</Heading>
     <SimpleGrid columns={2} spacing={10} mt={10}>
  <Box bg="teal.500" cursor="pointer" height="80px"><Text mt={5}>Crystal</Text></Box>
  <Box bg="teal.500" height="80px"><Text mt={5}>{pokemonList}</Text></Box>
  <Box bg="teal.500" height="80px"><Text mt={5}>Ambe</Text></Box>
  <Box bg="teal.500" height="80px"><Text mt={5}>Suh</Text></Box>
  <Box bg="teal.500" height="80px"><Text mt={5}>Awah</Text></Box>
  <Box bg="teal.500" height="80px"><Text mt={5}>Afa</Text></Box>
</SimpleGrid>
     </Container>
     <br/>
     <br/>
      </Box>

    );
  }
}
export default Home;


