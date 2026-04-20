import React, { useState } from 'react';
import './enquirypage.css';

const EnquiryPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the form submission, 
        // e.g., using an API or mail service like EmailJS
        console.log('Form submitted:', formData);
        alert('Thank you for your enquiry. We will get back to you shortly!');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const emailAddress = "sales@deltatechnologies.com"; // Placeholder email
    const whatsappNumber = "1234567890"; // Placeholder number

    return (
        <div className="enquiry-page-container">
            <div className="enquiry-header">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you. Please fill out the form below or reach out to us directly.</p>
            </div>

            <div className="enquiry-content">
                <div className="contact-info-section">
                    <h2>Get in Touch</h2>
                    <p className="contact-description">
                        Whether you have a question about our products, services, pricing, or anything else, our team is ready to answer all your questions.
                    </p>

                    <div className="direct-contact-cards">
                        <a href={`mailto:${emailAddress}`} className="contact-card email-card">
                            <div className="contact-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </div>
                            <div className="contact-text">
                                <h3>Email Us</h3>
                                <span>{emailAddress}</span>
                            </div>
                        </a>

                        <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="contact-card whatsapp-card">
                            <div className="contact-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                            </div>
                            <div className="contact-text">
                                <h3>WhatsApp</h3>
                                <span>Message us directly</span>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="contact-form-section">
                    <form className="enquiry-form" onSubmit={handleSubmit}>
                        <h3>Send a Message</h3>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input 
                                type="text" 
                                id="subject" 
                                name="subject" 
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="How can we help?"
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows="5" 
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Write your message here..."
                                required 
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EnquiryPage;
