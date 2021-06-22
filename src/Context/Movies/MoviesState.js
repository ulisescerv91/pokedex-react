/**
 * Aqui va nuestra definicion del estado
 * Se escribe el estado que podremos consumir  asi como las funciones que alteraran el estado
 * 
 */
 import  {useReducer} from 'react';
import MoviesReducer from './MoviesReducer'; //Parametro de useReducer
import MoviesContext from './MovieContext'
import {fetchTrendingMovies} from '../../utils/request'
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
        //const res = await axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=14d344666a5abe82c56c471106d9ecde&language=en-US')
        const res = await fetchTrendingMovies()
        console.log(res)
        dispatch({
            type:'GET_MOVIES',
            payload:res
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
