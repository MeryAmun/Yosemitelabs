import React from 'react';
import {useState, useEffect} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    Stat,
     Box,
     Container,
     Heading,
     Image,
     Popover,
     PopoverTrigger,
     PopoverContent,
     PopoverHeader,
     PopoverBody,
     PopoverFooter,
     PopoverArrow,
     PopoverCloseButton,
     Button,
     
     
  } from '@chakra-ui/react';
import db from '../configs/fbConfig';
import { DeleteIcon } from '@chakra-ui/icons'

toast.configure();
const MyTeam = (props) => {
  const [team, setTeam] = useState([]);
  
  
useEffect(() => {
  Fetchdata();
  return () => {
    setTeam([]); 
  };
},[])
 

      
    const Fetchdata = ()=>{
      db.collection("pokemon").onSnapshot((querySnapshot) => {
        querySnapshot.forEach(element => {
          var id = element.id;
            var data = element.data(id);
           
            setTeam(arr => [...arr, {data,uid:id}]);
            
        });
      })
  }
 
  
  //console.log(team);

    //removepokemon
    const removePokemon = (id) => {
    db.collection('pokemon').doc(id).delete()
    .then(() => {
      toast.success('Pokemon deleted successfully',{position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 10000
      });
  }).then(() => {
    
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

               
                team.map((data) => (
                    <Stat p={10} key={data.uid} m={4}>
                    <Box>
      <Image src={data.data.image.front_shiny} 
        alt={data.data.name} /> 
      <Popover m={4}>
  <PopoverTrigger>
    <Button>{data.data.name}</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>some details of {data.data.name}</PopoverHeader>
    <PopoverBody>
    <Image src={data.data.image.front_shiny} 
        alt={data.name} /> 
        <h5 fontSize="3xl">Name: {data.data.name}</h5>
        <Container fontSize="1xl">Abilities:<br/>
        {data.data.abilities.map((doc,index) =>
          
            <Box key={index}>
            <h6>name: {doc.ability.name}
            </h6>
            <h6>url: {doc.ability.url}
            </h6>
            </Box>
          )}
        
        </Container>
    <h5 fontSize="1xl">Moves:<br/> 
     {data.data.moves.map((mo,index) =>
          
      <Box key={index}>
      <h6>{mo.move.name}
      </h6>
      </Box>
    )}
    </h5>
    <h5 fontSize="1xl">Base experience: {data.data.base_experience}</h5>
    <Container fontSize="1xl">Game Indices:<br/>
   <h5>game index: {data.data.game_indices.map((gi,index) =>
          
    <Box key={index}>
    <h6> {gi.game_index}
    </h6>
    </Box>
  )}</h5>
    <h5>version {data.data.game_indices.map((v,index) =>
          
      <Box key={index}>
      <h6> {v.version.name}
      </h6>
      </Box>
    )}</h5>
    </Container>
    <h5 fontSize="3xl">Height: {data.data.height} decimetres</h5>
    <h5 fontSize="3xl">Stats:<br/> base effort: {data.data.stats[0].base_stat}, effort: {data.data.stats[0].effort},  name: {data.data.stats[0].stat.name},
    base effort: {data.data.stats[1].base_stat}, effort: {data.data.stats[1].effort},  name: {data.data.stats[1].stat.name},
    base effort: {data.data.stats[2].base_stat}, effort: {data.data.stats[2].effort},  name: {data.data.stats[2].stat.name},
    base effort: {data.data.stats[3].base_stat}, effort: {data.data.stats[3].effort},  name: {data.data.stats[3].stat.name},
    base effort: {data.data.stats[4].base_stat}, effort: {data.data.stats[4].effort},  name: {data.data.stats[4].stat.name},
    base effort: {data.data.stats[5].base_stat}, effort: {data.data.stats[5].effort},  name: {data.data.stats[5].stat.name}</h5>
    <Container fontSize="1xl">Types:<br/> slot: {data.data.types[0].slot}, type: {data.data.types[0].type.name}</Container>
    <h5 fontSize="3xl">ID: {data.data.id}</h5>
    <h5 fontSize="3xl">Order: {data.data.order}</h5>
    <h5 fontSize="3xl">Weight: {data.data.weight} hectograms</h5>
    <h5 fontSize="3xl">held items: {data.data.held_items.map((it,index) =>
          
      <Box key={index}>
      <h6>name: {it.item.name}
      </h6>
      <h6>url: {it.item.url}
      </h6>
      </Box>
    )
    
    } hectograms</h5>
    </PopoverBody>
    <DeleteIcon w={5} h={5} 
        mt={10}
        onClick={() =>{removePokemon(data.uid)}} color="teal.500" />
        <PopoverFooter>
  <h5>Thanks for checking</h5>
  </PopoverFooter>
  </PopoverContent>
</Popover>
</Box>  
</Stat>
 ))   
            }
            </Box>
        </Container>
    )
}
export default MyTeam

