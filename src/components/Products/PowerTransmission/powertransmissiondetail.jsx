import React from "react";
import "./powertransmission.css"
import { useParams } from "react-router-dom";
import { powerTransmissionProducts } from "../../../bearingdata";
function PowerTransmissionDetail() {
    const { id } = useParams();
    const products = powerTransmissionProducts.find((p) => p.id === Number(id));
    if (!products) {
        return <main><h2>Product not found</h2></main>
    }

    return (
        <div className="power-transmission-detail">
            <h3>{products.productName}</h3>
            <div className="power-transmission-detail-container">
                <img src={products.img} alt={products.productName} />

                <div className="power-transmission-detail-content">
                    <p>{products.description}</p>
                    <h4>Key Features</h4>
                    <ul>
                        {products.keyFeatures?.map((feature, index) => (<li key={index}>{feature}</li>))}
                    </ul>
                    <h4>Applications</h4>
                    <ul>
                        {products.applications?.map((feature, index) => (<li key={index}>{feature}</li>))}
                    </ul>
                </div>
            </div>

        </div>
    );
}
export default PowerTransmissionDetail;