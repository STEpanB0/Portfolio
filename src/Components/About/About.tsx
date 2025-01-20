import './About.css';
import Ellipse from '../../assets/images/Ellipse.png';
import Person2 from '../../assets/images/Person2.png';
import DoodlesItems from '../../assets/images/DoodlesItems.png';
import Sleeping from '../../assets/images/Sleeping.png';
import UpSpiral from '../../assets/images/UpSpiral.png';
import Music from '../../assets/images/Music.png';
import Bulb from '../../assets/images/Bulb.png';
function About() {
  return (
    <section className="About">
        <div className="container">
            <div className="wrapperOfAbout">
                <img src={Music} alt="" className="Music" />
                <img src={Bulb} alt="" className="Bulb" />
                <img src={UpSpiral} alt="" className="UpSpiral" />
                <div className="aboutInfo">
                    <div className="aboutinfoMainBlock">
                        <h2 className="titleAbout">About <span>me</span></h2>
                        <p className="textAbout">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.... Read more</p>
                    </div>
                    <div className="aboutImg">
                        <img src="" alt="" className="DoodlesItems" />
                        <img src="" alt="" className="Ellipse" />
                        <img src="" alt="" className="Person2" />
                        <img src="" alt="" className="Sleeping" />

                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default About;
