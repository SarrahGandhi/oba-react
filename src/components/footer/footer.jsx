import React from "react";
import { Link } from "react-router-dom";
import "./footer.css"
const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-contact-details">

                    <ul className="contact-details">
                        <h1>Overseas Bearing Agency</h1>
                        <li>60 MG Road, G-37 VaraLakshmi Market Complex, Hyderabad 50003 Telangana State, India</li>
                        <li>+91-9494637013</li>
                        <li>overseasbearing@aol.com</li>
                    </ul>

                    <ul className="products-list">
                        <h1>Products</h1>
                        <li><Link to="/bearing/1">Precision Bearings</Link></li>
                        <li><Link to="/linear-automation/1">Linear Guideways</Link></li>
                        <li><Link to="/linear-automation/2">BallScrews</Link></li>
                        <li><Link to="/linear-automation/5">Linear Bearings</Link></li>
                        <li><Link to="/bearing/5">Rod-end Bearings</Link></li>
                        <li><Link to="/power-transmission/3">Spindles</Link></li>
                    </ul>
                    <ul>
                        <h1>Services</h1>
                        <li><Link to="/services">Ball Screw Reconditioning</Link></li>
                        <li><Link to="/services#bearing-repair">Bearing Conditioning</Link></li>
                        <li><Link to="/services">Spindle Reconditioning</Link></li>
                    </ul>
                    <ul>
                        <h1>About Us</h1>
                        <li><Link to="/aboutus">About OBA</Link></li>
                        <li><Link to="/aboutus#locations">Manufacturing Facilities</Link></li>
                        <li><Link to="/enquiry">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    <p>© 2026 Overseas Bearing Agency. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;