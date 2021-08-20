import React from 'react';
import { useState } from 'react';
import {
    Container,
    SimpleGrid,
    Heading,
    Text,
    Box
} from '@chakra-ui/react';

const MyTeam = () => {
    //const [myTeam, setMyTeam] = useState([]);
    const myTeam = [
        { name: 'Awah', age: 23, id: '1' },
        { name: 'Awambeng', age: 23, id: '2' },
        { name: 'Afa', age: 23, id: '3' },
        { name: 'Lum', age: 23, id: '4' },
        { name: 'Che', age: 23, id: '5' },
        { name: 'suh', age: 23, id: '6' },

    ]




    return (
        <Box>
            <Heading mt={10}>My Team</Heading>
            {
                myTeam.length > 6 ?
                    <Text>
                        You have reached the Maximum number to team mates
                    </Text>
                    :

                    myTeam.map(item =>
                        <SimpleGrid rows={4} spacing={10} mt={10}>
                            <Box bg="teal.500" cursor="pointer" height="80px" key={item.id}>
                                <Text mt={5}>{item.name}</Text></Box>
                            <Text mt={5}>{item.age}</Text>
                            <br />
                            <br />
                        </SimpleGrid>
                    )
            }
        </Box>
    )
}
export default MyTeam

