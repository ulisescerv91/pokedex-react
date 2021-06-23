import React from 'react'
import './Card.scss'

export default function Card(props) {
    const {movie} = props;
    return <div className='Card'>
        <img className='Card__img' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title || movie.original_name}/>
    </div>
}
    