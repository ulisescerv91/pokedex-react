/* eslint-disable import/no-anonymous-default-export */
/**
 * Aqui se define que es lo que se hara cuando se mandan llamar  lo que fue declarado en el types.js
 */
import { GET_TRENDING_MOVIE, GET_TRENDING_WEEK_MOVIES } from '../types.js';

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
            //trendingMovie: payload -> Esto actualizara la propiedad movies que esta en el MoviesState
        default:{
            return state
        }
    }
}