import  React , {FC, useRef, useState }   from "react";
import "./Header.css";
import languageStore from "../../Store/LanguageStore";
import useOutsideClick from './UseOutsideClick';
interface HeaderProps {
    onScrollToHome: () => void; // Определяем тип пропса
    onScrollToAbout: () => void; // Определяем тип пропса
    onScrollToContact: () => void; // Определяем тип пропса
}
 const Header:React.FC<HeaderProps> = ({onScrollToHome, onScrollToAbout,onScrollToContact }) => {

    const [activeButton, setActiveButton] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useOutsideClick(() => setIsVisible(false));

    const handleButtonClick = (buttonName: string) => {
      setActiveButton(buttonName);
      if (buttonName ==="button1") {
        languageStore.isEnglish = true
      }
      else{
        languageStore.isEnglish = false
      }
    };
    const togglePopup = () => {
        setIsVisible(prev => !prev);
    };


    return (
        <header className="header">
            <div className="container">
                <div className="wrapperHeader">
                    <h2 className="logo">{languageStore.isEnglish? (languageStore.englishLanguage.logo):(languageStore.russianLanguage.logo)}</h2>
                    <nav className="navigation">
                        <p onClick={onScrollToHome}className="Home">{languageStore.isEnglish? (languageStore.englishLanguage.Home):(languageStore.russianLanguage.Home)}</p>
                        <p onClick={onScrollToAbout} className="AboutMe">{languageStore.isEnglish? (languageStore.englishLanguage.AboutMe):(languageStore.russianLanguage.AboutMe)}</p>
                        <p onClick={onScrollToContact}className="Contact">{languageStore.isEnglish? (languageStore.englishLanguage.Contact):(languageStore.russianLanguage.Contact)}</p>
                        <div className="wrapperOfButtonAndPopUp">
                        {isVisible && (
                            <div ref={ref} className="popUpWithChangeLanguage">
                                <button className={activeButton === 'button1' ? 'activeLanguage englishLanguage' : 'englishLanguage'} onClick={() => handleButtonClick('button1')}
                                    >{languageStore.isEnglish? (languageStore.englishLanguage.english):(languageStore.russianLanguage.english)}</button>
                                <button className={activeButton === 'button2' ? 'activeLanguage russianLanguage' : 'russianLanguage'} onClick={() => handleButtonClick('button2')}
                                    >{languageStore.isEnglish? (languageStore.englishLanguage.russian):(languageStore.russianLanguage.russian)}</button>
                            </div>)}
                            <button className="language" onClick={togglePopup}>{languageStore.isEnglish? (languageStore.englishLanguage.language):(languageStore.russianLanguage.language)}</button>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
export default Header;