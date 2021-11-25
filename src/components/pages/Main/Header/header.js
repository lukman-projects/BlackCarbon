import React from 'react';
import './header.css'
import Logo from '../../../../assets/images/Union.svg'


const Header = () => {
    return (
        <header id="header">
            <div className="header__delay delay">
                <div className="container  mx-auto  ">
                    <nav className="nav__bar">
                        <a href="#"><img src={Logo} alt="" className="logo"/></a>

                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header