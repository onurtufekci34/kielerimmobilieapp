import { NavLink, Outlet } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";


export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
      
        <nav>
          
          <h1>Kieler Immobilie</h1>
          <NavLink to="/">Homepage</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Hilfe</NavLink>
          <NavLink to={"hauses"}>Hauses</NavLink>
        </nav>
        <Breadcrumb/>
      </header>
      <main>
        <Outlet/>
      </main>
      
    </div>
  );
}
