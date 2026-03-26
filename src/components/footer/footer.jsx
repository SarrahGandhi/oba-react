import React from "react";
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
                        <li>
                            Precision Bearings
                        </li>
                        <li>Linear Guideways</li>
                        <li>BallScrews</li>
                        <li>Linear Bearings</li>
                        <li>Rod-end Bearings</li>
                        <li>Spindles</li>
                    </ul>
                    <ul>
                        <h1>Services</h1>
                        <li>
                            Ball Screw Reconditioning
                        </li>
                        <li>Bearing Conditioning</li>
                        <li>Spindle Reconditioning</li>

                    </ul>
                    <ul>
                        <h1>About Us</h1>
                        <li>
                            About OBA
                        </li>
                        <li>Manufacturing Facilities</li>
                        <li>Contact Us</li>

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