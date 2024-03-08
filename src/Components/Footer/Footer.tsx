
import './Style/Footer.css'

const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <div className="paddings innerWidth flexCenter footer-container">
                {/* left side */}
                <div className="flexColStart footer-left">
                    <h1>Real Estate</h1>
                    <span className='secondaryText'>
                        Our Vision Is To Make All People <br/>
                        The Best Place To Live From Them
                    </span>
                </div>

                <div className="footer-right flexColStart">
                    <span className='primaryText'>Information</span>
                    <span className='secondaryText'>145 New York, FL 4234</span>
                    <div className="flexCenter footer-menu">
                        <span>Property</span>
                        <span>Service</span>
                        <span>Product</span>
                        <span>About</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer