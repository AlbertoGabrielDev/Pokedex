import React, { useState } from "react";
import axios from "axios";
import './Pokedex.css';

const Buscar = () => {

    const [pokemon, setPokemon] = useState("");
    const [pokemonData, setPokemonData] = useState([]);

    const handleChange = (e) => {
        setPokemon(e.target.value.toLowerCase());
    }

    const handleClick = (e) => {
        e.preventDefault();
        getPokemon();
    };

    const getPokemon = async () => {
        if(pokemon === ""){
            alert("Digite um nome")
        }else{
            try {
                const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
                const res = await axios.get(url);
                //   setPokemonType(res.data.types[0].type.name);
                setPokemonData(e => {
                    e = [...e, res.data]
                    e.sort((a, b) => a.id > b.id ? 1 : -1)
                    return e;
                })
            } catch (e) {
                console.log(e);
            }

        }
    };
    return (
        <div className="App">
            <label>
                <input className="buscador"
                    type="text"
                    onChange={handleChange}
                    placeholder="Digite o nome do Pokemon"
                />
                <div className="botao_pesquisar">
                    <button onClick={handleClick}>Pesquisar</button>
                </div>
            </label>

            <div className="cards">
            {
          pokemonData.map((e) => {

            return (
              <>
                {/* <input type="checkbox" for="bloco" checked={() => info(e)}/> */}
                <div className="card" key={e.id}  >
                  <div className="front">
                    <p className="atributos3"> <strong>{e.types[0].type.name}</strong> </p>
                    <p className="atributos">Nome: {e.name}</p>
                    <p className="atributos">Peso: {e.weight} </p>
                    <p className="atributos">Ordem: {e.order}</p>
                    <p className="atributos">Experiencia: {e.base_experience}</p>
                    <p className="atributos2"> <strong>ID: {e.id}</strong> </p>
                    {/* <button className='' onClick={() => info(e)}>Habilidades</button> */}
                    <img className="imagem" src={e.sprites.front_default} alt={e.name} ></img>
                  </div>
                  <div className="back">
                    <div className="grid">

                      {/* array.forEach(element of e) */}
                      {

                        e.abilities.map((poke, index) => {
                          return (
                            <>
                              <div className="mini-card" key={index}>
                                {/* <p className="">habilidade: {index + 1}</p> */}
                                <strong className="habi">Habilidade: {poke.ability.name}</strong>
                              </div>

                            </>
                          )
                          
                        })
                      }
                      <img className='imagem' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${e.id}.svg`} alt={e.id} />
                      {
                        <>
                          {
                            e.stats.map((poke, index) => {
                              // console.log(index, " STATUS: ", poke)
                              return (
                                <>
                                  <div className='mini-card2'>
                                    <p className="habi2" key={index}>{poke.stat.name}:{poke.base_stat}</p>

                                  </div>

                                </>
                              )
                            })
                          }
                        </>
                      }

                    </div>
                  </div>
                </div>


              </>
            )
          })

        }
      </div>
            </div>


        
    );

}






export default Buscar;

// const toArray = [];
// try {
//   const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
//   const pokeDesc = `https://pokeapi.co/api/v2/ability/${pokemon}`;

//   const resPokemon = await axios.get(url);
//   const resPokemonEtc = await axios.get(pokeDesc);

//   axios.all([resPokemon, resPokemonEtc]).then(
//     axios.spread((...allData) => {
//       console.log(allData);
//     })
//   );
//   // console.log(res);
//   toArray.push(res.data);
//   setPokemonData(toArray);
// } catch (e) {
//   console.log(e);
// }
