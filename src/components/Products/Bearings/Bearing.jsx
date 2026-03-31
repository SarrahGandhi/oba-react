import React from "react";
import { Link } from "react-router-dom";
import "./bearing.css"
import { bearingProducts } from "../../../bearingdata";
function Bearings() {
    return (
        <main className="bearing-container">
            <h1>Bearings</h1>
            <h2>Complete range: spindle, angular contact, tapered, thrust and slewing ring bearings for precision applications.</h2>
            <div className="bearing-products">
                {bearingProducts.map((product) => (<div key={product.id}>
                    <img src={product.img} alt={product.productName} />
                    <h3>{product.productName}</h3>
                    <Link to={`/bearing/${product.id}`}><button>Read More</button></Link>
                </div>))}
            </div>
        </main>
    );
} export default Bearings;