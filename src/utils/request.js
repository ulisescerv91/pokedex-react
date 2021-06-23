import axios from 'axios'

const API_KEY = '14d344666a5abe82c56c471106d9ecde';
const baseURL = 'https://api.themoviedb.org/3';


export const requestImg = {
    fetchMovieImg : (img) => `https://image.tmdb.org/t/p/original${img}`
}

/**
 * 
 * @returns Random Trending Movie
 */
export const fetchTrendingMovie = async () =>{
    try {
        const res = await axios.get( `${baseURL}/trending/all/week`,{
            params: {
                api_key: API_KEY,
                language: 'en_US'
            }
        })
                
        return random_item(res.data.results);

    } catch (error) {
        console.log(fetchTrendingMovie,error)
    }
}


/**
 * 
 * @returns Random Trending Movie
 */
 export const fetchTrendingWeekMovies = async () =>{
    try {
        const res = await axios.get( `${baseURL}/trending/movie/week`,{
            params: {
                api_key: API_KEY,
                language: 'en_US'
            }
        })
                
        return res.data.results;

    } catch (error) {
        console.log(fetchTrendingMovie,error)
    }
}







/**
 * UTILS FUNCTIONS
 */


/**
 * 
 * @param items ARRAY
 * @returns One random element from array
 */
 const random_item = items => items[Math.floor(Math.random()*items.length)]
