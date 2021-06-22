import {useEffect, useContext} from 'react'
import MoviesContext from '../../Context/Movies/MovieContext'
import './Home.scss'

export default function Home() {

    const {movies, getMovies} = useContext(MoviesContext)

    useEffect( () =>{
        getMovies()
        console.log(movies)
    }, [])

    return (
        <div className='Home'>
            {
                <h1>HOLlZGA</h1>
            }
        </div>
    )
}
