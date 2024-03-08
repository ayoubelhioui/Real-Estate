
import './Style/Header.css';
import '../../index.css'
import { BiMenuAltRight } from 'react-icons/bi';
import { useState } from 'react';
const Header = () => {

  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyle = (isMenuOpened: boolean): React.CSSProperties => {
    if (document.documentElement.clientWidth <= 800) {
        return {
            right: isMenuOpened === false ? "-100%" : undefined
        };
    } {
        return {}; 
    }
};

  return (
    <section className="header-wrapper">
      <div className="paddings innerWidth h-container">
        <h1>Real Estate</h1>
        <div className="h-menu flexCenter"
        style={getMenuStyle(menuOpened)}>
          <a className="nav-items" href="">Residencies</a>
          <a className="nav-items" href="">Our Value</a>
          <a className="nav-items" href="">Contact Us</a>
          <a className="nav-items" href="">Get Started</a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>

      <div className="menu-icon">
        <BiMenuAltRight size={30} onClick={()=>setMenuOpened((prev)=>!prev)}/>
      </div>

      </div>

    </section>
  );
};

export default Header;
