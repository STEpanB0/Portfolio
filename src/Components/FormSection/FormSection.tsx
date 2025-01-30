import  React , {FC}  from "react";
import "./FormSection.css";
import Ellipse3 from '../../assets/images/Ellipse3.png';
import Person3 from '../../assets/images/Person3.png';
import Mail from '../../assets/images/mail.png';
import DownSpiral from '../../assets/images/DownSpiral.png';
import Keyboard from '../../assets/images/keyboard.png';
import Vector from '../../assets/images/Vector.png';
import languageStore from "../../Store/LanguageStore";
 const FormSection:FC = () => {
    return (
        <section className="FormSection">
            <div className="container">
                <div className="wrapperOfFormSection">
                    <img src={Mail} alt="" className="Mail" draggable="false" />
                    <img src={DownSpiral} alt="" className="DownSpiral" draggable="false" />
                    <img src={Keyboard} alt="" className="Keyboard" draggable="false" />
                    <div className="mainInfoBlockOfFromSection">
                        <h2 className="titleofFormSection">{languageStore.isEnglish? (languageStore.englishLanguage.titleofFormSection):(languageStore.russianLanguage.titleofFormSection)}
                            <span>{languageStore.isEnglish? (languageStore.englishLanguage.titleofFormSectionSpan):(languageStore.russianLanguage.titleofFormSectionSpan)}</span></h2>
                        <div className="imgOfFormSection">
                            <img src={Ellipse3} alt="" className="Ellipse3"/>
                            <img src={Person3} alt="" className="Person3"/>
                        </div>
                    </div>
                    <form action="" className="FormOfFormSection">
                        <div className="wrapperOfInputs">
                            <div className="blockOfInput">
                                <label htmlFor="inputName">{languageStore.isEnglish? (languageStore.englishLanguage.inputLabelOfName):(languageStore.russianLanguage.inputLabelOfName)}</label>
                                <input type="text" className="inputName" placeholder={languageStore.isEnglish? (languageStore.englishLanguage.inputName):(languageStore.russianLanguage.inputName)}/>
                            </div>
                            <div className="blockOfInput">
                                <label htmlFor="inputEmail" className="labelOfInput">{languageStore.isEnglish? (languageStore.englishLanguage.inputLabelOfEmail):(languageStore.russianLanguage.inputLabelOfEmail)}</label>
                                <input type="text" className="inputEmail" placeholder={languageStore.isEnglish? (languageStore.englishLanguage.inputEmail):(languageStore.russianLanguage.inputEmail)} />
                            </div>
                        </div>
                        <div className="wrapperOfTextArea">
                            <label htmlFor="textareaMessage"  className="labelOfTeaxtarea" >{languageStore.isEnglish? (languageStore.englishLanguage.labelOfTeaxtarea):(languageStore.russianLanguage.inputElabelOfTeaxtareamail)}</label>
                            <textarea name="Message" id="" className="textareaMessage" placeholder={languageStore.isEnglish? (languageStore.englishLanguage.textarea):(languageStore.russianLanguage.textarea)}></textarea>
                        </div>
                        <button className="butttonSendMessage">
                            <p className="textOfButtonSendMessage">{languageStore.isEnglish? (languageStore.englishLanguage.textOfButtonSendMessage):(languageStore.russianLanguage.textOfButtonSendMessage)}</p>
                            <img src={Vector} alt="" className="Vector" draggable="false"  />
                        </button>
                    </form>

                </div>
                
            </div>
        </section>
    );
}
export default FormSection;