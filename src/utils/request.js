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
        const movie =  random_item(res.data.results);
        const resMovie = await fetchMovieSelected(movie.id)
        return resMovie

    } catch (error) {
        console.log(fetchTrendingMovie,error)
    }
}


/**
 * 
 * @returns List Trending Movie
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
        console.log(fetchTrendingWeekMovies,error)
    }
}


/**
 * 
 * @returns List Trending TV Shows
 */
 export const fetchTrendingTvShows = async () =>{
    try {
        const res = await axios.get( `${baseURL}/trending/tv/week`,{
            params: {
                api_key: API_KEY,
                language: 'en_US'
            }
        })
                
        return res.data.results;

    } catch (error) {
        console.log(fetchTrendingTvShows,error)
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
        console.log(fetchTrendingTvShows,error)
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
