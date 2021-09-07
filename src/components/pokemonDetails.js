import React from 'react';
import Axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import {
  Container,
  Image,
  Stat,
  StatHelpText,
  Box,
  Button,
  Heading,
} from '@chakra-ui/react';
import  db from '../configs/fbConfig';
import Loading from './loading';




export default function PokemonDetails(props) {
  const [details, setDetails] = useState([]);
  const [addPokemon] = useState([]);
  const [isLoading, setIsLoading] = React.useState(false)

  useEffect(() => {

    let id = props.match.params.id
    //console.log(props)
    Axios.get('https://pokeapi.co/api/v2/pokemon/' + id).then(response => {
      setDetails(response.data)
      //console.log(response)

    });
    
  });


  const data = {
    abilities: details.abilities,
    base_experience: details.base_experience,
    game_indices: details.game_indices,
    height: details.height,
    held_items: details.held_items,
    id:details.id,
    is_default:details.is_default,
    location_area_encounters:details.location_area_encounters,
    moves:details.moves,
    specie: details.species,
    image: details.sprites,
    name: details.name,
    order: details.order,
    stats: details.stats,
    types: details.types,
    weight: details.weight,
    createdAt: new Date()
    
  }
  const pokemonAdd = () => {

    //console.log(data)
//     let docRef = db.collection("pokemons").doc(details);
// docRef.get().then((doc) => {
//   if (!doc.exists) {
//     docRef.set({
//       details
//     });
//   }
// }).then(() => {
//   toast.success(`${details.name} added successfully`,{position: toast.POSITION.BOTTOM_CENTER,
//   autoClose: 10000
//   })
// props.history.push('/team')
// })
    let newPokemon = data;
     const isPokemonPresent = addPokemon.some((item) =>
      item.id === data.id);
      //console.log(db)
      if (!isPokemonPresent) {
    db.collection("pokemons").add(newPokemon).then(() => {
      toast.success(`${details.name} added successfully`,{position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 10000
      })
      db.collection('pokemons').orderBy('createdAt').limit(6)
    props.history.push('/team')
})
.catch((error) => {
    console.error("Error adding document: ", error);
});
}
    
  };




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
            {
              !isLoading ? (
                <Button colorScheme="teal" 
                mr="4" onClick={() => {pokemonAdd()
                  setIsLoading(true)
                }} mt={10}>
                  Add to Team
                </Button>
              ) : (
                <Loading/>
              ) 
            }
            

          </StatHelpText>
        </Stat>



      }
    </Container>
  )
}