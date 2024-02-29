
import {
    Accordian,
    AccordianItem,
    AccordianItemHeading,
    AccordianItemButton,
    AccordianItemPanel,
    AccordianItemState,
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import { MdOutlineArrowDropDown } from 'react-icons/md';
import './Style/Value.css'

const Value = () => {
    return (
        <section className="value-wrapper">
            <div className="paddings innerWidth flexCenter value-container">
                <div className="value-left">
                    <div className="image-container">
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Value