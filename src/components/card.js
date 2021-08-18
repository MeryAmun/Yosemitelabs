import React from 'react';
import {
    Text,
     Box,
     SimpleGrid,
     Link
  } from '@chakra-ui/react';

export default function Card(props) {
    const {pokemon} = props
    return (
        <Box  cursor="pointer" height="300px" width="200px">
        <SimpleGrid columns={2} spacing={10} mt={10}>
        <Text>Name</Text>
        <Text><Link
        color=""
        href="https://pokeapi.co/api/v2/ability/110/"
        fontSize="2xl"
        textDecoration="none">
        Contact Pokemon
        </Link></Text>
        </SimpleGrid>
        </Box>
    )
}
