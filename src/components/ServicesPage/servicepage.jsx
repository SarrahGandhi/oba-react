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
                            <li>Ball Screw Repair</li>
                            <li>Rotary & Bearing Repair</li>
                            <li>Spindle Rebuilds</li>
                            <li>Benefits & Capabilities</li>
                        </ul>
                    </div>

                    <div className="services-whatsapp">
                        <button>Contact Us on Whatsapp</button>
                    </div>
                </div>
                <div className="services-list">
                    <div className="ball-screw-repair">
                        <h2>Ball Screw Repair</h2>
                        <p>Partial ball replacement can provide short-term relief but does not restore original geometry, preload stability, or long-term accuracy under load. Our complete remanufacturing process regrinds screw and nut raceways, matches precision balls, and reassembles to OEM preload with full inspection and test documentation—delivering multi‑year reliability in production environments.</p>
                        <h3>Our 7-Step Ball Screw Rebuild Process</h3>
                        <ul>
                            <li>Check the load of the nut at each end of the screw & in the center, locating any trouble spots.</li>
                            <li>Complete disassembly of the ball screw and nut, checking ball size, ball groove depth, returns etc.</li>
                            <li>Thread grinding (ball grooves) your screw end to end.</li>
                            <li>ID grind the nut (ball grooves) to the same size & tolerance as the screw & replace all tubes and returns.</li>
                            <li>Precision grind & polish a new set of balls to match the newly ground ball grooves on your screw/nut.</li>
                            <li>Final assembly to original preload, replacing all wipers & seals, followed by inspection, testing & packaging.</li>
                            <li>If bearing seatings are damaged, we can OD grind and chrome plate to OEM specs.</li>
                        </ul>
                    </div>
                    <div className="rotary-table-repair">
                        <h2>Rotary Table Repair</h2>

                        <h3>Complete Overhauling of Bearings:</h3>
                        <ul>
                            <li>Check the load of the nut at each end of the screw & in the center, locating any trouble spots.</li>
                            <li>Complete disassembly of the ball screw and nut, checking ball size, ball groove depth, returns etc.</li>
                            <li>Thread grinding (ball grooves) your screw end to end.</li>
                            <li>ID grind the nut (ball grooves) to the same size & tolerance as the screw & replace all tubes and returns.</li>
                            <li>Precision grind & polish a new set of balls to match the newly ground ball grooves on your screw/nut.</li>
                            <li>Final assembly to original preload, replacing all wipers & seals, followed by inspection, testing & packaging.</li>
                            <li>If bearing seatings are damaged, we can OD grind and chrome plate to OEM specs.</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default ServicesPage;