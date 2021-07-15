import React from 'react'
import './TypeIcon.scss'
import Tooltip from '@material-ui/core/Tooltip';

export default function TypeIcon(props) {
    const { type } = props
    
    return (
        <Tooltip title={type} arrow>

            <div className={`TypeIcon ${type}`} >
                <img src={`./assets/images/type-icons/${type}.png`} alt={type} className='TypeIcon__img' />{/*the dinamic img need be on /public  */}
            </div>
        </Tooltip>
    )
}
