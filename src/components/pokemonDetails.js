import React from 'react'
import {useState, useEffect} from 'react';
import Axios from 'axios';
import {
    Container,
    Image,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
      Text,
      Box
    } from '@chakra-ui/react';

export default function PokemonDetails(props) {
  const [details, setdetails] = useState("")

  
     useEffect(() => {

      Axios.get(`https://pokeapi.co/api/v2/pokemon/${props.match.params.id}`).then(response => {
        setdetails(response.data)
        console.log(response)
        
         })
      
       


  }, [])


  
    return (
      <Container>
{
  
      <Stat p={10}>
      <Box d="flex" mt="2" alignItems="center">
    <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${details.id}.png`} 
    width="800px"
    alt={details.name} />    
        </Box>
<h3>Name: {details.name}</h3>
<StatLabel>Name:{
  // details.Array.abilities.map(e=>(
  //   <Text>
  //   {e[0]}
  //   </Text>
  // ))
}</StatLabel>
<h3>base_experience:{details.base_experience}</h3>
<h3>Order:{details.order}</h3>
<h3>Weight: {details.weight} hectograms</h3>
<h5>Height: {details.height} decimetres.</h5>
<Box>
<h3>Species</h3>
<h3>Name: {details.species.name}</h3>
<h3>URL: <h3>{`https://pokeapi.co/api/v2/pokemon-species/${details.id}/`}</h3></h3>
</Box>
<StatHelpText>
</StatHelpText>
</Stat>
  
}
</Container>
    )
    
}
