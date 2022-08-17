import './Pokedex.css';

function Pokemons({ dados }) {

  return (
    <>
      <div className="cards" >
        {
          dados.map((e) => {

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
    </>


  )
}

export default Pokemons;
