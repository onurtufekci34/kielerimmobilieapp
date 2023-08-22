import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>
        Exercitation occaecat sint enim laboris velit cupidatat occaecat
        pariatur officia. Exercitation voluptate sint in commodo et pariatur.
        Sint esse ullamco ullamco ex enim duis commodo proident duis.
      </p>
        <p><NavLink to="/">Home Page</NavLink></p>
    </div>
  );
}
