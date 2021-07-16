import React,{useState,useEffect} from 'react'
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

    useEffect(() =>{
        //!!! si queremos quitar el loader para no esperar mas de lo estimado entondes quitar el setTimeOut
        const timer1 = setTimeout(() => {
            const newStyle = {
                opacity: 1,
                width: `${getWidth()}%`
            }
            
            setStyle(newStyle);
        }, 200);
        // this will clear Timeout
        // when component unmount like in willComponentUnmount
        // and show will not change to true
        return () => {
            clearTimeout(timer1);
        };
        // useEffect will run only one time with empty []
        // if you pass a value to array,
        // like this - [data]
        // than clearTimeout will run every time
        // this value changes (useEffect re-run)
    },[getWidth])

    

    return (
        <div className="ProgressBar">
            <div className="progress-done" style={style}>
                {done}
            </div>
        </div>
    )
}
