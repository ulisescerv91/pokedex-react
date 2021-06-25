import React,{useContext,useEffect} from 'react'
import {useParams} from 'react-router-dom';
import MoviesContext from '../../Context/Movies/MovieContext'
import HeaderMovie from '../../Components/HeaderMovie/HeaderMovie'
import Tabs from '../../Components/Tabs/Tabs'

import './Movie.scss'

export default function Movie() {

    let { idMovie } = useParams();
    const {itemSelected, getItemSelected} = useContext(MoviesContext)

    useEffect( () =>{

        console.log(idMovie)
        getItemSelected(idMovie)
    }, [])

    return (
        <div>
            {
                itemSelected && <HeaderMovie movie={itemSelected}/>
            }
            <Tabs/>
        </div>
    )
}
