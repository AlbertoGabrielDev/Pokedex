import React,{useState} from "react";
import './Pokedex.css';

import Habilidades from "./Habilidades";


function Pokemons({ dados, info }) {

  return (
    <>
      <div className="cards">
        {
          dados.map((e,index) => {
            
            return (
              <>
                <div className="card">
                  <div className="front">
                    <div key={1}></div>
                    <p className="atributos3"> <strong>{e.types[0].type.name}</strong> </p>
                    <p className="atributos">Nome: {e.name}</p>
                    <p className="atributos">Peso: {e.weight} </p>
                    <p className="atributos">Ordem: {e.order}</p>
                    <p className="atributos">Experiencia: {e.base_experience}</p>
                    <p className="atributos2"> <strong>ID: {e.id}</strong> </p>
                    <img className="imagem" src={e.sprites.front_default} alt={e.name} ></img>
                  </div>
                  <div className="back">
                  <div key={1}></div>
                    {/* <button className="" onClick={() => info(e)}>Habilidades</button> */}
                    
                   
                   
                    {/* <p>{e.abilities[0].ability.name}</p> */}
                    
                    
                  </div>

                </div>
              </>
            )
          })
            
            
        }
        

      </div>

    </>

    //criar uma div, e por dentro da div a tag P

  )
}

export default Pokemons;
