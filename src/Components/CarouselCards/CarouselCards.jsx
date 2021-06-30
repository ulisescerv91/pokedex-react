import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss';
import "swiper/components/navigation/navigation.scss"
import './CarouselCards.scss'
import SwiperCore, {Navigation} from 'swiper/core';
import Card from '../Card/Card'
import Cast from '../Cast/Cast'
// install Swiper modules
SwiperCore.use([Navigation]);

export default function CarouselCards(props) {
    const {mediaList, title, cast} = props;

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
                    !cast && mediaList.map((item, index) => <SwiperSlide key={index}>
                            <Card item={item} />
                        </SwiperSlide>)
                    
                } 
                {
                    cast && mediaList.map((item, index) => <SwiperSlide key={index}>
                            <Cast item={item} />
                        </SwiperSlide>)
                }
            </Swiper>


        </div>
    )
}
