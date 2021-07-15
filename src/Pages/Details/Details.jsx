import React,{useContext,useEffect, useState}from 'react'
import PokemonContext from '../../Context/Pokemon/PokemonContext'
import Fade from 'react-reveal/Fade';
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
            <Fade>
                <div className='Details'>
                    <div className="Details__mainData">    
                        <TableData pokemon={pokemon}/>

                        <LazyLoadImage
                            alt={pokemon.name}
                            src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} // use normal <img> attributes as props
                            effect="blur"
                            className="Details__pokemon-img"
                            />

                        <Stats/>
                    </div>
                        
                </div>
            </Fade>
        )
    }else{
        return <h1>loading...</h1>
    }
}
