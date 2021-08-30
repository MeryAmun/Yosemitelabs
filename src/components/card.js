import React from 'react';
import {
    Stat,
     StatLabel,
     Box,
     Image
  } from '@chakra-ui/react';


export default function Card({pokemon}) {
    
    

    return (
        <Box cursor="pointer" height="300px" width="300px" pt={10}>
        
        {
            <Stat p={10} key={pokemon.id} >
  <Box d="flex" mt="2" alignItems="center">
    <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png`} 
    width="500px"
    alt={pokemon.name} />    
        </Box>
        <StatLabel fontSize="3xl">{pokemon.name}</StatLabel>
</Stat>
        }
</Box>
    )
}
