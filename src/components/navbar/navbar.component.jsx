import { Link } from "react-router-dom";
import SearchBar from "../search-bar/search-bar.component";
import "./navbar.style.css";

import { useTheme } from "../../hooks/useTheme";

export default function Navbar() {
  const { color } = useTheme();
  return (
    <div
      className="navbar"
      style={{ 
        background: color,
      }}
    >
      <nav >
        <Link to="/" className="brand">
          <h1>Cooking Ninja</h1>
        </Link>
        <SearchBar />
        <Link to="/create">Create Recepie</Link>
      </nav>
    </div>
  );
}
