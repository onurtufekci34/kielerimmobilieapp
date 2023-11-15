import React from "react";
import image from "../images/logo512.png";

export default function Home() {
  return (
    <div className="home">
      <h1>Homepage</h1>

      <div className="home-image">
        <img src={image} alt="logo" />
      </div>

      <p>
        <span className="team">Willkommen auf unserer Immobilien-Website!</span> <br/>Hier finden Sie umfassende
        Informationen zu verschiedenen Immobilienangeboten in der Region. Wir
        sind stolz darauf, Ihnen eine breite Palette von Wohnungen, Häusern und
        Gewerbeimmobilien präsentieren zu können. Unsere erfahrenen
        Immobilienmakler stehen Ihnen zur Verfügung, um Ihnen bei der Suche nach
        der perfekten Immobilie zu helfen. Egal, ob Sie nach einem gemütlichen
        Einfamilienhaus, einer modernen Stadtwohnung oder einer lukrativen
        Gewerbeimmobilie suchen, wir haben das Richtige für Sie. Unsere Website
        bietet Ihnen detaillierte Informationen zu jeder Immobilie,
        einschließlich Fotos, Grundrisse und Standortinformationen. Sie können
        auch direkt Kontakt mit uns aufnehmen, um eine Besichtigung zu
        vereinbaren oder weitere Informationen zu erhalten. Wir verstehen, dass
        der Kauf oder Verkauf einer Immobilie eine wichtige Entscheidung ist.
        Daher legen wir großen Wert auf Transparenz und exzellenten Service.
        Unser Team begleitet Sie gerne durch den gesamten Prozess und
        beantwortet Ihre Fragen. Durchstöbern Sie unsere aktuellen Angebote und
        finden Sie Ihr Traumobjekt! Wir freuen uns darauf, Sie bei Ihrem
        Immobilienabenteuer zu unterstützen.  <br/><span className="team">Ihr Kieler Immobilie Team</span>
      </p>
    </div>
  );
}
