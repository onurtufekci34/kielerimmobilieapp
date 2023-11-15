import { useState } from "react";
import { Navigate, useSearchParams } from "react-router-dom";

export default function About() {
  const [user, setUser] = useState("onur");

  const [searchParams] = useSearchParams();

  const name = searchParams.get('name')

  if (!user) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="about">
      <h1>About</h1>
      {name && <p>Guten Tag {name}</p>}
      <p>
        Veniam duis veniam consequat incididunt. Mollit velit commodo pariatur
        commodo veniam cillum adipisicing qui dolor est officia. Proident id
        veniam esse esse irure fugiat sint sunt eu ullamco exercitation.
        Adipisicing elit culpa aliquip non pariatur magna magna nisi aliquip ad
        ut incididunt deserunt. Laboris duis sit in voluptate ullamco sit. Amet
        in nisi voluptate deserunt mollit est anim dolore magna deserunt. Elit
        officia elit aliqua minim magna nostrud.
      </p>
      <p>
        Do ea proident consectetur elit elit amet veniam sint. Esse aliquip
        laboris aliquip pariatur ex officia enim. In veniam nostrud magna
        consectetur non aliquip. Deserunt ullamco cillum qui tempor aute nostrud
        aute velit do cillum ea. Est ut commodo in ex ut cupidatat labore enim
        tempor consequat in velit deserunt.
      </p>
      <button onClick={() => setUser(null)}>Log Out</button>
    </div>
  );
}
