import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import MoviesContext from '../../Context/Movies/MovieContext'


import './Card.scss'

export default function Card(props) {
    const {SetItemSelected} = useContext(MoviesContext)

    const {id, poster_path, title, original_name} = props.item;



    const handleClick = () => SetItemSelected(props.item)
    
    return <Link className='Card' to={`/movie/${id}`}   onClick={handleClick}>
        <img className='Card__img' src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title || original_name}/>
    </Link>
}
    