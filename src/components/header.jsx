import React from "react";
import dheu from './dheu.png'
class Header extends React.Component {
    render() {
        return (
            <div>
                <header className="header">
                <img src={ dheu } alt="" width="70" />
                <div>
                    <a href="#projects" className="links">Projetos</a>
                    <a href="#contact" className="links">  Contato</a>
                    <a href="https://www.linkedin.com/in/danielhott/" className="links">  Curriculo</a>
                </div>
                </header>
            </div>
        )
    }
}

export default Header;
