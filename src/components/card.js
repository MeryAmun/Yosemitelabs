import React from 'react';
import Axios from 'axios';
import {useState} from 'react';
import {
    Stat,
     StatLabel,
     StatNumber,
     StatHelpText,
     Box,
     Image
  } from '@chakra-ui/react';


export default function Card({pokemon}) {
    
    

    return (
        <Box cursor="pointer" height="300px" width="300px" pt={10}>
        
        {
            <Stat p={10} key={pokemon.id}>
  <StatLabel>{pokemon.name}</StatLabel>
  <Box d="flex" mt="2" alignItems="center">
    <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png`} 
    width="300px"
    alt={pokemon.name} />    
        </Box>
  
  <StatNumber>order:{pokemon.order}</StatNumber>
  <StatNumber>weigth:{pokemon.weight}</StatNumber>
  <StatHelpText>
</StatHelpText>
</Stat>
        }
</Box>
    )
}
