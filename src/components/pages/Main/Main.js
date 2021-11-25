import React from 'react';
import Header from './Header/header'
import Hero from "./Hero/hero";
import Rfid from "./Rfid/rfid";
import Wallet from "./Wallet/wallet";
import Instruction from "./Instruction/instruction";
import Contact from "./Contact/contact";
import Footer from "./Footer/footer";

const Main = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <Rfid/>
            <Wallet/>
            <Instruction/>
            <Contact/>
            <Footer/>
            
        </div>
    )
}

export default Main