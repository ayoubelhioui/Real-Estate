
import HeroSectionPicture from '../../assets/images/hero-section-picture.jpg'
import '../../index.css'
import './Style/HeroSection.css'

const HerSection = () => {
  return(
      <section className="hero-wrapper">
        <div className="innerWidth paddings flexCenter hero-container">
          <div className="hero-left">
            leftSection
          </div>
          <div className="flexCenter hero-right">
              <div className="image-container">
                  <img src={HeroSectionPicture} alt=""/>
              </div>
          </div>
        </div>
      </section>
  );
};

export default HerSection;
