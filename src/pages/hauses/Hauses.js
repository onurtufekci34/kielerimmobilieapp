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
  const style = {
    width: "100%",
    height: "5rem",
  };

  return (
    <div className="hauses">
      {hauses &&
        hauses.map((haus) => (
          <Link to={haus.id.toString()} key={haus.id}>
            <div className="hausShow">
              <div>
                <p>{haus.name}</p>
                <p>{haus.ort}</p>
              </div>
              <div>
                <img style={style} src={haus.image} alt={haus.name} />
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
