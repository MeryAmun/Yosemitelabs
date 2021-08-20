import React from 'react'
import {useState} from 'react';
import {
Container,
  Heading,
  Box
} from '@chakra-ui/react';
import PokemonList from './pokemonList';
//import SearchBar from './searchBar';
//import pokemonApi from './pokemonApi';
import Search from './search';

const Home = ({searchText}) => {
  // const [state, setState] = useState({
  //   results: []
  // });
  


  // const onSearch = async (searchText) => {
    
  //   const name = searchText;
  //   const results = await pokemonApi.get(`/${name}`, {
  //     params: {name: searchText }
  //   })
  //   setState(prevState => {
  //     return {...prevState,results:results}
  //   })
  // }  
 
  
    return (
      <Box textAlign="center" fontSize="xl">
      {/*<SearchBar onSearch={onSearch}/>*/}
      <Heading mt={10}
      color="teal.500">Welcome to Pokemon Web App User Stories</Heading>
     <Container>
     <br/>
     <br/>
     <Search/>
   { /* <PokemonList results={state.results}/>*/}
   
     <br/>
     </Container>
     <br/>
     <br/>
     <br/>
     <br/>
      </Box>

    );
  }

export default Home;


