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




    // *********---FUNTIONS****************************************************************************



    /**
     * Obtener Una Pelicula Random
     */
    const getTrendingList = async (type_media) => {  
        let type_media_list = (type_media  === 'all') ? 'GET_TRENDING_ALL_LIST' :  (type_media  === 'movie')? 'GET_TRENDING_MOVIES_LIST' : 'GET_TRENDING_TV_LIST'

        const res = await fetchTrendingList(type_media)
        dispatch({
            type:type_media_list,
            payload:res
        })
    }


    /**
     * Obtener Pelicula Seleccionada
     */
     const getItemSelected = async (type_media,id_media) => {  

        const res = await fetchItemSelected(type_media,id_media)
        dispatch({
            type:'GET_MOVIE_SELECTED',
            payload:res
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
            getItemSelected
        }}>
            {
                props.children
            }
        </MoviesContext.Provider>
    )


}

export default MoviesState;
