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



function App() {
  return (
    <ChakraProvider theme={theme}>
    <BrowserRouter>
    <Navigation/>
      <Box textAlign="center" fontSize="xl">
      <Heading mt={10}
      color="teal.500"
      >Pokemon Web App User Stories</Heading>
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box>
    <Container>
          <Box>
            <Switch>
           { /*<Route path='/navigation' component={Navigation} />
  */}
            </Switch>

          </Box>
        </Container>
    </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
