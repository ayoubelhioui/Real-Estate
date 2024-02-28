
import './Style/Companies.css'
import PrologisCompanyImage from '../../assets/images/prologis.png'
import TowerCompanyImage from '../../assets/images/tower.png'
import EquinixCompanyImage from '../../assets/images/equinix.png'
import DigitalRealityCompanyImage from '../../assets/images/realty.png'

import '../../index.css'

const Companies = () => {
  return (
    <section className="companies-wrapper">
      <div className="paddings innerWidth flexCenter companies-container">
        <img src={PrologisCompanyImage} alt="" />
        <img src={DigitalRealityCompanyImage} alt="" />
        <img src={TowerCompanyImage} alt="" />
        <img src={EquinixCompanyImage} alt="" />
      </div>
    </section>
  )
}

export default Companies
