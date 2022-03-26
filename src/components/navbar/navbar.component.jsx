import { Link } from "react-router-dom";
import "./navbar.style.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Ninja</h1>
        </Link>
        <Link to="/create">Create Recepie</Link>
      </nav>
    </div>
  );
}
