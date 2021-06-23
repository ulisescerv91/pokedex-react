import {useEffect, useContext} from 'react'
import MoviesContext from '../../Context/Movies/MovieContext'
import HeaderMovie  from '../../Components/HeaderMovie/HeaderMovie'
import CarouselCards from '../../Components/CarouselCards/CarouselCards'
import './Home.scss'

export default function Home() {

    const {trendingMovie, getTrendingMovie, trendingWeekMovies,getTrendingWeekMovies} = useContext(MoviesContext)

    useEffect( () =>{
        getTrendingMovie()
        getTrendingWeekMovies()
    }, [])

    return (
        <div className='Home'>
            <HeaderMovie movie={trendingMovie}/>
            <CarouselCards movieList={trendingWeekMovies} title={'Trending Movies'}/>
        </div>
    )
}
