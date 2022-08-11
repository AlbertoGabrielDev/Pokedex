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
                {pokemonData.map((e) => {
                    return (
                        <>
                            <div className="card">
                                <div key={1}></div>
                                <p className="atributos">Nome: {e.name}</p>
                                <p className="atributos">ID: {e.id}</p>
                                <p className="atributos">Peso: {e.weight} </p>
                                <p className="atributos">Ordem: {e.order}</p>
                                <p className="atributos">Tipo: {e.types[0].type.name}</p>
                                <p className="atributos">Experiencia: {e.base_experience}</p>
                                <img className="imagem" src={e.sprites.front_default} alt={e.name} ></img>
                            </div>
                        </>
                    )
                })}
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
