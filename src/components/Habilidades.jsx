import React from "react";
import './Pokedex.css';


function Habilidades({ habi,dados }) {
    return (
        <>
            {
                (!habi) ? "" : (
                    <div className="card">
                        
                        <div className="cards">
                        


                        <div className="back">
                            {
                                habi.abilities.map((poke, index) => {
                                    return (
                                        <>
                                            <div className="">
                                                <h2 className="">habilidade: {index + 1}</h2>
                                                <strong className="">{poke.ability.name}</strong>
                                            </div>
                                        </>
                                    )

                                })
                            }
                            {
                                <>
                                    {
                                        habi.stats.map(poke => {
                                            return (
                                                <>
                                                    <p className="">{poke.stat.name}:{poke.base_stat}</p>
                                                </>
                                            )
                                        })
                                    }
                                </>
                            }
                        </div>
                        </div>
                    </div>
                )
            }
        </>
    )

}

export default Habilidades;