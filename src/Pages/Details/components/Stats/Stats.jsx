import React,{useState} from 'react'
import './Stats.scss'
export default function Stats() {
    const [style, setStyle] = useState({});
    setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${75}%`
		}
		
		setStyle(newStyle);
	}, 200);
    return (
        <div className='Stats'>
            <div className="Stats__container">
                {/* HP */}
                <div className="Stats__container__left">HP</div>
                <div className="Stats__container__right">
                    <div className="progress">
                        <div className="progress-done" style={style}>
                            {75}%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
