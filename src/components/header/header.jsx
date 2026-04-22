import React, { useState, useEffect, useRef, useMemo } from "react";
import "./header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { searchIndex } from "../../searchIndex";
import Fuse from "fuse.js";

const fuse = new Fuse(searchIndex, {
  keys: [
    { name: "title", weight: 3 },
    { name: "content", weight: 1 },
  ],
  threshold: 0.0, // Strict exact matches
  ignoreLocation: true,
  minMatchCharLength: 2,
});

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileSearchActive, setIsMobileSearchActive] = useState(false);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const mobileSearchInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isMobileSearchActive && mobileSearchInputRef.current) {
      mobileSearchInputRef.current.focus();
    }
  }, [isMobileSearchActive]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const getSnippet = (content, term) => {
    if (!term) return "";
    const lowerContent = content.toLowerCase();
    const lowerTerm = term.toLowerCase();
    const index = lowerContent.indexOf(lowerTerm);
    if (index === -1) return content.slice(0, 100) + "...";

    const start = Math.max(0, index - 50);
    const end = Math.min(content.length, index + 50);
    let snippet = content.slice(start, end);

    if (start > 0) snippet = "..." + snippet;
    if (end < content.length) snippet = snippet + "...";

    return snippet;
  };

  const highlightText = (text, highlight) => {
    if (!highlight.trim() || highlight.length < 1) return text;
    // Escape the highlight term for regex
    const escapedHighlight = highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    // Regex to find exactly the search term
    const regex = new RegExp(`(${escapedHighlight})`, "gi");
    const parts = text.split(regex);

    return (
      <span>
        {parts.map((part, i) => {
          // Check if this part is exactly the match
          const isMatch = part.toLowerCase() === highlight.toLowerCase();
          return isMatch ? (
            <span key={i} className="search-highlight">
              {part}
            </span>
          ) : (
            part
          );
        })}
      </span>
    );
  };

  const filteredResults = useMemo(() => {
    if (!searchTerm || searchTerm.length < 2) return [];
    return fuse.search(searchTerm).map((result) => ({
      ...result.item,
      snippet: getSnippet(result.item.content, searchTerm),
    }));
  }, [searchTerm]);

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
    setIsMobileSearchActive(false);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setShowSearchDropdown(true);
  };

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsProductsDropdownOpen(false);
    }
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownLinkClick = () => {
    setIsProductsDropdownOpen(false);
    setIsMenuOpen(false);
  };

  const handleProductsLinkClick = (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      setIsProductsDropdownOpen((prev) => !prev);
    } else {
      setIsProductsDropdownOpen(false);
      setIsMenuOpen(false);
    }
  };

  const toggleProductsDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.innerWidth <= 768) {
      setIsProductsDropdownOpen((prev) => !prev);
    }
  };

  const activateMobileSearch = () => {
    setIsMenuOpen(false);
    setIsMobileSearchActive(true);
  };

  return (
    <header>
      {isMobileSearchActive ? (
        <div className="mobile-search-overlay">
          <div className="mobile-search-container">
            <button
              className="mobile-search-back"
              onClick={() => setIsMobileSearchActive(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <form className="mobile-search-form" onSubmit={handleSearch}>
              <input
                ref={mobileSearchInputRef}
                type="text"
                placeholder="Search site content..."
                value={searchTerm}
                onChange={handleInputChange}
                className="mobile-search-input"
              />
              {searchTerm && (
                <button
                  className="mobile-search-clear"
                  onClick={() => setSearchTerm("")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              )}
            </form>
          </div>
          {showSearchDropdown && filteredResults.length > 0 && (
            <ul className="search-results-fullscreen">
              {filteredResults.map((result) => (
                <li
                  key={result.path}
                  className="search-result-item"
                  onClick={() => handleResultClick(result.path)}
                >
                  <div className="search-result-info">
                    <div className="search-result-name">
                      {highlightText(result.title, searchTerm)}
                    </div>
                    <div className="search-result-snippet">
                      {highlightText(result.snippet, searchTerm)}
                    </div>
                  </div>
                  <div className="search-result-path">Page</div>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <div className="nav">
          <NavLink to="/" className="logo-link">
            <img src="/logo_oba.png" alt="OBA Logo" className="logo" />
          </NavLink>

          <div
            className={`hamburger ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <li className="search-item-mobile" onClick={activateMobileSearch}>
              <form
                className="search-form-mobile"
                onSubmit={(e) => e.preventDefault()}
              >
                <svg
                  className="search-icon-mobile"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input
                  type="text"
                  placeholder="Search site content..."
                  readOnly
                  className="search-input-mobile"
                />
              </form>
            </li>
            <li>
              <NavLink to="/" onClick={toggleMenu}>
                Home
              </NavLink>
            </li>
            <li
              className={`oba-nav-dropdown ${isProductsDropdownOpen ? "mobile-open" : ""}`}
            >
              <div className="products-trigger">
                <NavLink to="/products" onClick={handleProductsLinkClick}>
                  Products
                </NavLink>
                <button
                  type="button"
                  className={`products-arrow-btn ${isProductsDropdownOpen ? "open" : ""}`}
                  onClick={toggleProductsDropdown}
                  aria-label="Toggle products submenu"
                  aria-expanded={isProductsDropdownOpen}
                  aria-controls="products-submenu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>
              <ul
                id="products-submenu"
                className={`oba-dropdown-menu ${isProductsDropdownOpen ? "mobile-open" : ""}`}
              >
                <li>
                  <NavLink to="/bearing" onClick={handleDropdownLinkClick}>
                    Bearings
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/linear-automation"
                    onClick={handleDropdownLinkClick}
                  >
                    Linear Automation
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/power-transmission"
                    onClick={handleDropdownLinkClick}
                  >
                    Power Transmission
                  </NavLink>
                </li>
                <li>
                  <NavLink to="accessories" onClick={handleDropdownLinkClick}>
                    Accessories
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <NavLink to="/services" onClick={toggleMenu}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/aboutus" onClick={toggleMenu}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/enquiry" onClick={toggleMenu}>
                Enquiry
              </NavLink>
            </li>
            <li className="search-item">
              <form className="search-form" onSubmit={handleSearch}>
                <svg
                  className="search-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input
                  type="text"
                  placeholder="Search Products"
                  value={searchTerm}
                  onChange={handleInputChange}
                  onFocus={() => setShowSearchDropdown(true)}
                  onBlur={() =>
                    setTimeout(() => setShowSearchDropdown(false), 200)
                  }
                  className="search-input"
                />
              </form>
              {showSearchDropdown && filteredResults.length > 0 && (
                <ul className="search-results">
                  {filteredResults.map((result) => (
                    <li
                      key={result.path}
                      className="search-result-item"
                      onClick={() => handleResultClick(result.path)}
                    >
                      <div className="search-result-info">
                        <div className="search-result-name">
                          {highlightText(result.title, searchTerm)}
                        </div>
                        <div className="search-result-snippet">
                          {highlightText(result.snippet, searchTerm)}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
