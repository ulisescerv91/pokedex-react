/**
 * Aqui va nuestra definicion del estado
 * Se escribe el estado que podremos consumir  asi como las funciones que alteraran el estado
 * 
 */
 import  {useReducer} from 'react';
import MoviesReducer from './MoviesReducer'; //Parametro de useReducer
import MoviesContext from './MovieContext'
import {fetchTrendingMovie, fetchTrendingWeekMovies, fetchTrendingTvShows, fetchMovieSelected} from '../../utils/request'

const MoviesState = (props) => { 
    /**
     * Definir el estado inicial de la aplicacion
     */
    const initialState = {
        trendingMovie: [],
        trendingWeekMovies:[],
        trendingWeekShows:[],
        movieSelected:[]
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

    /**
     * Obtener lista  TV SHOWS of the week 
     */
         const getTrendingTvShows = async () => {        
            const res = await fetchTrendingTvShows()
            console.log(res)
    
            dispatch({
                type:'GET_TRENDING_TV_SHOWS',
                payload:res
            })
        }

    /**
     * Obtener lista  TV SHOWS of the week 
     */
     const getMovieSelected = async (movie_id) => {                 
        const res = await fetchMovieSelected(movie_id)
        dispatch({
            type:'GET_MOVIE_SELECTED',
            payload:res
        })
    }


    //Todo lo que este dentro de MoviesContext podras acceder al estado que se definio arriba
    //value={state} pueden acceder al initialState - El state viene ded donde fue definico como useReducer
    return (
        
        <MoviesContext.Provider value={{
            trendingMovie:state.trendingMovie,
            trendingWeekMovies:state.trendingWeekMovies,
            trendingWeekShows:state.trendingWeekShows,
            movieSelected:state.movieSelected,
            getTrendingMovie,
            getTrendingWeekMovies,
            getTrendingTvShows,
            getMovieSelected
        }}>
            {
                props.children
            }
        </MoviesContext.Provider>
    )


}

export default MoviesState;
