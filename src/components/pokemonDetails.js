import React from 'react'
import {useState, useEffect} from 'react';
import Axios from 'axios';
import {
    Container,
    Image,
    Stat,
    StatHelpText,
      Box,
      Link,
      Button,
      Text,
      Heading
    } from '@chakra-ui/react';




export default function PokemonDetails(props) {
  const [details, setdetails] = useState("");
   const[ myTeam, setMyTeam] = useState([]);
  //console.log(myTeam)

  
     

      Axios.get(`https://pokeapi.co/api/v2/pokemon/${props.match.params.id}`).then(response => {
        setdetails(response.data)
        //console.log(response)
        
         })
         
  
 
//console.log(setdetails)
const addPokemon = (setdetails) => {
  if(myTeam.length <= 6){
    setMyTeam(prevItems => [...prevItems, {details}]);
  }
  
  
  // let pokemon = details.id
  //       if(myTeam !== pokemon){
  //         pokemon.push([...myTeam,{pokemon}])
  // //console.log(myTeam)
  //       }
          };
        
        const removePokemon = (itemId) => {
          
            setMyTeam(myTeam.filter(({id}) => id === itemId));
          
        }
        // console.log(myTeam)
        useEffect(() => {
          const myTeam = JSON.parse(localStorage.getItem('myTeam'));
          if (myTeam) {
            setMyTeam(myTeam);
          }
        }, []);
      
      useEffect(() => {
          localStorage.setItem('myTeam', JSON.stringify(myTeam));
        }, [myTeam]);

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
    <Button colorScheme="teal" mr="4" onClick={addPokemon} mt={10}>
      Add Pokemon
    </Button>
 
</StatHelpText>
</Stat>
  
}

<Heading mt={10}>My Team</Heading>

            {
             myTeam.map(item =>(
      <Container key={item.details.id}>
      <div cursor="pointer" height="100px" 
      style={{display: 'flex', flexDirection: 'column'}}
      >
      <Link
    color=""
    href={"/pokemon/" + item.details.id}
    key={item.details.id}
    fontSize="2xl"
    style={{ textDecoration: 'none'}}>
      <Box d="flex" mt="2" alignItems="center">
      <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${details.id}.png`} 
      width="200px"
      alt={item.details.name} />    
          </Box>
          <Text>{item.details.name}</Text>
          </Link>
      </div>
      <br/>
      <br/>
      <Button colorScheme="teal" onClick={removePokemon} mt={10}>
    Remove Pokemon
    </Button>
      <br/>
      <br/>
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
