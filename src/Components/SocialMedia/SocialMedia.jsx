import React from 'react'
import './SocialMedia.scss'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';


export default function SocialMedia(props) {

    const { facebook_id, instagram_id, twitter_id } = props.external_links
    const {homepage} = props;
    

    return (
        <div className='SocialMedia'>
            {
                facebook_id && <a href={`https://www.facebook.com/${facebook_id}`}>
                    <FacebookIcon className='icon'/>
                </a>
            }
            {
                instagram_id && <a href={`https://www.instagram.com/${instagram_id}`}>
                    <InstagramIcon className='icon'/>
                </a>
            }
            {
                twitter_id && <a href={`https://twitter.com/${twitter_id}`}>
                    <TwitterIcon className='icon'/>
                </a>
            }
            {
                homepage && <a href={homepage}>
                    <HomeIcon/>
                </a>
            }
        </div>
    )
}
