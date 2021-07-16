import React,{useContext,useEffect, useState}from 'react'
import PokemonContext from '../../../../Context/Pokemon/PokemonContext'
import CircularProgress from '@material-ui/core/CircularProgress';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import './Card.scss'
import TypeIcon from '../../../../Components/TypeIcon/TypeIcon';

export default function Card(props) {
    console.log('Card renderizado')

    const { getPokemonData} = useContext(PokemonContext)
    const { name } = props.pokemon;
    const [pokemon, setPokemon] =useState(null)

    useEffect(() =>{
        async function fetchMyAPI() {
            setPokemon(await getPokemonData(name))
          }

        fetchMyAPI()
    },[getPokemonData,name])
    //why add [getPokemonData,name] ? Its because whenever you are using useEffect and if you use something that is outside from useEffect. UseEffect need to make sure when to update when not that's why you need to pass it in its dependency

    if(pokemon){
        return (
            <Link className='Card' to ={`/pokemon/${pokemon.id}`}>
                <div className="test">

                    <LazyLoadImage
                        alt={pokemon.name}
                        src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} // use normal <img> attributes as props
                        effect="blur"
                        className="Card__pokemon-img"
                        />
                        <img src={`./assets/images/pokemon-gif/${pokemon.id}.gif`} alt="" className="Card__pokemon-gif"/>
                </div>
                <h1>{ pokemon.name}</h1>
                <div className="Card__iconsContainer">
                    {
                        pokemon.types.map( (type,index)=> <TypeIcon type={type.type.name} key={index}/>  )
                    }
                </div>
                
                
            </Link>
        )
    }else{
        return <CircularProgress /> //change a pokeball loader
    }

}
