import {useEffect, useContext} from 'react'
import MoviesContext from '../../Context/Movies/MovieContext'
import HeaderMovie  from '../../Components/HeaderMovie/HeaderMovie'
import CarouselCards from '../../Components/CarouselCards/CarouselCards'
import './Home.scss'

export default function Home() {

    const {trendingMovie, getTrendingMovie, trendingWeekMovies,getTrendingWeekMovies, trendingWeekShows, getTrendingTvShows} = useContext(MoviesContext)

    useEffect( () =>{
        getTrendingMovie()
        getTrendingWeekMovies()
        getTrendingTvShows()
    }, [])

    return (
        <div className='Home'>
            <HeaderMovie movie={trendingMovie}/>
            <CarouselCards movieList={trendingWeekMovies} title={'Trending Movies'}/>
            <CarouselCards movieList={trendingWeekShows} title={'Trending TV Shows'}/>

        </div>
    )
}
