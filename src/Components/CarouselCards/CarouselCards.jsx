import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss';
import "swiper/components/navigation/navigation.scss"
import './CarouselCards.scss'
import SwiperCore, {Navigation} from 'swiper/core';
// install Swiper modules
SwiperCore.use([Navigation]);

export default function CarouselCards(props) {
    const {movieList, title} = props;

    return (
        <div className='CarouselCards'>
            <h1>{title}</h1>
            <Swiper slidesPerView={3}
                spaceBetween={5}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={false}
                navigation={true}
                className="mySwiper">

                {

                movieList.map(movie => <SwiperSlide>
                    <img src={
                            `https://image.tmdb.org/t/p/original${
                                movie.poster_path
                            }`
                        }
                        alt={
                            movie.title || movie.original_name
                        }/>
                </SwiperSlide>)
            } </Swiper>


        </div>
    )
}
