import React from 'react'
import {
    Input ,
    Stack,
  InputGroup,
  Container,
  SimpleGrid,
    Heading,
    Text,
    Box
  } from '@chakra-ui/react';

 const  Home = () => {

    return (
        <Box textAlign="center" fontSize="xl">
      <Heading mt={10}
      color="teal.500">Welcome to Pokemon Web App User Stories</Heading>
     <Box>
      <Stack spacing={4} mt={20}>
      <InputGroup>
       
        <Input type="text" 
        placeholder="Search Pokemon" />
      </InputGroup>
      </Stack>
     </Box>
     <Container>
     <Heading mt={10}>My Team</Heading>
     <SimpleGrid columns={2} spacing={10} mt={10}>
  <Box bg="teal.500" height="80px"><Text mt={5}>Crystal</Text></Box>
  <Box bg="teal.500" height="80px"><Text mt={5}>Fuh</Text></Box>
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
export default Home;