import React from 'react'
import {Link} from "react-router-dom"
import {useState, useEffect} from 'react';
import Axios from 'axios';
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





export default function PokemonDetails(props) {
  const [details, setdetails] = useState("");
   const[ addPokemon, setAddPokemon] = useState([]);
  //console.log(addPokemon)

  
     

      Axios.get(`https://pokeapi.co/api/v2/pokemon/${props.match.params.id}`).then(response => {
        setdetails(response.data)
        //console.log(response)
        
         })
         
  
         const  pokemonAdd = (e, details) => {
          e.preventDefault();
          let newPokemon = {
            details
            
          };
          
          const isPokemonPresent = addPokemon.some((item) => item.id === details.id);
         
          if (!isPokemonPresent) {
            setAddPokemon((prevTeamState) => [...prevTeamState, newPokemon]);
              }else {
                // if not found add the new order along with the existing order
                console.log('pokemon already exists')
              }
              
         };
        

  const removePokemon = (itemId) => {
          
            setAddPokemon(addPokemon.filter(({id}) => id === itemId));
          
        }
        // console.log(addPokemon)
       
      
      useEffect(() => {
          localStorage.setItem('addPokemon', JSON.stringify(addPokemon));
        }, [addPokemon]);

    return (
      <Container>
      <Heading
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
<h3>Order:{details.order}</h3>
<h3>Weight: {details.weight} hectograms</h3>
<h5>Height: {details.height} decimetres.</h5>
<Box>
<h3>Species</h3>
<h3>Name: {details.name}</h3>
<h3>URL: {`https://pokeapi.co/api/v2/pokemon-species/${details.id}/`}</h3>
</Box>
<StatHelpText>
<br/>
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
             addPokemon.map(item =>(
      <Container>
      <UnorderedList>
  <ListItem key={item.id} style={{ listStyleType: 'none'}}>
  <Link
    color=""
   to={"/pokemon/" + item.id}
    key={item.id}
    fontSize="2xl"
    style={{ textDecoration: 'none'}}>
      <Box d="flex" mt="2" alignItems="center">
      <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${details.id}.png`} 
      width="200px"
      alt={item.name} />    
          </Box>
          <Text>{item.name}</Text>
          </Link>
          <Button colorScheme="teal" onClick={removePokemon} mt={10}>
          Remove Pokemon
          </Button>
  </ListItem> 
</UnorderedList>
       <br/>
      <br/>
    </Container>

    ))
    
   }
  
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
</Container>
    )
    
}
