import React,{useContext,useEffect}from 'react'
import PokemonContext from '../../Context/Pokemon/PokemonContext'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import TableData from './components/TableData/TableData'
import Stats from './components/Stats/Stats'
import EvolutionChain from './components/EvolutionChain/EvolutionChain';

import './Details.scss'

export default function Details(props) {
    const {id} =props.match.params
    const {pokemonDetails, getPokemonDetails} = useContext(PokemonContext)

    useEffect(() =>{
        getPokemonDetails(id)   
                   
    },[])

    if(pokemonDetails){
        return (
                <div className='Details'>
                    <div className="Details__mainData">    
                        <Fade left>                        
                            <TableData pokemon={pokemonDetails}/>
                        </Fade>

                        <Zoom>
                            <LazyLoadImage
                                alt={pokemonDetails.name}
                                src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonDetails.id}.png`} // use normal <img> attributes as props
                                effect="blur"
                                className="Details__pokemon-img"
                                />
                        </Zoom>

                        <Fade right>
                            <Stats stats={pokemonDetails.stats}/>
                        </Fade>
                    </div>
                    <div className="evolutions">
                        <EvolutionChain id={pokemonDetails.id}/>
                    </div>
                        
                </div>
        )
    }else{
        return <h1>loading...</h1>
    }
}
