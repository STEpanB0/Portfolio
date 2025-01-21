import  React , {FC}  from "react";
import "./Footer.css";
import Home from '../../assets/images/Home.png';
import User from '../../assets/images/User.png';
import Phone from '../../assets/images/Phone.png';
import VK from '../../assets/images/VK.png';
import Telegram from '../../assets/images/Telegram.png';
import Whatsapp from '../../assets/images/Whatsapp.png';
 const Footer:FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="wrapperOfFooter">
                    <nav className="navigationFromFooter">
                        <div className="itemNavigation">
                            <img src={Home} alt="" className="imgFooterNavigation" draggable="false" />
                            <p className="textOfItemNavigation">Home</p>
                        </div>
                        <div className="itemNavigation">
                            <img src={User} alt="" className="imgFooterNavigation"draggable="false"/>
                            <p className="textOfItemNavigation">About me</p>
                        </div>
                        <div className="itemNavigation">
                            <img src={Phone} alt="" className="imgFooterNavigation"draggable="false" />
                            <p className="textOfItemNavigation">Contact</p>
                        </div>
                    </nav>
                    <div className="blockOfSocialNetworks">
                        <div className="itemSocialNetwork">
                            <img src={Telegram} alt="" className="Telegram"draggable="false" />
                        </div>
                        <div className="itemSocialNetwork">
                            <img src={VK} alt="" className="Vk"draggable="false" />
                        </div>
                        <div className="itemSocialNetwork">
                            <img src={Whatsapp} alt="" className="Whatsapp" draggable="false" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;