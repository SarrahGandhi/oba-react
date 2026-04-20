import React, { useState } from "react";
import "./header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { bearingProducts } from "../../bearingdata";

function Header() {
    const [searchTerm, setSearchTerm] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showSearchDropdown, setShowSearchDropdown] = useState(false);
    const [forceDropdownClose, setForceDropdownClose] = useState(false);
    const navigate = useNavigate();

    const searchablePages = [
        { name: "Home", path: "/", keywords: ["home", "start", "main"] },
        { name: "Products", path: "/products", keywords: ["products", "items", "catalogue"] },
        { name: "Bearings", path: "/bearing", keywords: ["bearings", "ball", "roller", "product", "industrial"] },
        { name: "Linear Automation", path: "/linear-automation", keywords: ["linear", "automation", "guides", "product"] },
        { name: "Services", path: "/services", keywords: ["services", "support", "help"] },
        { name: "About Us", path: "/aboutus", keywords: ["about", "us", "company", "team"] },
        { name: "Enquiry", path: "/enquiry", keywords: ["enquiry", "contact", "support", "message"] },
        ...bearingProducts.map(p => ({
            name: p.productName,
            path: `/bearing/${p.id}`,
            keywords: [p.productName.toLowerCase(), "bearing", "product"]
        }))
    ];

    const filteredResults = searchTerm
        ? searchablePages.filter(page =>
            page.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            page.keywords.some(kw => kw.includes(searchTerm.toLowerCase()))
        )
        : [];

    const handleSearch = (e) => {
        e.preventDefault();
        if (filteredResults.length > 0) {
            handleResultClick(filteredResults[0].path);
        }
    };

    const handleResultClick = (path) => {
        navigate(path);
        setSearchTerm("");
        setShowSearchDropdown(false);
        setIsMenuOpen(false);
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
        setShowSearchDropdown(true);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleDropdownLinkClick = () => {
        setForceDropdownClose(true);
        setIsMenuOpen(false);
    };

    return (
        <header>
            <div className="nav">
                <NavLink to="/" className="logo-link">
                    <img src="/logo_oba.png" alt="OBA Logo" className="logo" />
                </NavLink>

                <div className={`hamburger ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
                    <li><NavLink to="/" onClick={toggleMenu}>Home</NavLink></li>
                    <li
                        className="oba-nav-dropdown"
                        onMouseLeave={() => setForceDropdownClose(false)}
                    >
                        <NavLink to="/products" onClick={handleDropdownLinkClick}>Products</NavLink>
                        <ul className={`oba-dropdown-menu ${forceDropdownClose ? 'hide-force' : ''}`}>
                            <li><NavLink to="/bearing" onClick={handleDropdownLinkClick}>Bearings</NavLink></li>
                            <li><NavLink to="/linear-automation" onClick={handleDropdownLinkClick}>Linear Automation</NavLink></li>
                            <li><NavLink to="/power-transmission" onClick={handleDropdownLinkClick}>Power Transmission</NavLink></li>
                            <li><NavLink to="accessories" onClick={handleDropdownLinkClick}>Accessories</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to="/services" onClick={toggleMenu}>Services</NavLink></li>
                    <li><NavLink to="/aboutus" onClick={toggleMenu}>About</NavLink></li>
                    <li><NavLink to="/enquiry" onClick={toggleMenu}>Enquiry</NavLink></li>
                    <li className="search-item">
                        <form className="search-form" onSubmit={handleSearch}>
                            <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            <input
                                type="text"
                                placeholder="Search Products"
                                value={searchTerm}
                                onChange={handleInputChange}
                                onFocus={() => setShowSearchDropdown(true)}
                                onBlur={() => setTimeout(() => setShowSearchDropdown(false), 200)}
                                className="search-input"
                            />
                        </form>
                        {showSearchDropdown && filteredResults.length > 0 && (
                            <ul className="search-results">
                                {filteredResults.map(result => (
                                    <li key={result.path} className="search-result-item" onClick={() => handleResultClick(result.path)}>
                                        <div className="search-result-name">{result.name}</div>
                                        <div className="search-result-path">Page</div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                </ul>
            </div>
        </header >
    );
}

export default Header;