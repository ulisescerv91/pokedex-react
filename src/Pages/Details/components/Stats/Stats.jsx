import React from 'react'
import './Stats.scss'
import ProgressBar from '../ProgressBar/ProgressBar'
export default function Stats(props) {
    const {stats} = props;

    /*
    *return the max value of stats to get the reference
    */
    const getMaxStat = () => stats.reduce((sum, stat) => sum = sum > stat.base_stat ? sum : stat.base_stat, 0);
    
    
    return (
        <div className='Stats'>
            {
                stats.map( (stat, index) =>{
                    return <div className="Stats__container" key={index}>
                                <div className="Stats__container__left">{stat.stat.name}</div>
                                <div className="Stats__container__right">
                                    <ProgressBar done={stat.base_stat} max={getMaxStat()}/>                                    
                                </div>
                            </div>
                } )
            }
        </div>
    )
}
