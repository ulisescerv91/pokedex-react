import React from 'react'
import {Link} from 'react-router-dom'


import './Cast.scss'
export default function Cast(props) {
    const {id, original_name, profile_path,character} = props.item;

    return <Link className='Cast' to={`/`}   >
    <div className="Cast__container">

        <img className='Cast__img' src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${profile_path}`} alt={original_name}/>
        <span>{original_name}</span><br />
        <span>{character}</span>

    </div>
</Link>
}
