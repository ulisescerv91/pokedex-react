import react,{useEffect, useContext} from 'react'
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
                movies.map( item => <h1>{item.title}</h1> )
            }
        </div>
    )
}
