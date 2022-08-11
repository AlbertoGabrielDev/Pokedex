import axios from "axios";

const baseURL= "https://pokeapi.co/api/v2/pokemon/";
class api{
    buscarPokemon(){
      return axios.get(baseURL);
    } 
}

export default new api();


