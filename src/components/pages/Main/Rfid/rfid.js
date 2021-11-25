import React from 'react';
import {NavLink} from "react-router-dom";
import RfidImg1 from '../../../../assets/images/rfidback.svg'
import RfidImg2 from '../../../../assets/images/КАРТА АЛДЫ.svg'
import './rfid.css'

const Rfid = () => {
    return (
        <section id="rfid">
            <div className="container mx-auto ">
                <div className=" flex  justify-center  items-center rfid_row ">
                    <div className="rfid-images">
                        <img src={RfidImg2} alt=""  className="rfid-img1"/>
                        <img src={RfidImg1} alt="" className="rfid-img2"/>

                    </div>
                    <div className="rfid-block">
                        <h1 className="rfid-title">
                            why you need <span className="rfid-span">RFID blocking card</span>?
                        </h1>
                        <p className="rfid-desc">
                            Сriminals can easily acquire equiment that can access the data stored on you cards from up
                            to several meters.RFID blocking card will block the RFID signals, protecting your personal
                            information from unauthorized scan.
                        </p>
                        <NavLink to="/" className="rfid-link">learn more</NavLink>
                    </div>
                </div>
            </div>
        </section>
    )

}
export default Rfid