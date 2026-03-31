import react, { useState } from "react";
import "./header.css"
import { NavLink } from "react-router-dom";
function Header() {
    const [searchTerm, setSearchTerm] = useState("");
    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching for:", searchTerm);
    };
    return (
        <header>

            <div className="nav">
                {/* <h1>Delta Technologies</h1> */}
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/products">Products</NavLink></li>
                    <li><NavLink to="/services">Services</NavLink></li>
                    <li><NavLink to="/aboutus">About</NavLink></li>
                    <li><NavLink to="/enquiry">Enquiry</NavLink></li>

                </ul>
                <form className="search-form" onSubmit={handleSearch}>
                    <input type="text" pleaceholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="search-input" />
                    <button type="submit" className="search-button">Search</button>

                </form>


            </div>
        </header >
    );
}

export default Header;