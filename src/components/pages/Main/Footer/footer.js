import React from 'react';
import './footer.css'
import Logo from '../../../../assets/images/Union.svg'

const Footer = () => {
    return (
        <footer>
            <div className="container mx-auto">
                    <div className="footer-logo">
                        <img src={Logo} alt="footer--logo" className=""/>
                        <p className="footer-title">c all right reserved
                            “black card”
                            2021</p>
                    </div>
            </div>
        </footer>
    )
}

export default Footer