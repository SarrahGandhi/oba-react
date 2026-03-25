import react, { useState } from "react";
import "./header.css"
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
                    <li>Home</li>
                    <li>Products</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Enquiry</li>

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