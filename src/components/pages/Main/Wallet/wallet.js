import React from 'react';
import {NavLink} from "react-router-dom";
import Cards from '../../../../assets/images/CARDS.png'
import './wallet.css'

const Wallet = () => {
    return (
        <section id="wallet">
            <div className="container mx-auto">
                <div className="flex justify-center items-center wallet__row">
                    <div className=" wallet-block">
                        <h1 className="wallet-title">
                            <span className="wallet-span">black carbon</span> wallet
                        </h1>
                        <p className="wallet-desc">
                            black carbon wallet is a sleek and sophistic ated minimalist wallet with nfc technology and
                            RFID protection card , it is ideal for travel , events and everyday advantures
                        </p>
                        <NavLink to="/" className="wallet-link">learn more</NavLink>
                    </div>
                    <div className=" wallet-images">
                        <img src={Cards} alt="" className="wallet-img"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Wallet