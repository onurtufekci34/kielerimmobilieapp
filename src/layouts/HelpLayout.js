import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Kieler Immobilie</h2>
      <p>
        Ullamco culpa aliqua proident laborum ipsum do veniam minim qui ipsum
        dolor. Commodo id aute laboris amet est incididunt. Ullamco Lorem
        ullamco cupidatat eu ut reprehenderit sit id ut irure in cupidatat.
      </p>
      <nav>
        <NavLink to="hfa">Häufige Fragen & Antworten</NavLink>
        <NavLink to="kontakt">Kontakt</NavLink>
      </nav>

      <Outlet/>
    </div>
  );
}
