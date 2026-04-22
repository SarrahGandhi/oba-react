import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductStickyBar.css';

const ProductStickyBar = () => {
    const navigate = useNavigate();

    return (
        <div className="product-sticky-bar">
            <div className="sticky-bar-container">
                <button
                    className="sticky-btn secondary"
                    onClick={() => navigate('/enquiry')}
                >
                    Quick Enquiry
                </button>
                <button
                    className="sticky-btn primary"
                    onClick={() => navigate('/enquiry')}
                >
                    Request Quote
                </button>
            </div>
        </div>
    );
};

export default ProductStickyBar;
