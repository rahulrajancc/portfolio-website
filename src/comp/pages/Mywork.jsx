import '../styles/work.css';
// import ai-healthcare-nfc from "../../img/ai-healthcare-nfc.png"
import ai from "../../img/ai-healthcare-nfc.png";
import sign from "../../img/signLan.png";
import resume from "../../img/resume.png";
import objde from "../../img/objDe.png";
import soci from "../../img/so.png";
import iit from "../../img/image.png";
import flem from "../../img/image copy.png";
export default function Mywork() {
    const projects = [
           {
            id: 0,
            title: "AI-Assisted Healthcare Management System with NFC-Based Patient Data Storage",
            description: "Built a Smart NFC Health Card System that securely stores and manages patient medical records offline, with AI symptom checking and healthcare assistance features. Developed using React.js, React Native, Express.js, Python, Arduino, and MongoDB.",
            image: ai,
            technologies: ["React.js", "React Native", "Express.js", "Python", "Arduino", "MongoDB"],
            github: "https://github.com/rahulrajancc/ai-healthcare-nfc",
            live: "#",
            category: "Healthcare/AI"
        },
        {
            id: 1,
            title: "sign language translator",
            description: "Created a sign language translation tool that leverages Python for AI-based gesture recognition, React for a responsive interface, and Express for backend",
            image: sign,
            technologies: ["JavaScript", "Python", "React", "Express"],
            github: "https://github.com/rahulrajancc/CSE_MinProject",
            live: "#",
            category: "AI/ML"
        },
        {
            id: 2,
            title: "Social Media Platform",
            description: "A full-featured social media application designed to connect people in an interactive and engaging way. Includes user authentication, real-time messaging, and personalized content feeds.",
            image: soci,
            technologies: ["React", "Firebase", "Node.js", "Socket.io"],
            github: "https://github.com/rahulrajancc/social-media-app",
            live: "#",
            category: "Full-Stack"
        },
        {
            id: 3,
            title: "AI Robot Dog",
            description: "An advanced multifunctional robot dog with AI capabilities including face recognition, gesture control, voice commands, and object manipulation. Built with computer vision and robotics.",
            image: iit,
            technologies: ["Python", "OpenCV", "Arduino", "Machine Learning"],
            github: "https://github.com/rahulrajancc/ai-robot-dog",
            live: "#",
            category: "AI/Robotics"
        },
          {
            id: 4,
            title: "File info for linux",
            description: "Developed a command-line tool in C for extracting detailed information about files on Linux systems.",
            image: "",
            technologies: ["c", "bash"],
            github: "https://github.com/rahulrajancc/ai-robot-dog",
            live: "#",
            category: "File Info Tool"
        },
         {
            id: 5,
            title: "Qr code Attendance",
            description: "Designed a QR code-based attendance system using JavaScript for front-end and Python for backend processing.",
            image: "",
            technologies: ["JavaScript", "Python", "QR Code"],
            github: "https://github.com/rahulrajancc/qr-attendance-system",
            live: "#",
            category: "Web App"
        },
       
          {
            id: 6,
            title: "Pharmacy App",
            description: "A comprehensive pharmacy application that allows users to easily search for and view available medicines using a custom API. Features include medicine search, availability checking, and user-friendly interface.",
            image: "",
            technologies: ["React", "Node.js", "MongoDB", "Express"],
            github: "https://github.com/rahulrajancc/pharmacy-app",
            live: "#",
            category: "Web App"
        },
          {
            id: 7,
            title: "linux shell automation",
            description: "Developed a Bash script to automate the organization of files in an Arch Linux environment. The script sorts files from the Downloads directory into custom folders",
            image: "",
            technologies: [ "Bash", "ArchLinux"],
            github: "https://github.com/rahulrajancc/linux-shell-automation",
            live: "#",
            category: "Automation"
        },
            {
            id: 8,
            title: "Qresume Builder",
            description: "Qtrens is more than just a resume builder. Our platform combines modern design principles with industry insights to help you create resumes that impress recruiters and pass Applicant Tracking Systems (ATS).",
            image: resume,
            technologies: ["Node.js", "React", "Razorpay", "Firebase"],
            github: "https://github.com/rahulrajancc/qresume-builder",
            live: "#",
            category: "Web App"
        },
           {
            id: 9,
            title: "Object Detection and distance measurement",
            description: "Developed an object detection and distance measurement system using Python, OpenCV,Arduino,Ultrasonic sensors. The system detects objects in real-time and calculates the distance between the camera and detected objects.",
            image: objde,
            technologies: ["Python", "OpenCV", "Arduino", "Ultrasonic Sensors"],
            github: "https://github.com/rahulrajancc/object-detection-distance-measurement",
            live: "#",
            category: "IOT/AI"
        },
          {
            id: 10,
            title: "AI-Powered Water Monitoring and Prediction System",
            description: "Developed an AI/IoT-based Smart Water Monitoring System that tracks water level and quality (pH, TDS, turbidity) in real time, predicts low water conditions, and sends instant alerts with integrated live video monitoring for tank safety.",
            image: flem,
            technologies: ["Python", "Arduino", "IoT Sensors", "Machine Learning"],
            github: "https://github.com/rahulrajancc/ai-water-monitoring-prediction",
            live: "#",
            category: "IOT/AI"
        },
        {
    id: 11,
    title: "Autonomous Fire Fighting Robot using ESP32",
    description: "Developed an IoT-based autonomous fire-fighting robot that detects flames using a flame sensor, avoids obstacles using an ultrasonic sensor, and automatically activates a water pump through a relay to extinguish fire. The system includes real-time alerting using a buzzer and intelligent navigation for efficient fire response.",
    image: "",
    technologies: ["ESP32", "Arduino IDE", "Ultrasonic Sensor", "Flame Sensor", "Relay Module", "Embedded Systems"],
    github: "#",
    live: "#",
    category: "IOT/Embedded"
}
       
    ];

    return(
        <div id="work_con">
            <div className="work-container">
                <div className="work-header">
                    <h2>My Projects</h2>
                    <p className="work-subtitle">A showcase of my recent work and creative solutions</p>
                </div>

                <div className="projects-grid">
                    {projects.map(project => (
                        <div key={project.id} className="project-card">
                            <div className="project-image" style={{backgroundImage:`url(${project.image})`,backgroundRepeat:"round"}}>
                                <div className="project-category">{project.category}</div>
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <i className="fab fa-github"></i>
                                        </a>
                                       
                                    </div>
                                </div>
                            </div>

                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-tech">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>

                                <div className="project-actions">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                                        <i className="fab fa-github"></i> Code
                                    </a>
                                  
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="work-cta">
                    <h3>Interested in working together?</h3>
                    <p>I'm always open to discussing new opportunities and exciting projects.</p>
                    <a href="#contact" className="cta-button">Get In Touch</a>
                </div>
            </div>
        </div>
    );
};
