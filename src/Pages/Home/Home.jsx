import { useEffect, useContext } from 'react'
import Loader from '../../Components/Loader/Loader'
import PokemonContext from '../../Context/Pokemon/PokemonContext'
import Card from './components/Card/Card'
import './Home.scss'
import Fade from 'react-reveal/Fade';


const delay = 1;

export default function Home() {
    console.log('Home renderizado')
    const { pokemones, getPokemones } = useContext(PokemonContext)

    useEffect(() => {

        //!!! si queremos quitar el loader para no esperar mas de lo estimado entondes quitar el setTimeOut
        /*
        const timer1 = setTimeout(() => getPokemones(), delay * 1000);
        */
        // this will clear Timeout
        // when component unmount like in willComponentUnmount
        // and show will not change to true
        /*
        return () => {
            clearTimeout(timer1);
        };
        */
        // useEffect will run only one time with empty []
        // if you pass a value to array,
        // like this - [data]
        // than clearTimeout will run every time
        // this value changes (useEffect re-run)
        getPokemones()
    }, [])

    if (pokemones) {
        return (
            <Fade>
                <div className='Home'>
                        {
                            pokemones.map((pokemon, index) => <Card pokemon={pokemon} key={index} />)
                        }
                </div>
            </Fade>
        )
    } else {
        return <Loader />
    }
}
