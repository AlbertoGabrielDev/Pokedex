import React, { useState, useEffect } from "react";
import axios from "axios";
import './Pokedex.css';
import Pokemons from './Pokemons';
import Buscar from "./Buscar";




const Pokedex = () => {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
  const [pokemon, setPokemon] = useState([])

  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  const [pokemonHabi, setpokemonHabi] = useState();

  useEffect(() => {
    pokeFun()
  }, [url])

  const pokeFun = async () => {
    const res = await axios.get(url);
    getPokemon(res.data.results)
    setNextUrl(res.data.next)
    setPrevUrl(res.data.previous)

  }

  const infoPokemon = (dados) => {
    // console.log("Dados:",dados)
    setpokemonHabi(dados)
    return pokemonHabi;
  }

  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url)
      setPokemon(e => {
        e = [...e, result.data]
        e.sort((a, b) => a.id > b.id ? 1 : -1)
        return e;
      })
      //  console.log("Pokemon", result.data.abilities)
    })
  }

  return (
    <>
      <Buscar />

      <Pokemons
        dados={pokemon}
        info={poke => infoPokemon(poke)}
      />

     

      <div className="botao">
        {
          <button onClick={() => {
            setPokemon([])
            setUrl(prevUrl)
          }}>Pagina Anterior
          </button>
        }
      </div>

      <div className="botao">
        {
          <button onClick={() => {
            setPokemon([])
            setUrl(nextUrl)
          }}>Proxima Pagina
          </button>
        }

      </div>
    </>

  )


}




export default Pokedex;