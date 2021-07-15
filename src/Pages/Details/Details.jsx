import React,{useContext,useEffect, useState}from 'react'
import PokemonContext from '../../Context/Pokemon/PokemonContext'
import Fade from 'react-reveal/Fade';
import { LazyLoadImage } from 'react-lazy-load-image-component';


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
                    <LazyLoadImage
                        alt={pokemon.name}
                        src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} // use normal <img> attributes as props
                        effect="blur"
                        className="Details__pokemon-img"
                        />
                        
                </div>
            </Fade>
        )
    }else{
        return <h1>loading...</h1>
    }
}
