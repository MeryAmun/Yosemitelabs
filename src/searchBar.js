import React from "react";
import {
    Input,
    IconButton ,
  InputGroup,
  SearchIcon,
  InputLeftElement,
    Box
  } from '@chakra-ui/react';

function SearchBar() {
  return (
    
    <InputGroup>
    <Input type="tex" placeholder="Search Pokemon" />
  </InputGroup>
  );
}

export default SearchBar;