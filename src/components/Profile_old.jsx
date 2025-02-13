import { Link } from "react-router-dom";
import { FaHome, FaPlusCircle, FaUser } from "react-icons/fa";
import "./HomeStyles.module.css";

function Profile() {
  return (
    <div className="Homescreen">
      <h1>Profile</h1>
  
      {/* Der Inhalt der Profile-Seite */}
      <p>Willkommen auf der Profil-Seite!</p>
  
      {/* Bottom Navigation mit 3 Tabs und Icons */}
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
