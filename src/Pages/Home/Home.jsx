import react,{useEffect, useContext} from 'react'
import PokemonContext from '../../Context/Pokemon/PokemonContext'
import './Home.scss'

export default function Home() {

    const {pokemones, getPokemones} = useContext(PokemonContext)

    useEffect( () =>{
        getPokemones()
        console.log(pokemones)
    }, [])

    return (
        <div className='Home'>
            {
                pokemones.map( item => <h1>{item.title}</h1> )
            }
        </div>
    )
}
