import React from 'react';
import './hero.css'
import Carbon from '../../../../assets/images/BLACK CARBON.svg'
import Wallet from '../../../../assets/images/cardholder.png'
import Card from '../../../../assets/images/card2.png'
import Card2 from '../../../../assets/images/КАРТА.svg'
import Title from '../../../../assets/images/text.png'
import Logo from '../../../../assets/images/Union4.svg'


const Hero = () => {
    return (
        <section id="hero">
            <div className="container mx-auto align-center">
                <div className="hero--box">
                    <div className="title--delay">
                        <div className="delay">
                            <div className="hero--title">
                                <img src={Carbon} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="wallet delay" >
                        <div className="rfid--card">
                            <img src={Card} alt=""/>
                        </div>
                        <div className="rfid--card2">
                            <img src={Card2} alt=""/>
                        </div>
                        <div className="card--holder">
                            <img src={Wallet} alt=""/>
                        </div>
                    </div>
                    <div className="desc--delay">
                        <div className="delay">
                            <div className="hero-desc">
                                <img src={Title} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="hero--logo">
                        <img src={Logo} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero