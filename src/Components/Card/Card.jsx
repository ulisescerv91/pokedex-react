import React from 'react'
import {Link} from 'react-router-dom'


import './Card.scss'

export default function Card(props) {

    const {id, poster_path, title, original_name, media_type } = props.item;
    
    return <Link className='Card' to={`/${media_type}/${id}`}   >
        <img className='Card__img' src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title || original_name}/>
    </Link>
}
    