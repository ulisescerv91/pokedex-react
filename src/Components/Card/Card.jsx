import React from 'react'
import {Link} from 'react-router-dom'
import './Card.scss'

export default function Card(props) {
    const {movie} = props;
    return <Link className='Card' to={`/movie/${movie.id}`}>
        <img className='Card__img' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title || movie.original_name}/>
    </Link>
}
    