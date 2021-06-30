import React,{useContext} from 'react'
import MoviesContext from '../../../Context/Movies/MovieContext'
import VideoCard from '../../VideoCard/VideoCard'

import './Videos.scss'
export default function Videos(props) {
    const {itemSelected} = useContext(MoviesContext)
    const {videos} = itemSelected

    return (
        <div className='Videos'>
            {
                videos.results.map( (video,index) => <VideoCard video={video}/>)
            }
            


        </div>
    )
}
