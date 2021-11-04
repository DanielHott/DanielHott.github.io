import React from "react";

const URL_JS = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png'
class Header extends React.Component {
    render() {
        return (
            <div>
                <header>
                <h1>Daniel Hott</h1>
                <h3>Desenvolvedor Front-End</h3>
                <img src="https://reactjs.org/logo-og.png" alt="react" id="img-react" />
                <img src={ URL_JS } alt="Js" id="img-js" />
                </header>
            </div>
        )
    }
}

export default Header;
