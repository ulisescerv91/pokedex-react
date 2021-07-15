/**
 * Aqui va nuestra definicion del estado
 * Se escribe el estado que podremos consumir  asi como las funciones que alteraran el estado
 * 
 */
 import react, {useReducer} from 'react';
import MoviesReducer from './MoviesReducer'; //Parametro de useReducer
import MoviesContext from './MovieContext'
import axios from 'axios';
const MoviesState = (props) => { 
    /**
 * Definir el estado inicial de la aplicacion
 */
    const initialState = {
        movies: []
    }

    /**
     * @reducer funciones a ejecutar dependiendo de lo que reciba(el cual esta en el dispatch) Recibe el userReducer
     * @initialState  estado inicial de la aplicacion
     */
    const [state, dispatch] = useReducer(MoviesReducer, initialState)



    /**
 * Obtener Peliculas
 */
    const getMovies = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        dispatch({
            type:'GET_MOVIES',
            payload:res.data
        })
    }


    //Todo lo que este dentro de MoviesContext podras acceder al estado que se definio arriba
    //value={state} pueden acceder al initialState - El state viene ded donde fue definico como useReducer
    return (
        
        <MoviesContext.Provider value={{
            movies:state.movies,
            getMovies
        }}>
            {
                props.children
            }
        </MoviesContext.Provider>
    )


}

export default MoviesState;
