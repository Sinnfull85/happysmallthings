import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaPlusCircle, FaUser } from "react-icons/fa";
import "./HomeStyles.module.css";

function Add() {
  const [text, setText] = useState("");

  const saveToLocalStorage = () => {
    if (text.trim() !== "") {
      const currentDate = new Date();
      const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;

      const savedTexts = JSON.parse(localStorage.getItem("savedTexts")) || [];
      savedTexts.push({ text, date: formattedDate });
      localStorage.setItem("savedTexts", JSON.stringify(savedTexts));
      setText("");
      alert("Text gespeichert!");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Was hat Dich Heute glücklich gemacht?</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 w-full mb-2"
        placeholder="Gib deinen Text ein..."
      />
      <button
        onClick={saveToLocalStorage}
        className="bg-blue-500 text-white p-2 rounded mr-2"
      >
        Speichern
      </button>

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

export default Add;



