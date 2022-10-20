import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Header.css";

export function Header() {
  const navigate = useNavigate();

  return (
    <div className="Header">
      <h1 className="Header-title" onClick={() => navigate("/")}>Calendário</h1>
      <nav className="Header-navbar">
        <button
          className="Header-navbar_button"
          onClick={() => navigate("/path=areas")}
        >
          Áreas
        </button>
        <button className="Header-navbar_button" onClick={() => navigate("/")}>
          Tarefas
        </button>
      </nav>
    </div>
  );
}
