import './About.css';
import React , {FC}from 'react';
import Ellipse from '../../assets/images/Ellipse.png';
import Person2 from '../../assets/images/Person2.png';
import DoodlesItems from '../../assets/images/DoodleItems.png';
import Sleeping from '../../assets/images/Sleeping.png';
import UpSpiral from '../../assets/images/UpSpiral.png';
import Music from '../../assets/images/Music.png';
import Bulb from '../../assets/images/Bulb.png';
const About:FC =()=> {
  return (
    <section className="About">
        <div className="container">
            <div className="wrapperOfAbout">
                <img src={Music} alt="" className="Music" draggable="false" />
                <img src={Bulb} alt="" className="Bulb" draggable="false" />
                <img src={UpSpiral} alt="" className="UpSpiral"draggable="false"  />
                <div className="aboutInfo">
                    <div className="aboutinfoMainBlock">
                        <h2 className="titleAbout">About <span>me</span></h2>
                        <p className="textAbout">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.... <span className='readmore'>Read more</span></p>
                    </div>
                    <div className="aboutImg">
                        <img src={DoodlesItems} alt="" className="DoodlesItems" />
                        <img src={Ellipse} alt="" className="Ellipse2" />
                        <img src={Person2} alt="" className="Person2" />
                        <img src={Sleeping} alt="" className="Sleeping" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default About;
