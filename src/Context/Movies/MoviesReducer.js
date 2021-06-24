/* eslint-disable import/no-anonymous-default-export */
/**
 * Aqui se define que es lo que se hara cuando se mandan llamar  lo que fue declarado en el types.js
 */
import { GET_TRENDING_MOVIE, GET_TRENDING_WEEK_MOVIES , GET_TRENDING_TV_SHOWS, GET_MOVIE_SELECTED} from '../types.js';

export default ( state, action ) =>{
    const {payload, type} = action; //Payload los datos que me pasan en la funciones

    switch( type ){
        case GET_TRENDING_MOVIE: 
            return{
                 ...state,                 
                 trendingMovie: payload
            }
            //trendingMovie: payload -> Esto actualizara la propiedad movies que esta en el MoviesState
        case GET_TRENDING_WEEK_MOVIES: 
            return{
                 ...state,                 
                 trendingWeekMovies: payload
            }
        case GET_TRENDING_TV_SHOWS: 
            return{
                 ...state,                 
                 trendingWeekShows: payload
            }            
        case GET_MOVIE_SELECTED: 
            return{
                 ...state,                 
                 movieSelected: payload
            }
        default:{
            return state
        }
    }
}