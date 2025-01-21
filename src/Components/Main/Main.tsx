import  React , {FC} from "react";
import "./Main.css";
import Spiral from '../../assets/images/Spiral.png';
import Doodles from '../../assets/images/Doodles.png';
import Person from '../../assets/images/Person.png';
import Ellipse from '../../assets/images/Ellipse.png';
import Arrow from '../../assets/images/Arrow.png';
import Download from '../../assets/images/Download.png';
 const Main:FC = () => {
    return (
        <main className="main">
            <div className="container">
                <div className="mainInfo">
                    <img className="spiral" src={Spiral} alt="" draggable="false" />
                    <div className="maininfoblock">
                        <h1 className="mainTitle">Frontend <span>Developer</span></h1>
                        <div className="buttonWrapper">
                            <button className="mainbutton buttonHire">
                                <p className="textOfButtonHireMe">Hire Me</p>
                            </button>
                            <button className="mainbutton buttonDownload">
                                <p className="textOfButtonDownload">Download CV</p>
                                <img src={Download} alt="" className="imgofButtonDownload" draggable="false" />
                            </button>
                        </div>
                    </div>
                    <div className="mainImg">
                        <img src={Doodles} className="Doodles" alt="" />
                        <img src={Ellipse} className="Ellipse" alt="" />
                        <img src={Person} className="Person" alt="" />
                    </div>
                    <button className="slideDown">
                        <img src={Arrow} alt="" className="arrowOfButtonSlideDown"draggable="false" />
                    </button>
                    
                </div>
                
            </div>
        </main>
    );
}
export default Main;