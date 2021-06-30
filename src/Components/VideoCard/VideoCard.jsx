import React from 'react'
import './VideoCard.scss'
export default function VideoCard(props) {
    const {key, name, type} = props.video
    return (
        <div className='VideoCard'>            
                <div className="VideoCard__container">
                    <img alt="Official Trailer" className="VideoCard__container__img" src={`https://img.youtube.com/vi/${key}/mqdefault.jpg`}/>
                    <div className="VideoCard__container__playBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 55 55"><circle cx="27.5" cy="27.5" r="26.75" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></circle><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.97 40.81L40.64 27.5 20.97 14.19v26.62z"></path></svg>
                    </div>
                </div>
                <h2>
                    {name}
                </h2>
                <span>
                    {type}
                </span>
            
        </div>
    )
}
