import React from "react";
import "./aboutus.css"
const competencies = [
    {
        id: 1,
        title: "Technical Expertise",
        description: "Our team experienced in the design, development and of course marketing of hydraulics and linear automation that will cater to the requirements of your applications.",
    },
    {
        id: 2,
        title: "Technical Expertise",
        description: "Our team experienced in the design, development and of course marketing of hydraulics and linear automation that will cater to the requirements of your applications.",
    },
    {
        id: 3,
        title: "Technical Expertise",
        description: "Our team experienced in the design, development and of course marketing of hydraulics and linear automation that will cater to the requirements of your applications.",
    },
    {
        id: 4,
        title: "Technical Expertise",
        description: "Our team experienced in the design, development and of course marketing of hydraulics and linear automation that will cater to the requirements of your applications.",
    },
    {
        id: 5,
        title: "Technical Expertise",
        description: "Our team experienced in the design, development and of course marketing of hydraulics and linear automation that will cater to the requirements of your applications.",
    },
    {
        id: 6,
        title: "Technical Expertise",
        description: "Our team experienced in the design, development and of course marketing of hydraulics and linear automation that will cater to the requirements of your applications.",
    }

];
const products = [
    {
        id: 1,
        title: "High Frequency Spindles",
        description: "Precision spindles for Turning, Milling, Drilling and Grinding applications with advanced FEA simulation",
    },
    {
        id: 2,
        title: "Precision Ball Screws",
        description: "8mm to 140mm diameter, 6 meter long, C2, C3, C5, C7 class accuracy",
    },
    {
        id: 3,
        title: "Precision Bearings",
        description: "Taper Roller, Angular Contact, Slewing Ring, Wire Race Bearings in P6, P5, P4, P2 accuracy grades",
    },
    {
        id: 4,
        title: "Rotary Tables",
        description: "170mm to 5000mm diameter with pneumatic and hydraulic clamping, NC and CNC variants",
    },
    {
        id: 5,
        title: "Planetary Gearboxes",
        description: "High-torque planetary gearboxes for demanding automation applications",
    },
    {
        id: 6,
        title: "Precision Linear Guides",
        description: "Ball and roller type linear guides with high precision and load capacity",
    }

];
function AboutUs() {
    return (
        <div className="aboutus">
            <div className="title">
                <h1>25 Years of Precision Engineering Excellence</h1>
                <p>Overseas Bearing Agency -  Specialists in precision spindles, bearings, ball screws, rotary tables, and comprehensive reconditioning services for the global machine tool industry.</p>
            </div>
            <div className="aboutus-container">
                <h2>Our Organization & Heritage</h2>
                <p>Overseas Bearing Agency is a trusted supplier of high-quality bearings and precision motion components, serving diverse industrial sectors with reliable and performance-driven solutions. With a strong focus on quality, consistency, and technical expertise, we provide products that support critical operations across manufacturing, automation, and heavy industry.</p>
                <p>Our portfolio includes precision bearings, linear motion systems, and power transmission components sourced from globally recognized manufacturers. We are committed to ensuring that every product meets stringent performance standards, delivering durability, accuracy, and long-term reliability.</p>
                <p>At Overseas Bearing Agency, we go beyond supply — we partner with our clients to understand their requirements and provide tailored solutions that optimize performance and efficiency.</p>
            </div>
            <div className="aboutus-container-box">
                <div className="stat-box">
                    <h2>25+</h2>
                    <p>Years of Experience</p>
                </div>
                <div className="stat-box">
                    <h2>2</h2>
                    <p>Pan-India Locations</p>
                </div>
                <div className="stat-box">
                    <h2>200+</h2>
                    <p>Satisfied Customers</p>
                </div>
            </div>
            <div className="aboutus-container">
                <h2>Our Core Competencies</h2>
                <p>Multi-disciplinary expertise delivering precision solutions across all aspects of machine tool manufacturing.</p>
                <div className="core-competencies-container">
                    {competencies.map((competency) => (
                        <div key={competency.id} className="competency">
                            <h2>{competency.title}</h2>
                            <p>{competency.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="aboutus-container">
                <h2>Comprehensive Product Portfolio</h2>
                <div className="products-container-box">
                    {products.map((product) => (<div key={product.id} className="products">
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                    </div>))}
                </div>
                <div className="other-products-container">
                    <div className="other-products">
                        <h2>Other Products</h2>
                        <p>We offer a wide range of precision engineering components and custom solutions for diverse industrial applications, including:</p>
                        <ul>
                            <li>Ball Screws</li>
                            <li>Linear Guides</li>
                            <li>Linear Motors</li>
                            <li>Linear Actuators</li>
                            <li>Linear Roller Bearings</li>
                            <li>Linear Ball Bearings</li>
                            <li>Linear Bushings</li>
                            <li>Linear Slides</li>
                            <li>Linear Stages</li>
                            <li>Linear Tables</li>
                            <li>Linear Actuators</li>
                            <li>Linear Roller Bearings</li>

                        </ul>
                    </div>
                    <div className="other-companies">
                        <h2>Other Companies</h2>
                        <div className="company-boxes">
                            <div className="company-box"><h3>Company 1</h3></div>
                            <div className="company-box"><h3>Company 2</h3></div>
                            <div className="company-box"><h3>Company 3</h3></div>
                            <div className="company-box"><h3>Company 4</h3></div>
                            <div className="company-box"><h3>Company 5</h3></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="locations-section">
                <h2>Our Locations</h2>
                <div className="locations-grid">
                    <div className="location-card">
                        <div className="location-header">
                            <div className="location-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="white" />
                                </svg>
                            </div>
                            <div className="location-title">
                                <h3>Southern India</h3>
                                <p>CORPORATE OFFICE / WORKS</p>
                            </div>
                        </div>
                        <div className="location-body">
                            <p className="location-address">
                                #11/2, Lakshmipura Main Road,<br />
                                Abbigere Industrial Area, Abbigere,<br />
                                Bangalore – 560090
                            </p>
                            <hr className="location-divider" />
                            <p className="location-contact-title">Phone:</p>
                            <p className="location-contact-info">
                                Fixed: +91-80-23253148<br />
                                Mobile: +91-9591989244 / +91-9845345952<br />
                                +91-9591994067
                            </p>
                            <hr className="location-divider" />
                            <p className="location-contact-title">Email:</p>
                            <p className="location-contact-info">
                                sales@overseasbearing.com<br />
                                info@overseasbearing.com
                            </p>
                        </div>
                    </div>

                    <div className="location-card">
                        <div className="location-header">
                            <div className="location-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="white" />
                                </svg>
                            </div>
                            <div className="location-title">
                                <h3>Northern India</h3>
                                <p>REGIONAL OFFICE</p>
                            </div>
                        </div>
                        <div className="location-body">
                            <p className="location-address">
                                (Placeholder Address line 1)<br />
                                (Placeholder Address line 2),<br />
                                City – Pincode
                            </p>
                            <hr className="location-divider" />
                            <p className="location-contact-title">Phone:</p>
                            <p className="location-contact-info">
                                Fixed: +91-XX-XXXXXXXX<br />
                                Mobile: +91-XXXXXXXXXX
                            </p>
                            <hr className="location-divider" />
                            <p className="location-contact-title">Email:</p>
                            <p className="location-contact-info">
                                north.sales@overseasbearing.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AboutUs;