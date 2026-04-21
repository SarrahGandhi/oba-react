import react from "react";
import "./landing-page.css"
import { Link } from "react-router-dom";
function LandingPage() {
    return (
        <div className="Landing-container">
            <div className="landing-text">
                <h1>Overseas Bearing Agency</h1>
                <h2>Precision That Powers Performance</h2>
                <p>Overseas Bearing Agency delivers a comprehensive range of precision components, including spindle bearings, linear guideways, and transmission systems. Our products are selected to ensure high accuracy, reduced friction, and long operational life in critical applications.</p>
                <div className="landing-button">
                    <Link to="/products"><button>Explore Products</button></Link>
                    <Link to="/enquiry"><button>Contact Us</button></Link>
                </div>
            </div>
        </div>
    );
}
export default LandingPage;
