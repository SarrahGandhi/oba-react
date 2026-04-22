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
                        <li><Link to="/bearing/1" onClick={() => window.scrollTo(0, 0)}>Precision Bearings</Link></li>
                        <li><Link to="/linear-automation/1 " onClick={() => window.scrollTo(0, 0)}>Linear Guideways</Link></li>
                        <li><Link to="/linear-automation/2" onClick={() => window.scrollTo(0, 0)}>BallScrews</Link></li>
                        <li><Link to="/linear-automation/5" onClick={() => window.scrollTo(0, 0)}>Linear Bearings</Link></li>
                        <li><Link to="/bearing/5" onClick={() => window.scrollTo(0, 0)}>Rod-end Bearings</Link></li>
                        <li><Link to="/power-transmission/3" onClick={() => window.scrollTo(0, 0)}>Spindles</Link></li>
                    </ul>
                    <ul className="products-list">
                        <h1>Services</h1>
                        <li><Link to="/services#custom-bearing-design">Custom Bearing Design</Link></li>
                        <li><Link to="/services#bearing-repair">Bearing Repair</Link></li>
                        <li><Link to="/services#condition-monitoring">Condition Monitoring</Link></li>
                    </ul>
                    <ul className="products-list">
                        <h1>About Us</h1>
                        <li><Link to="/aboutus" onClick={() => window.scrollTo(0, 0)}>About OBA</Link></li>
                        <li><Link to="/aboutus#locations" >Manufacturing Facilities</Link></li>
                        <li><Link to="/enquiry" onClick={() => window.scrollTo(0, 0)}>Contact Us</Link></li>
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