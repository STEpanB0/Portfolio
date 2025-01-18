import  React , {FC}  from "react";
import "./Header.css";
import logo from "./www.png";
 const Header:FC = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="wrapperHeader">
                    <img src="logo" alt="" className="logo" />
                    <nav className="navigation">
                        <div className="Home">Home</div>
                        <div className="About Me">About Me</div>
                        <div className="Contact">Contact</div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
export default Header;