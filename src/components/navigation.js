import React from 'react'
import {Link} from 'react-router-dom'
import {
  MenuButton,
  MenuList,
  MenuItem,
  Portal,
    Menu,
    Button
  } from '@chakra-ui/react';

 const  Navigation = () => {

    return (
        <Menu>
  <MenuButton 
  as={Button}
   m={10} 
   color="teal.500"
    fontSize="2xl">Menu</MenuButton>
  <Portal>
    <MenuList>
      <MenuItem>
      <Link
      color="teal.500"
      to="/"
      fontSize="2xl"
     style={{ textDecoration: 'none'}}
      >
      Home
    </Link></MenuItem>
      <MenuItem><Link
      color="teal.500"
      to="/team"
      fontSize="2xl"
     style={{ textDecoration: 'none'}}>
      My Team
    </Link></MenuItem>
    </MenuList>
  </Portal>
</Menu>

    );
}
export default Navigation;