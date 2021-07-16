import React,{useContext,useEffect, useState}from 'react'
import PokemonContext from '../../Context/Pokemon/PokemonContext'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import TableData from './components/TableData/TableData'
import Stats from './components/Stats/Stats'

import './Details.scss'
export default function Details(props) {
    const { getPokemonDetails} = useContext(PokemonContext)
    const [pokemon, setPokemon] =useState(null)

    useEffect(() =>{
        async function fetchMyAPI() {
            setPokemon(await getPokemonDetails(props.match.params.id))
          }
        fetchMyAPI()
    },[])

    if(pokemon){
        return (
                <div className='Details'>
                    <div className="Details__mainData">    
                        <Fade left>                        
                            <TableData pokemon={pokemon}/>
                        </Fade>

                        <Zoom>
                            <LazyLoadImage
                                alt={pokemon.name}
                                src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} // use normal <img> attributes as props
                                effect="blur"
                                className="Details__pokemon-img"
                                />
                        </Zoom>

                        <Fade right>
                            <Stats stats={pokemon.stats}/>
                        </Fade>
                    </div>
                        
                </div>
        )
    }else{
        return <h1>loading...</h1>
    }
}
