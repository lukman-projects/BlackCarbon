import React from 'react';
import './contact.css'
import Group from '../../../../assets/images/Group 26.svg'
import {NavLink} from "react-router-dom";


const Contact = () => {
    return (
        <section id="contact">
            <div className="container mx-auto">
                <img src={Group} alt="" className="contact--img mb-8"/>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 relative">
                    <div className="con-box">
                        <h2 className="contact-title">black carbon</h2>
                        <div>
                            <NavLink className="contact-link " to="/">how it work?</NavLink>
                            <NavLink className="contact-link" to="/">login</NavLink>
                        </div>
                    </div>
                    <div className="con-box">
                        <h2 className="contact-title">company</h2>
                        <NavLink className="contact-link" to="/">about us</NavLink>
                    </div>
                    <div className="con-box">
                        <h2 className="contact-title">help and support</h2>
                        <NavLink className="contact-link" to="/">contact</NavLink>
                    </div>
                    <div className="con-box">
                        <h2 className="contact-title">social media</h2>
                        <div className="flex flex-col">
                            <a href="https://instagram.com/black_carbons" className="contact-soc">instagram</a>
                            <a href="https://instagram.com/black_carbons" className="contact-soc">telegram</a>
                            <a href="https://instagram.com/black_carbons" className="contact-soc">whatsApp</a>
                            <a href="https://instagram.com/black_carbons" className="contact-soc">Facebook</a>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}
export default Contact