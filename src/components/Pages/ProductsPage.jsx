import React from "react";
import { Link } from "react-router-dom";
import "../Home/products/products.css";

function ProductsPage() {
    return (
        <div className="products-container" style={{ paddingBottom: '80px', minHeight: '60vh' }}>
            <h1>Our Products</h1>
            <div className="product-categories" style={{ marginTop: '30px' }}>
                <div className="product-categories-container">
                    <img src="/bearing.png" alt="bearing" />
                    <h2>Bearings</h2>
                    <p className="product-description">High-quality industrial bearings for all your needs.</p>
                    <Link className="link" to="/bearing">Read More</Link>
                </div>
                <div className="product-categories-container">
                    <img src="/bearing.png" alt="bearing" />
                    <h2>Linear Automation</h2>
                    <p className="product-description">Precision linear motion control systems.</p>
                    <Link className="link" to="/linear-automation">Read More</Link>
                </div>
                <div className="product-categories-container">
                    <img src="/bearing.png" alt="bearing" />
                    <h2>Power Transmission & Mechanical Components</h2>
                    <p className="product-description">Reliable and durable industrial components.</p>
                    <Link className="link" to="/power-transmission">Read More</Link>
                </div>
                <div className="product-categories-container">
                    <img src="/bearing.png" alt="bearing" />
                    <h2>Accessories & Supporting Components</h2>
                    <p className="product-description">Engineered for maximum efficiency.</p>
                    <Link className="link" to="/accessories">Read More</Link>
                </div>

            </div>
        </div>
    );


}

export default ProductsPage;
