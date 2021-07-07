/* eslint-disable import/no-anonymous-default-export */
/**
 * Aqui se define que es lo que se hara cuando se mandan llamar  lo que fue declarado en el types.js
 */
import { 
    GET_TRENDING_ALL_LIST,
    GET_TRENDING_MOVIES_LIST,
    GET_TRENDING_TV_LIST,
    GET_MOVIE_SELECTED,
    GET_PERSON} from '../types.js';

export default ( state, action ) =>{
    const {payload, type} = action; //Payload los datos que me pasan en la funciones

    switch( type ){
        case GET_TRENDING_ALL_LIST: 
            return{
                 ...state,                 
                 trendingAllList: payload
            }
            //trendingAllList: payload -> Esto actualizara la propiedad movies que esta en el MoviesState
        case GET_TRENDING_MOVIES_LIST: 
            return{
                 ...state,                 
                 trendingMovieList: payload
            }
        case GET_TRENDING_TV_LIST: 
            return{
                 ...state,                 
                 trendingTVList: payload
            }
        case GET_MOVIE_SELECTED: 
                return{
                     ...state,                 
                     itemSelected: payload
                }            
        case GET_PERSON: 
                return{
                     ...state,                 
                     personSelected: payload
                }                 
        default:{
            return state
        }
    }
}