import React from 'react'
import {Link} from 'react-router-dom'
import {
    Container,
      Box
    } from '@chakra-ui/react';
import Card from './card';


export default function PokemonList({pokemon}) {
    
   
    return (
        <Container>
<Box key={pokemon.id}>
<Link
  color=""
  to={"/pokemon/" + pokemon.id}
  key={pokemon.id}
  fontSize="2xl"
  style={{ textDecoration: 'none'}}>
  <Card  pokemon={pokemon} key={pokemon.id}/>
  </Link>
  </Box>
    </Container>
    )
}
