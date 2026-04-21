import React from "react";
import "./powertransmission.css"
import { Link } from "react-router-dom";
import { powerTransmissionProducts } from "../../../bearingdata";
function PowerTransmission() {
    return (
        <main className="power-transmission-container">
            <h1>Power Transmission</h1>
            <h2>Complete range: spindle, angular contact, tapered, thrust and slewing ring linear-automations for precision applications.</h2>
            <div className="power-transmission-products">
                {powerTransmissionProducts.map((product) => (<div key={product.id}>
                    <img src={product.img} alt={product.productName} />
                    <h3>{product.productName}</h3>
                    <Link to={`/power-transmission/${product.id}`}><button>Read More</button></Link>
                </div>))}
            </div>
        </main>
    );
} export default PowerTransmission;