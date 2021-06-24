import axios from 'axios'

const API_KEY = '14d344666a5abe82c56c471106d9ecde';
const baseURL = 'https://api.themoviedb.org/3';


export const requestImg = {
    fetchMovieImg : (img) => `https://image.tmdb.org/t/p/original${img}`
}




/**
 * @param {string} media_type
 * 
 * @returns Trending List
 */
 export const fetchTrendingList= async (media_type) =>{
    try {
        const res = await axios.get( `${baseURL}/trending/${media_type}/week`,{
            params: {
                api_key: API_KEY,
                language: 'en_US'
            }
        })
        return res.data.results;

    } catch (error) {
        console.log(fetchTrendingList,error)
    }
}

/**
 * 
 * @returns Movie details
 */
 export const fetchMovieSelected = async (movie_id) =>{
    try {
        const res = await axios.get( `${baseURL}/movie/${movie_id}`,{
            params: {
                api_key: API_KEY,
                language: 'en_US'
            }
        })
        console.log(res)
        return res.data;

    } catch (error) {
        console.log(fetchMovieSelected,error)
    }
}


