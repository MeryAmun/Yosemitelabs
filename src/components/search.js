import React from 'react';
import Axios from 'axios';
import {useState} from 'react';
import {
    Input,
     Center,
     Container,
  } from '@chakra-ui/react'
import PokemonList from './pokemonList';

function Search({pokemon}) {
  const [searchText, setSearchText] = useState({});
 

  const getPokemon = (e) => {
    e.preventDefault();
    const name = searchText
  
    
Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(response => {
      setSearchText(response.data)
    console.log(response)
    
     })
       
}
 

  return (
    <Container>
    <Center>
   
    <form onSubmit={getPokemon}>
    <Input type="text"  className="form-select" id="validationDefaultLocation" 
       onChange={(e) => {
        setSearchText(e.target.value)}}
    placeholder="Search Pokemon by name or Id" 
    width="300px" />
  
    </form>
  </Center>
  <PokemonList pokemon={searchText}/>
    </Container>
  );
}

export default Search;