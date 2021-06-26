import React,{useContext,useEffect} from 'react'
import {useParams} from 'react-router-dom';
import MoviesContext from '../../Context/Movies/MovieContext'
import HeaderMovie from '../../Components/HeaderMovie/HeaderMovie'
import Tabs from '../../Components/Tabs/Tabs'

import './MediaDetails.scss'

export default function MediaDetails() {

    let { type_media, id_media } = useParams();
    const {itemSelected, getItemSelected} = useContext(MoviesContext)

    useEffect( () =>{
        getItemSelected(type_media,id_media)
    }, [])

    return (
        <div>
            {
                itemSelected && <HeaderMovie media={itemSelected}/>
            }
            <Tabs/>
        </div>
    )
}
