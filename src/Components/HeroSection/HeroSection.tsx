
import HeroSectionPicture from '../../assets/images/hero-section-picture.jpg'
import '../../index.css'
import './Style/HeroSection.css'

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
              <span>Find a variety of properties that suit you very easily</span>
              <span>Forget all difficulties in finding a residence for you</span>
            </div>

            <div className="search-bar">
              searchBar
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
