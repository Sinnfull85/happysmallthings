import { Link } from "react-router-dom";
import { FaHome, FaPlusCircle, FaUser } from "react-icons/fa";
import styles from './HomeStyles.module.css'; // Assuming the styles are in this file
import heroImg from '../assets/hero-img.png'; // Path to your profile image
import githubIcon from '../assets/github-light.svg'; // Path to your GitHub icon
import linkedinIcon from '../assets/linkedin-light.svg'; // Path to your LinkedIn icon
import CV from '../assets/cv.pdf'; // Path to your resume file

function Profile() {
  return (
    <div className="profile-container">
      {/* Hero Section */}
      <section id="hero" className={styles.container}>
        <div className={styles.heroContent}>
          <img
            src={heroImg}
            className={styles.hero}
            alt="Profile picture of Andreas Lerch"
          />
          <div className={styles.info}>
            <h1>Andreas<br />Lerch</h1>
            <h2>Frontend Developer<br /> with endurance</h2>
            <span>
              <a href="https://github.com/Sinnfull85" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="Github icon" />
              </a>
              <a href="https://linkedin.com/in/andlerch" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="Linkedin icon" />
              </a>
            </span>
            <p className={styles.description}>
              Thanks to my quick understanding and my self-taught learning, my skills are constantly improving. Errors in the system are not a hurdle for me, but a challenge.
            </p>
            <a href={CV} download>
              <button className="hover">Resume</button>
            </a>
          </div>
        </div>
      </section>

      {/* Bottom Navigation with 3 Tabs and Icons */}
      <div className="bottomNav">
        <Link to="/home" className="navItem">
          <FaHome size={24} />
          <span>Home</span>
        </Link>
        <Link to="/add" className="navItem">
          <FaPlusCircle size={24} />
          <span>Add</span>
        </Link>
        <Link to="/profile" className="navItem">
          <FaUser size={24} />
          <span>Profile</span>
        </Link>
      </div>
    </div>
  );
}

export default Profile;

