import React from 'react';
import {Link} from "react-router-dom"
import Axios from 'axios';
import { useState, useEffect } from 'react';
import {
  Container,
  Image,
  Stat,
  StatHelpText,
  Box,
  Button,
  Heading,
  Text,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import  db from '../configs/fbConfig';





export default function PokemonDetails(props) {
  const [details, setDetails] = useState([]);
  const [addPokemon] = useState([]);

  useEffect(() => {

    let id = props.match.params.id
    //console.log(props)
    Axios.get('https://pokeapi.co/api/v2/pokemon/' + id).then(response => {
      setDetails(response.data)
      //console.log(response)

    })
  })


  const data = {
    id:details.id,
    base_experience: details.base_experience,
    height: details.height,
    image: details.sprites,
    name: details.name,
    order: details.order,
    weight: details.weight
    
  }
  const pokemonAdd = (e) => {
    e.preventDefault();
    console.log(data)
    let newPokemon = data;
     const isPokemonPresent = addPokemon.some((item) =>
      item.id === data.id);
      console.log(db)
      if (!isPokemonPresent) {
    db.collection("pokemon").add(newPokemon).then((docRef) => {
    //alert("Data Successfully Submitted");
    props.history.push('/team')
})
.catch((error) => {
    console.error("Error adding document: ", error);
});
}
    // let newPokemon = {
    //   details

    // };

    // const isPokemonPresent = addPokemon.some((item) => item.id === details.id);

    // if (!isPokemonPresent) {
    //   setAddPokemon((prevTeamState) => [...prevTeamState, { ...newPokemon }]
    //   )


    // } else {
    //   // if not found add the new order along with the existing order
    //   console.log('pokemon already exists')
    // }

  };
  
  useEffect(()=>{

    localStorage.setItem('team',JSON.stringify(details))

  }, [details]);



  return (
    <Container>
    <Heading
    id={'section1'}
       color="teal.500"> Pokemon Details</Heading>
       <br/>
    
      {
        <Stat key={details.id}>
          <Box d="flex" mt="2" alignItems="center">
            <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${details.id}.png`}
              width="800px"
              alt={details.name} />
          </Box>
        
          <h3>Name: {details.name}</h3>
          <h3>base_experience:{details.base_experience}</h3>
          <h3>Order: {details.order}</h3>
          <h3>Weight: {details.weight} hectograms</h3>
          <h5>Height: {details.height} decimetres.</h5>
          <Box>
            <h3>Species</h3>
            <h3>Name: {details.name}</h3>
            <h3>URL: {`https://pokeapi.co/api/v2/pokemon-species/${details.id}/`}</h3>
          </Box>
          <StatHelpText>
            <br />
            <Button colorScheme="teal" mr="4" onClick={pokemonAdd} mt={10}>
              Add Pokemon
            </Button>

          </StatHelpText>
        </Stat>



      }
      <Heading mt={10}>My Team</Heading>
      {

        addPokemon.length === 6 ?
          <Text>
            You have reached  your maximum number of pokemons
          </Text>
          :
          addPokemon.map(item => (
            <Container>
              <UnorderedList>
                <ListItem key={item.id} style={{ listStyleType: 'none' }}>
                <Link to='/home/#section1'></Link>
                  <Link
                    color=""
                    to="#section1"
                    key={item.id}
                    fontSize="2xl"
                    style={{ textDecoration: 'none' }}>
                    <Box d="flex" mt="2" alignItems="center">
                      <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${details.id}.png`}
                        width="200px"
                        alt={item.name} />
                    </Box>
                    <Text>{item.name}</Text>
                  </Link>
                  <Button colorScheme="teal"  mt={10}>
                    Remove Pokemon
                  </Button>
                </ListItem>
              </UnorderedList>
              <br />
              <br />
            </Container>

          ))

      }
    </Container>
  )
}