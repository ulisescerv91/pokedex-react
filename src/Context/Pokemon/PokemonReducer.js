/* eslint-disable import/no-anonymous-default-export */
/**
 * Aqui se define que es lo que se hara cuando se mandan llamar  lo que fue declarado en el types.js
 */
import { GET_POKEMONES,GET_POKEMON_DETAILS} from '../types.js';

export default ( state, action ) =>{
    const {payload, type} = action; //Payload los datos que me pasan en la funciones

    switch( type ){
        case GET_POKEMONES: 
            return{
                 ...state,                 
                pokemones: payload
            }
        case GET_POKEMON_DETAILS: 
            return{
                 ...state,                 
                pokemonDetails: payload
            }
        default:{
            return state
        }
    }
}