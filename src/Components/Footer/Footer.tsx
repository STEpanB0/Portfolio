import  React , {FC}  from "react";
import "./Footer.css";
import Home from '../../assets/images/Home.png';
import User from '../../assets/images/User.png';
import Phone from '../../assets/images/Phone.png';
import VK from '../../assets/images/VK.png';
import Telegram from '../../assets/images/Telegram.png';
import Whatsapp from '../../assets/images/Whatsapp.png';
import languageStore from "../../Store/LanguageStore";
interface FooterProps {
    onScrollToHome: () => void; // Определяем тип пропса
    onScrollToAbout: () => void; // Определяем тип пропса
    onScrollToContact: () => void; // Определяем тип пропса
}
 const Footer:React.FC<FooterProps> = ({onScrollToHome, onScrollToAbout,onScrollToContact }) => {
    const handleClickTelegream =()  =>{
        window.open("https://t.me/sKoT1Naaa", "_blank", "noopener,noreferrer");
    };
    const handleClickVK =()  =>{
        window.open("https://vk.com/sgornostaev20", "_blank", "noopener,noreferrer");
    };
    const handleClickWhatsapp =()  =>{
        window.open("https://wa.me/79511486047", "_blank", "noopener,noreferrer");
    };
    return (
        <footer className="footer">
            <div className="container">
                <div className="wrapperOfFooter">
                    <nav className="navigationFromFooter">
                        <div className="itemNavigation">
                            <img src={Home} alt="" className="imgFooterNavigation" draggable="false" />
                            <p className="textOfItemNavigation" onClick={onScrollToHome}>{languageStore.isEnglish? (languageStore.englishLanguage.Home):(languageStore.russianLanguage.Home)}</p>
                        </div>
                        <div className="itemNavigation">
                            <img src={User} alt="" className="imgFooterNavigation"draggable="false"/>
                            <p className="textOfItemNavigation" onClick={onScrollToAbout}>{languageStore.isEnglish? (languageStore.englishLanguage.AboutMe):(languageStore.russianLanguage.AboutMe)}</p>
                        </div>
                        <div className="itemNavigation">
                            <img src={Phone} alt="" className="imgFooterNavigation"draggable="false" />
                            <p className="textOfItemNavigation" onClick={onScrollToContact}>{languageStore.isEnglish? (languageStore.englishLanguage.Contact):(languageStore.russianLanguage.Contact)}</p>
                        </div>
                    </nav>
                    <div className="blockOfSocialNetworks">
                        <div className="itemSocialNetwork" onClick={handleClickTelegream}>
                            <img src={Telegram} alt="" className="Telegram"draggable="false" />
                        </div>
                        <div className="itemSocialNetwork" onClick={handleClickVK}>
                            <img src={VK} alt="" className="Vk"draggable="false"  />
                        </div>
                        <div className="itemSocialNetwork" onClick={handleClickWhatsapp}>
                            <img src={Whatsapp} alt="" className="Whatsapp" draggable="false" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;