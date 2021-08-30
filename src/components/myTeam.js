import React from 'react';
import {useState} from 'react';

import {
    Stat,
     StatLabel,
     Box,
     Container,
     Heading,
     Image,
     Text,
     Button
  } from '@chakra-ui/react';
import db from '../configs/fbConfig';


const MyTeam = () => {
  const [team, setTeam] = useState([]);

   
    window.addEventListener('load', () => {
        Fetchdata();
      });
  
    // Fetch the required data using the get() method
    const Fetchdata = ()=>{
        db.collection("pokemone").get().then((querySnapshot) => {
             
            // Loop through the data and store
            // it in array to display
            querySnapshot.forEach(element => {
                var data = element.data();
                setTeam(arr => [...arr , data]);
                  
            });
        })
    }


    //removepokemon
    const removePokemon = () => {

        
    
      }
    return (
        <Container>
            <Heading mt={10}>My Team</Heading>
            <Box d="flex" mt="2" alignItems="center"
            justifyContent='space-evenly'
            
            flexDirection='row'>
            {

                team.length === 6 ?
                  <Text>
                    You have reached  your maximum number of pokemons
                  </Text>
                  :
                team.map((data) => (
                    <Stat p={10} key={data.id} >
      <Box m={1} border='red'>
        <Image src={data.image} 
        width="500px"
        alt={data.name} />    
            </Box>
            <StatLabel fontSize="3xl">{data.name}</StatLabel>
            <Button colorScheme="teal" onClick={removePokemon} mt={10}>
                    Remove Pokemon
                  </Button>
    </Stat>
                    ))   
            }
            </Box>
        </Container>
    )
}
export default MyTeam

