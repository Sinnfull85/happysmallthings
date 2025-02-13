import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaPlusCircle, FaUser } from "react-icons/fa";
import "./HomeStyles.module.css";

function Home() {
  const [savedTexts, setSavedTexts] = useState([]);

  useEffect(() => {
    const storedTexts = JSON.parse(localStorage.getItem("savedTexts")) || [];
    setSavedTexts(storedTexts);
  }, []);

  const deleteText = (index) => {
    const updatedTexts = savedTexts.filter((_, i) => i !== index);
    localStorage.setItem("savedTexts", JSON.stringify(updatedTexts));
    setSavedTexts(updatedTexts);
  };

  return (
    <div className="p-4">
      {savedTexts.length > 0 ? (
        <div className="p-2 border mb-2">
          {savedTexts.map((entry, index) => (
            <div key={index} className="flex justify-between items-center border-b p-2">
              <div>
                <p>{entry.text}</p>
                <small>{entry.date}</small>
              </div>
              <button
                onClick={() => deleteText(index)}
                className="bg-red-500 text-white p-2 rounded"
              >
                Löschen
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>Kein Text gespeichert.</p>
      )}

      {/* Bottom Navigation */}
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

export default Home;

