import React from 'react';
import './instruction.css'
import Block1 from '../../../../assets/images/Vector 6.svg'
import Settings from '../../../../assets/images/settings.svg'
import Rekursy from '../../../../assets/images/rekursy.svg'
import Battery from '../../../../assets/images/battery.svg'

const Instruction = () => {
    return (
        <section id="instruction">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 ">
                    <div>
                        <img src={Block1} alt="" className="instruction-img"/>
                        <p className="instruction-desc"> rfid/nfc contactless blocking card !</p>

                    </div>
                    <div>
                        <img src={Settings} alt="" className="instruction-img"/>
                        <p className="instruction-desc">no service required </p>
                    </div>
                    <div>
                        <img src={Rekursy} alt="" className="instruction-img"/>
                        <p className="instruction-desc">cards with in 2 cm eitcher side are protected</p>

                    </div>
                    <div>
                        <img src={Battery} alt="" className="instruction-img"/>
                        <p className="instruction-desc">no batteries required</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Instruction