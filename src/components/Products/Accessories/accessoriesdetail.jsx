import React from "react";
import "./accessories.css"
import { useParams } from "react-router-dom";
import { accessoriesProducts } from "../../../bearingdata";
function AccessoriesDetail() {
    const { id } = useParams();
    const products = accessoriesProducts.find((p) => p.id === Number(id));
    if (!products) {
        return <main><h2>Product not found</h2></main>
    }

    return (
        <div className="accessories-detail">
            <h3>{products.productName}</h3>
            <div className="accessories-detail-container">
                <img src={products.img} alt={products.productName} />

                <div className="accessories-detail-content">
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
export default AccessoriesDetail;