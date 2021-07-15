/**
 * Aqui va nuestra definicion del estado
 * Se escribe el estado que podremos consumir  asi como las funciones que alteraran el estado
 * 
 */
 import react, {useReducer} from 'react';
import PokemonReducer from './PokemonReducer'; //Parametro de useReducer
import PokemonContext from './PokemonContext'
import axios from 'axios';
const PokemonState = (props) => { 
    /**
 * Definir el estado inicial de la aplicacion
 */
    const initialState = {
        pokemones: []
    }

    /**
     * @reducer funciones a ejecutar dependiendo de lo que reciba(el cual esta en el dispatch) Recibe el userReducer
     * @initialState  estado inicial de la aplicacion
     */
    const [state, dispatch] = useReducer(PokemonReducer, initialState)



    /**
 * Obtener Peliculas
 */
    const getPokemones = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        dispatch({
            type:'GET_POKEMONES',
            payload:res.data
        })
    }


    //Todo lo que este dentro de PokemonContext podras acceder al estado que se definio arriba
    //value={state} pueden acceder al initialState - El state viene ded donde fue definico como useReducer
    return (
        
        <PokemonContext.Provider value={{
            pokemones:state.pokemones,
            getPokemones
        }}>
            {
                props.children
            }
        </PokemonContext.Provider>
    )


}

export default PokemonState;
