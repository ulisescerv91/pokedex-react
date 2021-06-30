import React,{useContext} from 'react'
import MoviesContext from '../../../Context/Movies/MovieContext'
import CarouselCards from '../../CarouselCards/CarouselCards'

import SocialMedia from '../../SocialMedia/SocialMedia'
import './Overview.scss'

export default function Overview() {
    const {itemSelected} = useContext(MoviesContext)
    const {overview, release_date, runtime, revenue, genres, production_companies, credits, external_ids, homepage} = itemSelected
    return (
        <div className='Overview'>
            <h3>Storyline</h3>
            {overview}
            <div className="Overview__stats">
                <div className="Overview__stats__left">Released</div>
                <div className="Overview__stats__right">{release_date}</div>
            </div>
            <div className="Overview__stats">
                <div className="Overview__stats__left">runtime</div>
                <div className="Overview__stats__right">{runtime}</div>
            </div>
            <div className="Overview__stats">
                <div className="Overview__stats__left">revenue</div>
                <div className="Overview__stats__right">{revenue}</div>
            </div>
            <div className="Overview__stats">
                <div className="Overview__stats__left">genres</div>
                <div className="Overview__stats__right">
                    {genres &&  genres.map( (item,index)=> <span key={index}>{item.name}</span> )}
                </div>
            </div>
            <div className="Overview__stats">
                <div className="Overview__stats__left">Production</div>
                <div className="Overview__stats__right">                    
                    {production_companies && production_companies.map( (item,index)=> <span key={index}>{item.name}</span> )}
                </div>
            </div>

            {/* ICONS */}
            <SocialMedia external_links={external_ids? external_ids:[]} homepage={homepage}/>

            { credits !== undefined && <CarouselCards mediaList={credits.cast} title={'Cast'} cast={true}/>}
            
        </div>
    )
}
