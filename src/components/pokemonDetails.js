import React from 'react'
import {
    Container,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
      Link,
      Box
    } from '@chakra-ui/react';

export default function PokemonDetails() {
    return (
        <Container>
        <SimpleGrid columns={2} spacing={10} mt={10}>
  <Box bg="teal.500" cursor="pointer" height="300px" width="200px">
  <Stat p={10}>
  <StatLabel>Name: Crystal</StatLabel>
  <StatNumber>Age: 20</StatNumber>
  <StatHelpText><Link
  color=""
  href="https://pokeapi.co/api/v2/ability/110/"
  fontSize="2xl"
  textDecoration="none">
  Contact Pokemon
  </Link>
  </StatHelpText>
</Stat>
  </Box>
  
</SimpleGrid>
        </Container>
    )
}
