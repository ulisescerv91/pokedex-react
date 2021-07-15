import axios from 'axios'

const baseURL = 'https://pokeapi.co/api/v2';



 export const fetchListPokemones= async (type_media) =>{
    try {
        const res = await axios.get( `${baseURL}/pokemon?limit=10&offset=0`)
        return res.data.results;

    } catch (error) {
        console.log(fetchListPokemones,error)
    }
}
