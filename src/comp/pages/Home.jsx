import '../styles/home.css';
import hpic from '../../img/pic.jpg';
import op from '../../img/op.png';
import { useState, useEffect } from 'react';

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const togglePop = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    const downloadCV = () => {
        // Create a link to download CV - you'll need to add your CV file to the public folder
        const link = document.createElement('a');
        link.href = '/Rahul_Rajan_CV.pdf'; // Update this path to your CV file
        link.download = 'Rahul_Rajan_CV.pdf';
        link.click();
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);

            // Update active section based on scroll position
            const sections = ['home', 'work', 'about', 'tools', 'contact'];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <div id="Home_con">
           <nav id="nav_bar" className={isScrolled ? 'scrolled' : ''}>
                <div className="nav-brand">
                    <div className="nav-logo">
                        <img src={hpic} alt="Rahul Rajan" className="nav-avatar" />
                    </div>
                    <h1 id='head_home_bar'>Rahul Rajan</h1>
                </div>

                <ul id='nav_links'>
                    <li><a href="#home" onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
                    <li><a href="#work" onClick={() => scrollToSection('work')} className={activeSection === 'work' ? 'active' : ''}>Work</a></li>
                    <li><a href="#about" onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>About</a></li>
                    <li><a href="#tools" onClick={() => scrollToSection('tools')} className={activeSection === 'tools' ? 'active' : ''}>Tools</a></li>
                    <li><a href="#contact" onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
                </ul>

                <div className="nav-actions">
                    <button className="cv-btn" onClick={downloadCV}>
                        <i className="fas fa-download"></i>
                        <span>Resume</span>
                    </button>
                    <div id='nav_options'>
                        <button className="menu-toggle" onClick={togglePop} aria-label="Toggle menu">
                            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
                        </button>
                    </div>
                </div>

                <div id='options' className={isMenuOpen ? 'open' : ''}>
                    <div className="mobile-menu-header">
                        <div className="mobile-nav-brand">
                            <img src={hpic} alt="Rahul Rajan" className="mobile-nav-avatar" />
                            <h2>Rahul Rajan</h2>
                        </div>
                        <button className="close-menu" onClick={togglePop} aria-label="Close menu">
                            <i className="fas fa-times"></i>
                        </button>
                    </div>

                    <ul id='nav_option'>
                        <li><a href="#home" onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>
                            <i className="fas fa-home"></i> Home
                        </a></li>
                        <li><a href="#work" onClick={() => scrollToSection('work')} className={activeSection === 'work' ? 'active' : ''}>
                            <i className="fas fa-briefcase"></i> My Work
                        </a></li>
                        <li><a href="#about" onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>
                            <i className="fas fa-user"></i> About Me
                        </a></li>
                        <li><a href="#tools" onClick={() => scrollToSection('tools')} className={activeSection === 'tools' ? 'active' : ''}>
                            <i className="fas fa-tools"></i> My Tools
                        </a></li>
                        <li><a href="#contact" onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>
                            <i className="fas fa-envelope"></i> Contact Me
                        </a></li>
                    </ul>

                    <div className="mobile-menu-footer">
                        <button className="cv-btn-mobile" onClick={downloadCV}>
                            <i className="fas fa-download"></i>
                            Download Resume
                        </button>
                    </div>
                </div>
           </nav>


           <div id="home_content">
                <div className='home_items'>
                    <h1 id='header_main'>Hi, I'm Rahul Rajan</h1>
                    <h2>A Passionate Software/Web Developer</h2>
                    <p>Creating innovative solutions with modern technologies. Take a look at my projects and get in touch!</p>
                    <div className="cta-buttons">
                        <button onClick={() => scrollToSection('work')} className="btn-primary">View My Work</button>
                        <button onClick={() => scrollToSection('contact')} className="btn-secondary">Get In Touch</button>
                    </div>
                </div>
                <div className='home_items'>
                    <img id='himg' src={hpic} alt='Rahul Rajan'/>
                </div>
            </div>

            <div className="scroll-indicator">
                <span>Scroll Down</span>
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </div>

        </div>
    )
    
};
