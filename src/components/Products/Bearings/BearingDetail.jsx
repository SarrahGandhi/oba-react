import React from "react";
import "./bearing.css"
import { useParams } from "react-router-dom";
import { bearingProducts } from "../../../bearingdata";
function BearingDetail() {
    const { id } = useParams();
    const products = bearingProducts.find((p) => p.id === Number(id));
    if (!products) {
        return <main><h2>Product not found</h2></main>
    }

    return (
        <div className="bearing-detail">
            <h3>{products.productName}</h3>
            <div className="bearing-detail-container">
                <img src={products.img} alt={products.productName} />


                <p>{products.description}</p>
                <ul>
                    {products.keyfeatures.map((feature, index) => { <li>{feature}</li> })}
                </ul>

            </div>

        </div>
    );
}
export default BearingDetail;