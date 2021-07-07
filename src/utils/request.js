import axios from 'axios'

const API_KEY = '14d344666a5abe82c56c471106d9ecde';
const baseURL = 'https://api.themoviedb.org/3';


export const requestImg = {
    fetchMovieImg : (img) => `https://image.tmdb.org/t/p/original${img}`
}

/**
 * @param {string} type_media
 * 
 * @returns Trending List
 */
 export const fetchTrendingList= async (type_media) =>{
    try {
        const res = await axios.get( `${baseURL}/trending/${type_media}/week`,{
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
 export const fetchItemSelected = async (type_media, movie_id) =>{
    try {
        const res = await axios.get( `${baseURL}/${type_media}/${movie_id}?append_to_response=videos,credits,images,external_ids,release_dates&include_image_language=en`,{
            params: {
                api_key: API_KEY,
                language: 'en_US'
            }
        })
        console.log(res.data)
        return res.data;

    } catch (error) {
        console.log(fetchItemSelected,error)
    }
}


/**
 * 
 * @returns Person details
 */
 export const fetchPersonSelected = async (id_person) =>{
    try {
        const res = await axios.get( `${baseURL}/person/${id_person}?append_to_response=external_ids,popular,latest,movie_credits,changes,images`,{
            params: {
                api_key: API_KEY,
                language: 'en_US'
            }
        })
        console.log(res.data)
        return res.data;

    } catch (error) {
        console.log(fetchItemSelected,error)
    }
}


