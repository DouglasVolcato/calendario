import "../styles/Header.css";

export function Header() {
  return (
    <div className="Header">
      <h1 className="Header-title">Calendário</h1>
      <nav className="Header-navbar">
        <button className="Header-navbar_button">Áreas</button>
        <button className="Header-navbar_button">Tarefas</button>
      </nav>
    </div>
  );
}
