import React,{useContext} from 'react'
import MoviesContext from '../../../Context/Movies/MovieContext'

import './Photos.scss'
export default function Photos() {
    const {itemSelected} = useContext(MoviesContext)
    const {images} = itemSelected
    return (
        <div className='Photos'>
            <h1>Backdrops</h1>
            <div className="Photos__backdrops">

                {
                    images.backdrops.map( (item,index) => <img src={`https://image.tmdb.org/t/p/w533_and_h300_bestv2${item.file_path}`} alt="" className="Photos__backdrops__img" key={index} />  )
                }
            </div>



            <h1>Posters</h1>
            <div className="Photos__posters">

                {
                    images.posters.map( (item,index) => <img src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${item.file_path}`} alt="" className="Photos__posters__img" key={index} />  )
                }
            </div>
            
        </div>
    )
}
