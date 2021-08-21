import React from 'react';

import {
    Container,
   Link,
   Box,
   Image,
    Heading,
} from '@chakra-ui/react';


const MyTeam = () => {
 // const pokemon = details
  //const id = pokemon.id;
    const myTeam = [];
    //const myTeam = [];
    //console.log(pokemon)
    //console.log(myTeam)




    return (
        <Container>
            <Heading mt={10}>My Team</Heading>
            {
               
            myTeam.map(item => 
            
               
    <Container bg="teal.500" cursor="pointer" height="80px" key={item.id}>
    <Link
  color=""
  href={"/pokemon/" + item.id}
  key={item.id}
  fontSize="2xl"
  style={{ textDecoration: 'none'}}>
    <Box d="flex" mt="2" alignItems="center">
    <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${item.id}.png`} 
    width="800px"
    alt={item.name} />    
        </Box>
        </Link>
        </Container>
                        
                    
                )
            
            }
           
        </Container>
    )
}
export default MyTeam

