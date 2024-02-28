
import { HiLocationMarker } from 'react-icons/hi';
import HeroSectionPicture from '../../assets/images/hero-section-picture.jpg'
import '../../index.css'
import './Style/HeroSection.css'
import CountUp from 'react-countup';

const HeroSection = () => {
  return(
      <section className='hero-wrapper'>
        <div className='innerWidth paddings flexCenter hero-container'>
          <div className='flexColStart hero-left'>

            <div className='hero-title'>
              <div className='orange-circle'/>
              <h1>
                Discover <br/>
                Most Suitable <br/>
                Property
              </h1>
            </div>

            <div className='flexColStart hero-description'>
              <span className='secondaryText'>Find a variety of properties that suit you very easily</span>
              <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
            </div>

            <div className="flexCenter search-bar">
              <HiLocationMarker color="var(--blue)" size={25}/>
              <input type="text" />
              <button className='button'>Search</button>
            </div>
          
            <div className="flexCenter stats">

              <div className="flexColCenter stat">
                <span>
                  <CountUp start={1000} end={5000} duration={4}/>
                <span>+</span>
                </span>
              <span className='secondaryText'>Premium Products</span>
              </div>

              <div className="flexColCenter stat">
                <span>
                  <CountUp start={100} end={500} duration={4}/>
                <span>+</span>
                </span>
                <span className='secondaryText'>Happy Costumers</span>
              </div>

              <div className="flexColCenter stat">
                <span>
                  <CountUp end={20}/>
                <span>+</span>
                </span>
                <span className='secondaryText'>Award Winnings</span>
              </div>

            </div>

          </div>

          <div className='flexCenter hero-right'>
              <div className='image-container'>
                  <img src={HeroSectionPicture} alt=''/>
              </div>
          </div>

        </div>
      </section>
  );
};

export default HeroSection;
