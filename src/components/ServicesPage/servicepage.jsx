import react from "react";
import "./servicepage.css"
function ServicesPage() {
    return (
        <div className="services-page">
            <h1>Precision Repair and Reconditioning Services</h1>
            <p>Expert rebuilds for spindles, ball screws, rotary tables, and bearings with rapid turnaround, documented QA, and warranty-backed performance for industrial operations.</p>
            <div className="services-container">
                <div className="services-menu">
                    <div className="services-menu-list">
                        <ul>
                            <h2>Services</h2>
                            <li><a href="#ball-screw-repair">Bearing Selection </a></li>
                            <li><a href="#custom-bearing-design">Custom Bearing Design</a> </li>
                            <li><a href="#bearing-repair">Bearing Repair </a></li>
                            <li><a href="#plant-surveys">Plant Surveys </a></li>
                            <li><a href="#installation-removal">Installation & Removal Support</a></li>
                            <li><a href="#lubrication-management">Lubrication Management</a></li>
                            <li><a href="#training-services">Training Services</a></li>
                            <li><a href="#condition-monitoring">Condition Monitoring</a></li>
                        </ul>
                    </div>

                    <div className="services-whatsapp">
                        <button>Contact Us on Whatsapp</button>
                    </div>
                </div>
                <div className="services-list">

                    <div className="services-list-1">
                        <div className="ball-screw-repair" id="ball-screw-repair">
                            <h1>Core Services</h1>
                            <h2>Bearing Selection & Technical Consultation</h2>
                            <p>We help identify the most suitable bearing solution based on application requirements, ensuring optimal performance, reliability, and longevity.</p>
                            <h4>Process:</h4>
                            <ul>
                                <li>Understand application requirements (load, speed, environment, constraints)</li>
                                <li>Review existing system or design specifications</li>
                                <li>Recommend suitable bearing types, materials, and configurations</li>
                                <li>Perform performance and life calculations where required</li>
                                <li>Provide technical documentation and implementation guidance</li>

                            </ul>
                        </div>
                        <div className="rotary-table-repair" id="custom-bearing-design">


                            <h2>Custom Bearing Design & Manufacturing</h2>
                            <p>We design and manufacture customized bearing solutions tailored to unique operational needs that standard products cannot meet.</p>
                            <h3>Process:</h3>
                            <ul>
                                <li>Capture detailed technical and environmental requirements</li>
                                <li>Develop design concepts and engineering drawings</li>
                                <li>Prototype and validate performance (if required)</li>
                                <li>Finalize tolerances, materials, and configuration</li>
                                <li>Manufacture with strict quality control and deliver to specification</li>
                            </ul>
                        </div>
                        <div className="bearing-repair" id="bearing-repair">
                            <h2>Bearing Maintenance & Repair</h2>
                            <p>Professional refurbishment and remanufacturing to restore performance, extend service life, and reduce replacement costs.</p>
                            <div className="levels">
                                <div className="level-1">
                                    <h4>Level 1: Inspection & Diagnosis</h4>
                                    <p>
                                        Initial evaluation of bearing condition to identify wear, damage, and potential failure risks before any repair action.
                                    </p>
                                    <ul>
                                        <li>Visual and dimensional inspection of bearing components</li>
                                        <li>Measurement of critical parameters (clearances, runout, wear patterns)</li>
                                        <li>Identification of surface damage, contamination, or lubrication issues</li>
                                        <li>Basic functional checks where applicable</li>
                                        <li>Submission of inspection report with condition summary and recommendations</li>
                                    </ul>
                                </div>
                                <div className="level-2">
                                    <h4>Level 2: Standard Refurbishment</h4>
                                    <p>
                                        Restoration of bearings through cleaning, minor corrections, and replacement of standard wear components to improve performance and usability.
                                    </p>
                                    <ul>
                                        <li>Complete disassembly and cleaning of bearing components</li>
                                        <li>Inspection and sorting of reusable vs. damaged parts</li>
                                        <li>Minor reconditioning of raceways and contact surfaces</li>
                                        <li>Replacement of rolling elements, seals, and cages (as required)</li>
                                        <li>Reassembly with proper lubrication and preload settings</li>
                                        <li>Functional testing and quality checks before dispatch</li>
                                    </ul>
                                </div>
                                <div className="level-3">
                                    <h4>Level 3: Full Remanufacturing (Ballscrews & Linear Guideways)</h4>
                                    <p>
                                        Comprehensive rebuilding process to restore bearings to near-OEM condition, ensuring long-term reliability and performance under load.
                                    </p>
                                    <ul>
                                        <li>Complete teardown and detailed component-level inspection</li>
                                        <li>Precision regrinding of raceways and critical surfaces</li>
                                        <li>Replacement or remanufacturing of major components</li>
                                        <li>Restoration of geometry, tolerances, and preload conditions</li>
                                        <li>Reassembly under controlled conditions with upgraded components (if required)</li>
                                        <li>Final inspection, performance testing, and documented quality report</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className="Plant-Surveys-Damage-Analysis" id="plant-surveys">
                            <h2>Plant Surveys & Damage Analysis</h2>
                            <p>On-site diagnostics and failure analysis to identify root causes and prevent recurring issues in production system</p>
                            <h4>Process:</h4>
                            <ul>
                                <li>Conduct on-site inspection of machinery and bearings</li>
                                <li>Collect operational and performance data</li>
                                <li>Identify failure patterns and contributing factors</li>
                                <li>Perform root cause analysis</li>
                                <li>Provide detailed report with corrective and preventive actions</li>
                            </ul>


                        </div>
                        <div className="Bearing-Failure-Analysis" id="installation-removal">
                            <h2>Installation & Removal Support</h2>
                            <p>Expert support for proper mounting and dismounting to ensure correct alignment, fit, and long-term reliability.</p>
                            <h4>Process:</h4>
                            <ul>
                                <li>Evaluate installation requirements and tooling</li>
                                <li>Guide or execute mounting/dismounting procedures</li>
                                <li>Ensure alignment, fit, and handling best practices</li>
                                <li>Perform post-installation checks</li>
                                <li>Provide maintenance and handling recommendations</li>
                            </ul>
                        </div>
                    </div>
                    <div className="services-list-2">
                        <h1>Technical & Value-Added Services</h1>
                        <div className="lubrication-management" id="lubrication-management">
                            <h2>Lubrication Management</h2>
                            <p> Optimized lubrication practices to reduce friction, prevent wear, and improve equipment efficiency.</p>
                            <ul>
                                <li>Assess lubrication requirements for equipment</li>
                                <li>Recommend suitable lubricants and delivery systems</li>
                                <li>Implement lubrication schedules and methods</li>
                                <li>Monitor lubrication performance</li>
                                <li>Optimize and adjust lubrication strategy</li>
                            </ul>
                        </div>
                        <div className="training-services" id="training-services">
                            <h2>Training Services</h2>
                            <p> Practical and technical training to improve handling, maintenance, and performance of bearing systems.</p>
                            <ul>
                                <li>Identify training needs and skill gaps</li>
                                <li>Develop customized training modules</li>
                                <li>Conduct hands-on and theoretical sessions</li>
                                <li>Provide documentation and best practice guides</li>
                                <li>Evaluate effectiveness and provide ongoing support</li>
                            </ul>
                        </div>
                        <div className="condition-monitoring" id="condition-monitoring">
                            <h2>Condition Monitoring</h2>
                            <p> Predictive monitoring solutions to detect early signs of failure and reduce unplanned downtime.</p>
                            <ul>
                                <li>Install monitoring systems (vibration, temperature, etc.)</li>
                                <li>Collect and analyze equipment data</li>
                                <li>Identify abnormal trends and early fault indicators</li>
                                <li>Generate alerts and maintenance recommendations</li>
                                <li>Support predictive maintenance planning</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ServicesPage;