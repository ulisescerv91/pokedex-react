/**
 * Aqui va nuestra definicion del estado
 * Se escribe el estado que podremos consumir  asi como las funciones que alteraran el estado
 * 
 */
 import  {useReducer} from 'react';
import PokemonReducer from './PokemonReducer'; //Parametro de useReducer
import PokemonContext from './PokemonContext'
import {
    fetchListPokemones,
    fetchDetailsPokemon,
    fetchEvolutionChainPokemon
} from '../../utils/request'
const PokemonState = (props) => { 
    /**
 * Definir el estado inicial de la aplicacion
 */
    const initialState = {
        pokemones: null ,
        pokemonDetails:null
    }

    /**
     * @reducer funciones a ejecutar dependiendo de lo que reciba(el cual esta en el dispatch) Recibe el userReducer
     * @initialState  estado inicial de la aplicacion
     */
    const [state, dispatch] = useReducer(PokemonReducer, initialState)



    /**
 * Get 10 pokemons
 */
    const getPokemones =  async () => {
        const res = await fetchListPokemones()
        dispatch({
            type:'GET_POKEMONES',
            payload:res
        })
    }
    /**
 * Get individual pokemon details
 */
     const getPokemonDetails = async (id) => {
        const res =  await fetchDetailsPokemon(id)
        dispatch({
            type:'GET_POKEMON_DETAILS',
            payload:res
        })
    }
/**
 * Get individual pokemon details without set data on context
 */

    const getPokemonData = async (id) => {
        return  await fetchDetailsPokemon(id)
    }
        /**
         * Get Evloution chain
         */
         const getPokemonEvolutionChain = async (id) => {
            return await fetchEvolutionChainPokemon(id)
        }

    //Todo lo que este dentro de PokemonContext podras acceder al estado que se definio arriba
    //value={state} pueden acceder al initialState - El state viene ded donde fue definico como useReducer
    return (
        
        <PokemonContext.Provider value={{
            pokemones:state.pokemones,
            pokemonDetails:state.pokemonDetails,
            getPokemones,
            getPokemonDetails,
            getPokemonEvolutionChain,
            getPokemonData
        }}>
            {
                props.children
            }
        </PokemonContext.Provider>
    )


}

export default PokemonState;
