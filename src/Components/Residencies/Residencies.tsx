
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import './Style/Residencies.css'
import carouselData from '../../utils/slider-data.json'
import sliderConfig from '../../utils/slider-config.js'

const Residencies = () => {
    return (
        <section className='residencies-wrapper'>
            <div className="paddings innerWidth residencies-container">
               <div className="residencies-head flexColStart">
                <span className='orangeText'>Best Choices</span>
                <span className='primaryText'>Popular Residencies</span>
               </div>

               <Swiper>
                {
                    carouselData.map((data, index) => (
                        <SwiperSlide key={index}>
                            <div className="flexColStart residencies-card">
                                <img src={data.image} alt="there's no alternative" />
                                <span className="residencies-price secondaryText">
                                    <span style={{color: "orange"}}>$</span>
                                    <span>{data.price}</span>
                                </span>
                                    <span className='primaryText'>{data.name}</span>
                                    <span className='secondaryText'>{data.detail}</span>
                            </div>
                        </SwiperSlide>
                    ))                    
                }
                </Swiper>
            </div>
        </section>
    );
};

export default Residencies

