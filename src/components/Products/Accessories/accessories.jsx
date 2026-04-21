import React from "react";
import "./accessories.css"
import { Link } from "react-router-dom";
import { accessoriesProducts } from "../../../bearingdata";
function Accessories() {
    return (
        <main className="accessories-container">
            <h1>Accessories</h1>
            <h2>Complete range: spindle, angular contact, tapered, thrust and slewing ring linear-automations for precision applications.</h2>
            <div className="accessories-products">
                {accessoriesProducts.map((product) => (<div key={product.id}>
                    <img src={product.img} alt={product.productName} />
                    <h3>{product.productName}</h3>
                    <Link to={`/accessories/${product.id}`}><button>Read More</button></Link>
                </div>))}
            </div>
        </main>
    );
} export default Accessories;