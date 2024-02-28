
import './Style/Header.css';
import '../../index.css'

const Header = () => {
  return (
    <section className="header-wrapper">
      <div className="paddings innerWidth h-container">
        {/* <img alt="logo" width={100} /> */}
        <h1>Real Estate</h1>
        <div className="h-menu flexCenter">
          <a className="nav-items" href="">Residencies</a>
          <a className="nav-items" href="">Our Value</a>
          <a className="nav-items" href="">Contact Us</a>
          <a className="nav-items" href="">Get Started</a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
