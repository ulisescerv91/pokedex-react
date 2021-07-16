import axios from 'axios'

const baseURL = 'https://pokeapi.co/api/v2';



 export const fetchListPokemones= async (type_media) =>{
    try {
        const res = await axios.get( `${baseURL}/pokemon?limit=3&offset=0`)
        return res.data.results;

    } catch (error) {
        console.log(fetchListPokemones,error)
    }
}

export const fetchDetailsPokemon= async (id) =>{
    try {
        const res = await axios.get( `${baseURL}/pokemon/${id}`)
        return res.data 

    } catch (error) {
        console.log(fetchListPokemones,error)
    }
}

export const fetchEvolutionChainPokemon= async (id) =>{
    try {
        const res = await axios.get( `${baseURL}/evolution-chain/${id}/`)
        return res.data 

    } catch (error) {
        console.log(fetchListPokemones,error)
    }
}