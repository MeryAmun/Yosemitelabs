import React from 'react'
import {
  MenuButton,
  MenuList,
  MenuItem,
  Portal,
    Menu,
    Link,
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
      href="/"
      fontSize="2xl"
      textDecoration="none"
      >
      Home
    </Link></MenuItem>
      <MenuItem><Link
      color="teal.500"
      href="/details"
      fontSize="2xl"
      textDecoration="none">
      Pokemon Details
    </Link></MenuItem>
      <MenuItem><Link
      color="teal.500"
      href="/"
      fontSize="2xl"
      textDecoration="none">
      Your Pokemon
    </Link></MenuItem>
    </MenuList>
  </Portal>
</Menu>

    );
}
export default Navigation;