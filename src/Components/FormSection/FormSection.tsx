import  React , {FC}  from "react";
import "./FormSection.css";
import Ellipse3 from '../../assets/images/Ellipse3.png';
import Person3 from '../../assets/images/Person3.png';
import Mail from '../../assets/images/mail.png';
import DownSpiral from '../../assets/images/DownSpiral.png';
import Keyboard from '../../assets/images/keyboard.png';
import Vector from '../../assets/images/Vector.png';
 const FormSection:FC = () => {
    return (
        <section className="FormSection">
            <div className="container">
                <div className="wrapperOfFormSection">
                    <img src={Mail} alt="" className="Mail" draggable="false" />
                    <img src={DownSpiral} alt="" className="DownSpiral" draggable="false" />
                    <img src={Keyboard} alt="" className="Keyboard" draggable="false" />
                    <div className="mainInfoBlockOfFromSection">
                        <h2 className="titleofFormSection">Got a project in <span>mind?</span></h2>
                        <div className="imgOfFormSection">
                            <img src={Ellipse3} alt="" className="Ellipse3"/>
                            <img src={Person3} alt="" className="Person3"/>
                        </div>
                    </div>
                    <form action="" className="FormOfFormSection">
                        <div className="wrapperOfInputs">
                            <div className="blockOfInput">
                                <label htmlFor="inputName">Your name</label>
                                <input type="text" className="inputName" placeholder="Name"/>
                            </div>
                            <div className="blockOfInput">
                                <label htmlFor="inputEmail" className="labelOfInput">Your email</label>
                                <input type="text" className="inputEmail" placeholder="Email" />
                            </div>
                        </div>
                        <div className="wrapperOfTextArea">
                            <label htmlFor="textareaMessage"  className="labelOfTeaxtarea" >Your Message</label>
                            <textarea name="Message" id="" className="textareaMessage" placeholder="Message"></textarea>
                        </div>
                        <button className="butttonSendMessage">
                            <p className="textOfButtonSendMessage">Send Message</p>
                            <img src={Vector} alt="" className="Vector" draggable="false"  />
                        </button>
                    </form>

                </div>
                
            </div>
        </section>
    );
}
export default FormSection;