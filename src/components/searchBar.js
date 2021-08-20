import React from 'react';
import {useState} from 'react';
import {
    Input,
     Center
  } from '@chakra-ui/react';

function SearchBar(props) {
  const {onSearch} = props;
  const [searchText, setSearchText] = useState('');

  const handleInput = (e) => {
    const text = e.target.value;
    setSearchText(text)
  }

  const handleEnterKeyPressed = (e) => {
    if(e.key === 'Enter'){
      onSearch(searchText)
    }
  }

  return (
    <Center>
    <Input type="text" onChange={handleInput} 
    onKeyPress={handleEnterKeyPressed}
    value={searchText} 
    placeholder="Search Pokemon" 
    width="200px" />
  </Center>
  );
}

export default SearchBar;