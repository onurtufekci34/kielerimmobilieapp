import { useLoaderData } from "react-router-dom";

export const hausDetailedLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch("http://localhost:4000/hauses/" + id);

  if(!res.ok){
    throw Error ('Haus Data kommt nicht')
  }


  return res.json();
};

export default function HausDetailed() {
  const haus = useLoaderData();

  return (
    <div className="haus-detay">
      <h2>{haus.name}</h2>
      <p>Preis:{haus.preis}€</p>
      <p>Ort:{haus.ort}</p>
      <p>{haus.situation}</p>
    </div>
  );
}
