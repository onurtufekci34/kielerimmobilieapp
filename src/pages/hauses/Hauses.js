import { Link, useLoaderData } from "react-router-dom";

export const hausesLoader = async () => {
  const res = await fetch("http://localhost:4000/hauses");

  if (!res.ok) {
    throw Error("Hauses Data kommt nicht");
  }

  return res.json();
};

export default function Hauses() {
  const hauses = useLoaderData();

  return (
    <div className="hauses">
      {hauses &&
        hauses.map((haus) => (
          <Link to={haus.id.toString()} key={haus.id}>
            <p>{haus.name}</p>
            <p>{haus.ort}</p>
          </Link>
        ))}
    </div>
  );
}
