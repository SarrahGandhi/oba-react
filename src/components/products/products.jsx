import React from "react";
import "./products.css"
function Products() {
    return (
        <div className="products-container">
            <h1>Products Catalogue</h1>
            <div className="product-categories">
                <div className="product-categories-container">
                    <img src="/bearing.png" alt="bearing" />
                    <h2>Bearings</h2>
                    <p>Read More</p>
                </div>
                <div className="product-categories-container">
                    <img src="/bearing.png" alt="bearing" />
                    <h2>Linear Automation</h2>
                    <p>Read More</p>
                </div>
            </div>
        </div>
    );
}
export default Products;