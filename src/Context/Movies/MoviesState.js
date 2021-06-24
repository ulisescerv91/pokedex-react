/**
 * Aqui va nuestra definicion del estado
 * Se escribe el estado que podremos consumir  asi como las funciones que alteraran el estado
 * 
 */
 import  {useReducer} from 'react';
import MoviesReducer from './MoviesReducer'; //Parametro de useReducer
import MoviesContext from './MovieContext'
import { fetchTrendingList, fetchItemSelected} from '../../utils/request'

const MoviesState = (props) => { 
    /**
     * Definir el estado inicial de la aplicacion
     */
    const initialState = {
        trendingAllList: [],
        trendingMovieList: [],
        trendingTVList: [],
        itemSelected:[]
    }

    /**
     * @reducer funciones a ejecutar dependiendo de lo que reciba(el cual esta en el dispatch) Recibe el userReducer
     * @initialState  estado inicial de la aplicacion
     */
    const [state, dispatch] = useReducer(MoviesReducer, initialState)



    /**
     * Obtener Una Pelicula Random
     */
    const getTrendingList = async (media_type) => {  
        let media_type_list = (media_type  === 'all') ? 'GET_TRENDING_ALL_LIST' :  (media_type  === 'movie')? 'GET_TRENDING_MOVIES_LIST' : 'GET_TRENDING_TV_LIST'

        const res = await fetchTrendingList(media_type)
        dispatch({
            type:media_type_list,
            payload:res
        })
    }


    /**
     * Obtener Una Pelicula Random
     */
     const getItemSelected = async (movie_id,media_type) => {  

        const res = await fetchItemSelected(movie_id,media_type)
        dispatch({
            type:'GET_MEDIA_SELECTED',
            payload:res
        })
    }


        /**
     * Actualizar Item selected
     */
         const SetItemSelected = async (item) => {  
            console.log('SetItemSelected',item)
            dispatch({
                type:'SET_MEDIA_SELECTED',
                payload:item
            })
        }
    






    //Todo lo que este dentro de MoviesContext podras acceder al estado que se definio arriba
    //value={state} pueden acceder al initialState - El state viene ded donde fue definico como useReducer
    return (
        
        <MoviesContext.Provider value={{
            trendingAllList:state.trendingAllList,
            trendingMovieList:state.trendingMovieList,
            trendingTVList:state.trendingTVList,
            itemSelected:state.itemSelected,
            getTrendingList,
            getItemSelected,
            SetItemSelected
        }}>
            {
                props.children
            }
        </MoviesContext.Provider>
    )


}

export default MoviesState;
