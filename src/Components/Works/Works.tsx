import  React , {FC}  from "react";
import Landing from '../../assets/images/Landing.png';
import "./Works.css";
 const Works:FC = () => {
    return (
        <section className="Works">
            <div className="container">
                <div className="wrapperOfWorks">
                    <h2 className="titleOfWorks">My <span>works</span></h2>
                    <div className="wrapperOfButtons">
                        <button className="worksButton">All</button>
                        <button className="worksButton">UI</button>
                        <button className="worksButton">UX</button>
                        <button className="worksButton">Web Design</button>
                    </div>
                    <div className="sectionOfPresentation">
                        <div className="slide">
                            <img src={Landing} alt="" className="slideImg"/>
                        </div>
                        <div className="slide">
                            <img src={Landing} alt="" className="slideImg"/>
                        </div>
                        <div className="slide">
                            <img src={Landing} alt="" className="slideImg"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Works;