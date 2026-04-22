import React from "react";
import "./bearing.css"
import { useParams } from "react-router-dom";
import { bearingProducts } from "../../../bearingdata";
import ProductStickyBar from "../../ProductStickyBar/ProductStickyBar";

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

                <div className="bearing-detail-content">
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
            <ProductStickyBar />
        </div>
    );
}
export default BearingDetail;