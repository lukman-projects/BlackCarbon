import Header from '../components/pages/Main/Header/header'
import Hero from "../components/pages/Main/Hero/hero";
import Rfid from "../components/pages/Main/Rfid/rfid";
import Wallet from "../components/pages/Main/Wallet/wallet";
import Instruction from "../components/pages/Main/Instruction/instruction";
import Contact from "../components/pages/Main/Contact/contact";
import Footer from "../components/pages/Main/Footer/footer";

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