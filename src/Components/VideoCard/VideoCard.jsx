import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import './VideoCard.scss'
export default function VideoCard(props) {
    const {key, name, type} = props.video


    //Modal
    function rand() {
        return Math.round(Math.random() * 20) - 10;
      }
      
      function getModalStyle() {
        const top = 50 ;
        const left = 50;
      
        return {
          top: `${top}%`,
          left: `${left}%`,
          transform: `translate(-${top}%, -${left}%)`,
        };
      }
      

      const useStyles = makeStyles({
        root: {
          backgroundColor:'rgba(0,0,0,0.9)',   
          display: 'flex',
          alignItems:'center',
          justifyContent:'center'
          
        },
        container: {
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          alignContent:'center',
          justifyContent:'center'
        },
        paper:{
          
        }
      });
      const classes = useStyles();
      // getModalStyle is not a pure function, we roll the style only on the first render
      const [modalStyle] = React.useState(getModalStyle);
      const [open, setOpen] = React.useState(false);
    

      const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    return (
        <div className='VideoCard'>            
                <div className="VideoCard__container">
                    <img alt="Official Trailer" className="VideoCard__container__img" src={`https://img.youtube.com/vi/${key}/mqdefault.jpg`}/>
                    <div className="VideoCard__container__playBtn" onClick={handleOpen}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 55 55"><circle cx="27.5" cy="27.5" r="26.75" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></circle><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.97 40.81L40.64 27.5 20.97 14.19v26.62z"></path></svg>
                    </div>
                </div>
                <h2>
                    {name}
                </h2>
                <span>
                    {type}
                </span>
            
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                  className={classes.root}
                >
                  <div className={classes.container}>

                        <iframe width="500" height="360" src={`https://www.youtube.com/embed/${key}?rel=0&amp;showinfo=0&amp;autoplay=1`} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen" title="YouTube video player"  className={classes.paper}></iframe>
                  </div> 
                </Modal>
        </div>
    )
}
