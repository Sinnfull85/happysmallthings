import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* Die Überschrift und der Button erscheinen nur auf "/" */}
      <h1 className="text-2xl font-bold text-center mb-4">Happy Small Things</h1>

      <Link to="/home">
        <button className="open-button bg-blue-500 text-white px-4 py-2 rounded">
          Öffnen
        </button>
      </Link>
    </div>
  );
}

export default App;
