import React from 'react'

import {
Container,
  Heading,
  Text,
  Box
} from '@chakra-ui/react';
import Search from './search';

const Home = () => {
  
    return (
      <Box textAlign="center" fontSize="xl">
      <Heading mt={10}
      color="teal.500">Welcome to Pokemon Web App User Stories</Heading>
     <Container>
     <br/>
     <br/>
     <Search/>
     <br/>
     <br/>
     <br/>
     <Box mt={10}
     color="teal.500">
      <Text>
      Hint:
      </Text>
      <p>Id could be any number between 1 and 898</p>
      </Box>
     </Container>
     <br/>
     <br/>
     <br/>
     <br/>
      </Box>

    );
  }

export default Home;


