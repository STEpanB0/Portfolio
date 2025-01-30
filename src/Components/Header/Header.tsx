import  React , {FC, useRef }   from "react";
import "./Header.css";
import languageStore from "../../Store/LanguageStore";
interface HeaderProps {
    onScrollToHome: () => void; // Определяем тип пропса
    onScrollToAbout: () => void; // Определяем тип пропса
    onScrollToContact: () => void; // Определяем тип пропса
}
 const Header:React.FC<HeaderProps> = ({onScrollToHome, onScrollToAbout,onScrollToContact }) => {
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
                            <div className="popUpWithChangeLanguage">
                                
                            </div>
                            <button className="language">{languageStore.isEnglish? (languageStore.englishLanguage.language):(languageStore.russianLanguage.language)}</button>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
export default Header;