import {useEffect, useContext} from 'react'
import MoviesContext from '../../Context/Movies/MovieContext'
import HeaderMovie  from '../../Components/HeaderMovie/HeaderMovie'
import CarouselCards from '../../Components/CarouselCards/CarouselCards'
import './Home.scss'

export default function Home() {

    const {trendingMovieList, getTrendingList,trendingAllList,trendingTVList} = useContext(MoviesContext)
    
    
    useEffect( () =>{
        getTrendingList('all')
        getTrendingList('movie')
        getTrendingList('tv')
        
        // console.log()
    }, [])
    
    const random_item_list = items => items[Math.floor(Math.random()*items.length)]

    if( trendingMovieList.length>0 && trendingAllList.length>0 && trendingTVList.length>0){

        return (
            <div className='Home'>
                
                <HeaderMovie movie={random_item_list(trendingAllList)}/>
                <CarouselCards movieList={trendingMovieList} title={'Trending Movies'}/>
                <CarouselCards movieList={trendingTVList} title={'Trending TV Shows'}/>
            </div>
        )
    }else{
        return <h1>Loading...</h1>
    }
}
