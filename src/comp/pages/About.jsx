import '../styles/about.css';
import Hpic from '../../img/pic.jpg';

export default function About() {
    return(
        <div id="about_con">
            <div className="about-container">
                <div className="about-header">
                    <h2>About Me</h2>
                    <p className="about-subtitle">Get to know more about my journey and expertise</p>
                </div>

                <div className="about-content">
                    <div className="about-image-section">
                        <div className="image-container">
                            <img src={Hpic} alt='Rahul Rajan - Software Developer'/>
                            <div className="image-overlay">
                                <div className="stats">
                                    <div className="stat">
                                        <span className="stat-number">1+</span>
                                        <span className="stat-label">Years Experience</span>
                                    </div>
                                    <div className="stat">
                                        <span className="stat-number">10+</span>
                                        <span className="stat-label">Projects Completed</span>
                                    </div>
                                    <div className="stat">
                                        <span className="stat-number">5+</span>
                                        <span className="stat-label">Technologies</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="/resume.pdf" className="download-cv" download>
                            <i className="fas fa-download"></i> Download CV
                        </a>
                    </div>

                    <div className="about-text-section">
                        <h3>Hello! I'm Rahul Rajan</h3>
                        <div className="role-badge">Software Developer</div>
                        <p className="about-description">
                            I'm a passionate software developer with a strong foundation in full-stack development.
                            My journey in technology began with a curiosity about how things work, and it has evolved
                            into a career dedicated to creating innovative solutions that make a difference.
                        </p>

                        <div className="personal-info">
                            <div className="info-item">
                                <i className="fas fa-user-graduate"></i>
                                <span>BTech in Computer Science & Engineering</span>
                            </div>
                            <div className="info-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>India</span>
                            </div>
                            <div className="info-item">
                                <i className="fas fa-envelope"></i>
                                <span>rahulrajancc@gmail.com</span>
                            </div>
                            <div className="info-item">
                                <i className="fas fa-code"></i>
                                <span>Full-Stack Developer</span>
                            </div>
                        </div>

                        <div className="skills-highlights">
                            <h4>Core Competencies</h4>
                            <div className="skills-grid">
                                <span className="skill-tag">React</span>
                                <span className="skill-tag">Node.js</span>
                                <span className="skill-tag">MongoDB</span>
                                <span className="skill-tag">Express.js</span>
                                <span className="skill-tag">JavaScript</span>
                                <span className="skill-tag">Python</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="experience-timeline">
                    <h3>My Journey</h3>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <h4>2023 - 2026</h4>
                                <h5>Founded Startup called Qtrens </h5>
                                <p>Building  projects for the company as CTO and continuously learning new technologies. Developed multiple web applications and expanded knowledge in modern development practices.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <h4>2022 - 2026</h4>
                                <h5>BTech Computer Science</h5>
                                <p>Completed Bachelor's degree with focus on software engineering principles, algorithms, and system design. Active in coding communities and hackathons.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <h4>2019 - 2022</h4>
                                <h5>Programming Journey Begins</h5>
                                <p>Started learning programming with C,C++, web development basics and removing windows installing Linux. Built first projects and discovered passion for creating digital solutions.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="interests-section">
                    <h3>Beyond Code</h3>
                    <div className="interests-grid">
                        <div className="interest-item">
                            <i className="fas fa-robot"></i>
                            <h4>AI & Robotics</h4>
                            <p>Exploring artificial intelligence and building smart robotic systems.</p>
                        </div>
                        <div className="interest-item">
                            <i className="fas fa-gamepad"></i>
                            <h4>Gaming</h4>
                            <p>Enjoy strategic games and game development concepts.</p>
                        </div>
                        <div className="interest-item">
                            <i className="fas fa-book"></i>
                            <h4>Continuous Learning</h4>
                            <p>Always learning new technologies and staying updated with industry trends.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
