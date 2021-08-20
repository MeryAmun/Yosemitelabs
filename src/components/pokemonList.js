import React from 'react'
import {
    Container,
      Box,
      Link
    } from '@chakra-ui/react';
import Card from './card';


export default function PokemonList({pokemon}) {
    
   
    return (
        <Container>
<Box key={pokemon.id}>
<Link
  color=""
  href={"/pokemon/" + pokemon.id}
  key={pokemon.id}
  fontSize="2xl"
  style={{ textDecoration: 'none'}}>
  <Card  pokemon={pokemon} key={pokemon.id}/>
  </Link>
  </Box>
    </Container>
    )
}
