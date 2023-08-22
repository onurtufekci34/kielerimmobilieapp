import React from "react";
import { Form, redirect, useActionData } from "react-router-dom";

export const kontaktAction = async ({ request }) => {
  const data = await request.formData();

  const veri = {
    email: data.get("email"),
    mitteilung: data.get("message"),
  };

  if (veri.mitteilung.length < 10) {
    return { error: "Ihre Mitteilung muss mindestens 10 Bushtaben sein" };
  }

  return redirect("/");
};

export default function Kontakt() {
  const data = useActionData();

  return (
    <div className="kontakt">
      <h3>Kontakt</h3>
      <Form method="post" action="/help/kontakt">
        <label>
          <span>Email Adresse</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Mitteilung</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Senden</button>
        {data && data.error && <p>{data.error}</p>}
      </Form>
    </div>
  );
}
