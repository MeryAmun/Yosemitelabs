import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Heading,
  Container,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Navigation from './navigation';
import Home from './home';



function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="10vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
  
        </Grid>
      </Box>
    <Container>
          <Box>
            <Switch>
           <Route path='/' exact={true} component={Home} />
            </Switch>

          </Box>
        </Container>
    </BrowserRouter>
    
  );
}

export default App;
