import React from "react";
import "./linearautomation.css"
const linearAutomationProducts = [
    {
        id: 1,
        productName: "Ball Screw",
        img: "/linear-automation/ballscrew.jpg"
    },
    {
        id: 2,
        productName: "Linear Guideway",
        img: "/linear-automation/linearguideway.jpg"
    },
    {
        id: 3,
        productName: "Lead Screw",
        img: "/linear-automation/lead-screw.jpg"
    },
    {
        id: 4,
        productName: "Linear Shaft",
        img: "/linear-automation/linear-shaft.jpg"
    },
    {
        id: 5,
        productName: "Linear Bearing",
        img: "/linear-automation/linear-bearing.jpg"
    },
    {
        id: 6,
        productName: "Linear Stages",
        img: "/linear-automation/linear-stages.jpg"
    },
    {
        id: 7,
        productName: "Actuator",
        img: "/linear-automation/actuator.jpg"
    },
    {
        id: 9,
        productName: "Spline Shafts and Nuts",
        img: "/linear-automation/splineshaftsandnuts.jpg"
    },
    {
        id: 10,
        productName: "Spindles",
        img: "/linear-automation/spindles.jpg"
    }

]
function LinearAutomations() {
    return (
        <main className="linear-automation-container">
            <h1>Linear Automations</h1>
            <h2>Complete range: spindle, angular contact, tapered, thrust and slewing ring linear-automations for precision applications.</h2>
            <div className="linear-automation-products">
                {linearAutomationProducts.map((product) => (<div key={product.id}>
                    <img src={product.img} alt={product.productName} />
                    <h3>{product.productName}</h3>
                    <button>Read More</button>
                </div>))}
            </div>
        </main>
    );
} export default LinearAutomations;