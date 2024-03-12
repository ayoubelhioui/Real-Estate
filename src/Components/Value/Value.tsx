
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import { MdOutlineArrowDropDown } from 'react-icons/md';
import './Style/Value.css'
import ValueSectionPicture from '../../assets/images/value-section-picture.jpg'
import accordionItems from '../../utils/accordion';
import { useState } from 'react';

const Value = () => {
    return (
        <section className="value-wrapper" id='our-value'>
            <div className="paddings innerWidth flexCenter value-container">

                <div className="value-left">
                    <div className="image-container">
                        <img src={ValueSectionPicture} alt="alt for image" />
                    </div>
                </div>

                <div className="flexColStart value-right">
                    <span className='orangeText'>Our Value</span>
                    <span className='primaryText'>Value We Give To You</span>
                    <span className='secondaryText'>We always ready to help by providing the best services for you.
                    <br/>
                    We beleive a good blace to live can make your life better</span>
                <Accordion 
                    className='accordion'
                    allowMultipleExpanded={false}
                    preExpanded={[0]}>
                        {
                            accordionItems.map((accordionItem, index)=> {
                                // const [className, setClassName] = useState(null);
                                return (
                                    <AccordionItem className={`accordion-item`} key={index} uuid={index}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className= 'flexCenter accordion-button'>
                                                {/* <AccordionItemState>
                                                {({expanded}) => expanded 
                                                ? setClassName("expanded")
                                                : setClassName("collapsed")
                                                }
                                                </AccordionItemState> */}
                                                <div className="flexCenter icon">{accordionItem.icon}</div>
                                                <span className="primaryText">{accordionItem.heading}</span>
                                                <div className="flexCenter icon">
                                                    <MdOutlineArrowDropDown size={20}/>
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p className="secondaryText">{accordionItem.detail}</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                );
                            })
                        }
                </Accordion>
                </div>

            </div>
        </section>
    );
};

export default Value