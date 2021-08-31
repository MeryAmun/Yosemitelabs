import React from 'react';
import {Link} from "react-router-dom"
import Axios from 'axios';
import {useState} from 'react';
import {
    Input,
     Center,
     Container,
     Box,
     Text,
     UnorderedList,
      ListItem,
      Image
  } from '@chakra-ui/react'


function Search({pokemon}) {
  const [searchText, setSearchText] = useState({});
 

  const getPokemon = (e) => {
    e.preventDefault();
    const name = searchText
  
    
Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(response => {
      setSearchText(response.data)
    //console.log(response)
    
     })
       
}
 

  return (
    <Container>
 
    <Center>
   
    <form onSubmit={getPokemon}>
    <Input type="text"  className="form-select" id="validationDefaultLocation" 
       onChange={(e) => {
        setSearchText(e.target.value)}}
    placeholder="Search Pokemon by name or Id" 
    width="300px" />
  
    </form>
  </Center>
 { /*<PokemonList pokemon={searchText}/>*/}
 {
     
  <Container>
  <UnorderedList>
<ListItem key={searchText.id} style={{ listStyleType: 'none'}}>

<Link
color=""
to={"/pokemon/" + searchText.id}
key={searchText.id}
fontSize="2xl"
style={{ textDecoration: 'none'}}>
  <Box d="flex" mt="2" alignItems="center">
  <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${searchText.id}.png`} 
  width="200px"
  alt={searchText.name} />    
      </Box>
      <Text>{searchText.name}</Text>
      </Link>
</ListItem> 
</UnorderedList> 
</Container>


}
    </Container>
  );
}

export default Search;