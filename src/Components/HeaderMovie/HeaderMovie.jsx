import React from 'react'
import './HeaderMovie.scss'
import Rating from '@material-ui/lab/Rating';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';


export default function HeaderMovie(props) {
    const {title, original_name, poster_path, backdrop_path, vote_count, release_date, first_air_date} = props.media
    return (
        
        <div className='HeaderMovie'>
            <div className="HeaderMovie__container">
                <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt={title || original_name}  className='HeaderMovie__container__img'/>
            </div>
            <div className="HeaderMovie__info">
                <h1 className="HeaderMovie__info__title">
                    {title || original_name}
                </h1>
                <div className="HeaderMovie__info__rate">
                    
                    <div className='HeaderMovie__info__rate__stars' >
                        <StarIcon/>
                        <StarBorderIcon/>
                        <StarHalfIcon/>
                    </div>
                    <span className="HeaderMovie__info__rate__reviewsAmount">{vote_count} Reviews</span>
                </div>
                <div className="HeaderMovie__info__stats">
                    <span className="year">{ release_date || first_air_date}</span> - 
                    <span className="time">1h 59min</span>
                    <span className="certification"> Cert. 15</span>
                </div>
            </div>
        </div>
    )
}
