import React,{useEffect,useState, useContext} from 'react'
import PokemonContext from '../../../../Context/Pokemon/PokemonContext'

export default function EvolutionChain(props) {
    const [pokemon, setPokemon] = useState(null)
    const {id} = props
    const { getPokemonEvolutionChain} = useContext(PokemonContext)
    useEffect(() =>{
        async function fetchMyAPI() {
            setPokemon(await getPokemonEvolutionChain(id))
        }
        fetchMyAPI()
    },[getPokemonEvolutionChain,id])

    if(pokemon){
    return (
        <div className='EvolutionChain'>
            {pokemon.id}
        </div>
    )
    }else{
        return <h1>loading...</h1>
    }
}
