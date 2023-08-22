import { Outlet } from "react-router-dom";

export default function HausLayout() {
  return (
    <div className="konut-layout">
      <h2>Houses</h2>
      <p>
        Incididunt deserunt magna tempor velit fugiat ullamco mollit proident
        adipisicing reprehenderit sit. Mollit labore Lorem mollit voluptate
        culpa irure officia Lorem aliqua. Lorem anim aliquip velit nostrud id
        esse cupidatat proident cillum ad ullamco exercitation enim. Laboris
        ipsum anim fugiat sunt amet.
      </p>
      <Outlet/>
    </div>
  );
}
