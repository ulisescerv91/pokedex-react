import React,{useContext,useEffect, useState}from 'react'
import PokemonContext from '../../../../Context/Pokemon/PokemonContext'
import CircularProgress from '@material-ui/core/CircularProgress';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import './Card.scss'

export default function Card(props) {
    const { getPokemonDetails} = useContext(PokemonContext)
    const { name } = props.pokemon;
    const [pokemon, setPokemon] =useState(null)

    useEffect(() =>{
        async function fetchMyAPI() {
            setPokemon(await getPokemonDetails(name))
          }
        fetchMyAPI()
    },[])

    if(pokemon){
        return (
            <div className='Card'>
                <h1>{ pokemon.name}</h1>
                <LazyLoadImage
                    alt={pokemon.name}
                    src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} // use normal <img> attributes as props
                    effect="blur"
                    />
                {/* <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} alt={pokemon.name} /> */}
                {
                    pokemon.types.map( (type,index)=> <span>{type.type.name} - </span> )
                }
                
            </div>
        )
    }else{
        return <CircularProgress />
    }

}
