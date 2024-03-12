
import './Style/Contact-us.css'
import Image from '../../assets/images/contact-us-picture.jpg'
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter} from 'react-icons/hi2';

const ContactUs = () => {
    return (
        <section className='contact-us-wrapper' id='contact-us'>
            <div className='contact-us-container flexCenter paddings innerWidth'>
                <div className="flexColStart contact-us-left">

                    <span className='orangeText'>Our Contact Us</span>
                    <span className='primaryText'>Easy To Contact Us</span>
                    <span className='secondaryText'>We always ready to help by providing the best services for you.
                    <br/>
                    We beleive a good blace to live can make your life better
                    </span>

                    <div className="flexColStart contact-us-modes">
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Call</span>
                                        <span className='secondaryText'>034 131 342 442</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    Call Now
                                </div> 
                            </div>


                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Message</span>
                                        <span className='secondaryText'>034 131 342 442</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    Message Now
                                </div> 
                            </div>

                        </div>

                        
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Video Call</span>
                                        <span className='secondaryText'>034 131 342 442</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    Video Call Now
                                </div> 
                            </div>


                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Call</span>
                                        <span className='secondaryText'>034 131 342 442</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    Call Now
                                </div> 
                            </div>

                        </div>
                    </div>
                </div>

                <div className="flexColStart contact-us-right">
                    <img src={Image} alt="" className="image-container contact-us-image" />
                </div>
            </div>
        </section>
    );
};

export default ContactUs