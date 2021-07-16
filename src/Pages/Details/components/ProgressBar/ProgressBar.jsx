import React,{useState} from 'react'
import './ProgressBar.scss'

export default function ProgressBar(props) {
    const {done,max} = props;
    const [style, setStyle] = useState({});
    
    /*
    *   get width of each element referent to the max stat
    */
    const getWidth = () =>{
        return (done/max) * 100;
    }

    setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${getWidth()}%`
		}
		
		setStyle(newStyle);
	}, 200);

    return (
        <div className="ProgressBar">
            <div className="progress-done" style={style}>
                {done}
            </div>
        </div>
    )
}
