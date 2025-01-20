import  React , {FC}  from "react";
import "./Header.css";
import  Line  from "../../Components/Line/Line";
 const Header:FC = () => {
    return (
        <header className="header">
            <div className="container">
                <Line></Line>
                <div className="wrapperHeader">
                    <h2 className="logo">Crafted Creations</h2>
                    <nav className="navigation">
                        <p className="Home">Home</p>
                        <p className="AboutMe">About Me</p>
                        <p className="Contact">Contact</p>
                    </nav>
                </div>
            </div>
        </header>
    );
}
export default Header;