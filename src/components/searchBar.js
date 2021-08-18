import React from 'react';
import {useState} from 'react';
import {
    Input,
     Center
  } from '@chakra-ui/react';

function SearchBar(props) {
  const {onSearch} = props;
  const [search, setSearch] = useState('');

  const handleInput = (e) => {
    const text = e.target.value;
    setSearch(text)
  }

  const handleEnterKeyPressed = (e) => {
    if(e.key === 'Enter'){
      onSearch(search)
    }
  }

  return (
    <Center>
    <Input type="text" onChange={handleInput} 
    onKeyPress={handleEnterKeyPressed}
    value={search} 
    placeholder="Search Pokemon" 
    width="200px" />
  </Center>
  );
}

export default SearchBar;