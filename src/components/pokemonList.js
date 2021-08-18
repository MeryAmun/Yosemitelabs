import React from 'react'
import {
    Container,
    
    } from '@chakra-ui/react';
import Card from './card';

export default function PokemonList({results}) {
    let data = [];
    if(results.data){
        //console.log(results.data);
        data = results.data || [];
    }
    console.log(data);
      //pokemons && !!pokemons.length && pokemons.
      
    return (
        <Container>
  {
    
    data.map((item) => (
        console.log(item)
    
    
  ))
}
  </Container>
    )
}
