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



const MyTeam = (props) => {
  const [team, setTeam] = useState([]);

  //console.log(props)
     window.onload = () => {
         Fetchdata();
       };
  
    // Fetch the required data using the get() method
    const Fetchdata = ()=>{
        db.collection("pokemon").get().then((querySnapshot) => {
             
            // Loop through the data and store
            // it in array to display
            querySnapshot.forEach(element => {
                var data = [element.data(),element.id];
                //var id = element.id;
                setTeam(arr => [...arr , data]);
                
            });
        })
    }
    
    //console.log(team[0][1]);
     
    
    //removepokemon
    const removePokemon = (e) => {
      const myId = team[0][1];
      e.preventDefault();
      db.collection('pokemon').doc(myId).delete()
      .then((docRef) => {
        //alert("Data Successfully Submitted");
        //props.history.push('/')
        window.location.reload();
    });
     }
     


    return (
        <Container>
        
            <Heading mt={10}>My Team</Heading>
            <Box d="flex" mt="2" alignItems="center"
            justifyContent='center'
            
            flexDirection='column'>
            {

                team.length > 6 ?
                  <Box>
                  <MyTeam/>
                  <Text>
                    You have reached  your maximum number of pokemons
                  </Text>
                  </Box>
                  :
                team.map((data) => (
                    <Stat p={10} key={data[1]}>
                    
      <Box m={1}>
        <Image src={data[0].image.front_shiny} 
       
        
        alt={data.name} />    
            </Box>
            <StatLabel fontSize="3xl">{data[0].name}</StatLabel>
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

