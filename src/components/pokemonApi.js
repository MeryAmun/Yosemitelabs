import axios from 'axios';

export default axios.create({
    baseURL: `https://pokeapi.co/api/v2/pokemon`,
    headers: {
        'Content-Type': 'application/json',
        crossDomain: true
      }
});

