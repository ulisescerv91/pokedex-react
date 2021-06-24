import React,{useContext,useEffect} from 'react'
import {useParams} from 'react-router-dom';
import MoviesContext from '../../Context/Movies/MovieContext'
import HeaderMovie from '../../Components/HeaderMovie/HeaderMovie'
import './Movie.scss'

export default function Movie() {

    let { idMovie } = useParams();
    const {itemSelected} = useContext(MoviesContext)

    useEffect( () =>{
        //getMovieSelected(idMovie)
    }, [])

    return (
        <div>
            {
                itemSelected && <HeaderMovie movie={itemSelected}/>
            }
        </div>
    )
}
