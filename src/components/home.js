import React from 'react'

import {
Container,
  Heading,
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
     </Container>
     <br/>
     <br/>
     <br/>
     <br/>
      </Box>

    );
  }

export default Home;


