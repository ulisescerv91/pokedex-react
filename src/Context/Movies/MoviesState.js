/**
 * Aqui va nuestra definicion del estado
 * Se escribe el estado que podremos consumir  asi como las funciones que alteraran el estado
 * 
 */
 import  {useReducer} from 'react';
import MoviesReducer from './MoviesReducer'; //Parametro de useReducer
import MoviesContext from './MovieContext'
import {fetchTrendingMovie, fetchTrendingWeekMovies} from '../../utils/request'

const MoviesState = (props) => { 
    /**
     * Definir el estado inicial de la aplicacion
     */
    const initialState = {
        trendingMovie: [],
        trendingWeekMovies:[]
    }

    /**
     * @reducer funciones a ejecutar dependiendo de lo que reciba(el cual esta en el dispatch) Recibe el userReducer
     * @initialState  estado inicial de la aplicacion
     */
    const [state, dispatch] = useReducer(MoviesReducer, initialState)



    /**
     * Obtener Una Pelicula Random
     */
    const getTrendingMovie = async () => {        
        const res = await fetchTrendingMovie()
        console.log(res)
        dispatch({
            type:'GET_TRENDING_MOVIE',
            payload:res
        })
    }

    /**
     * Obtener lista  peliculas tranding of the week 
     */
     const getTrendingWeekMovies = async () => {        
        const res = await fetchTrendingWeekMovies()
        console.log(res)

        dispatch({
            type:'GET_TRENDING_WEEK_MOVIES',
            payload:res
        })
    }



    //Todo lo que este dentro de MoviesContext podras acceder al estado que se definio arriba
    //value={state} pueden acceder al initialState - El state viene ded donde fue definico como useReducer
    return (
        
        <MoviesContext.Provider value={{
            trendingMovie:state.trendingMovie,
            trendingWeekMovies:state.trendingWeekMovies,
            getTrendingMovie,
            getTrendingWeekMovies
        }}>
            {
                props.children
            }
        </MoviesContext.Provider>
    )


}

export default MoviesState;
