import '../styles/footer.css';
import { useState } from 'react';

export default function Footer() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
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
        // Here you would typically send the form data to a server
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return(
        <footer id="footer_con">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Rahul Rajan</h3>
                    <p>Software Developer passionate about creating innovative solutions and user-friendly applications.</p>
                    <div className="social-links">
                        <a href="https://github.com/rahulrajancc" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/rahulrajancc/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="mailto:rahulrajancc@gmail.com" aria-label="Email">
                            <i className="fas fa-envelope"></i>
                        </a>
                    </div>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#work">My Work</a></li>
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#tools">My Tools</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact Info</h4>
                    <div className="contact-info">
                        <p><i className="fas fa-envelope"></i> rahulrajancc@gmail.com</p>
                        <p><i className="fas fa-map-marker-alt"></i> India</p>
                        <p><i className="fas fa-clock"></i> Available for opportunities</p>
                    </div>
                </div>

                <div className="footer-section">
                    <h4>Send Message</h4>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="3"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn">
                            <i className="fas fa-paper-plane"></i> Send Message
                        </button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <p>&copy; 2026 Rahul Rajan. All rights reserved.</p>
                    <p>Built with React & ❤️</p>
                </div>
            </div>
        </footer>
    );
};
