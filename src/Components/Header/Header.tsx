import  React , {FC, useRef }   from "react";
import "./Header.css";
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
                    <h2 className="logo">Crafted Creations</h2>
                    <nav className="navigation">
                        <p onClick={onScrollToHome}className="Home">Home</p>
                        <p onClick={onScrollToAbout} className="AboutMe">About Me</p>
                        <p onClick={onScrollToContact}className="Contact">Contact</p>
                        <button className="language">Language</button>
                    </nav>
                </div>
            </div>
        </header>
    );
}
export default Header;