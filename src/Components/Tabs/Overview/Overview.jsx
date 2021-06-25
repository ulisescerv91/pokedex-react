import React,{useContext} from 'react'
import MoviesContext from '../../../Context/Movies/MovieContext'

import './Overview.scss'

export default function Overview() {
    const {itemSelected} = useContext(MoviesContext)
    return (
        <div className='Overview'>
            {itemSelected.overview}
        </div>
    )
}
