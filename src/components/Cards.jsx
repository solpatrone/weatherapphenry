import React from "react";
import "./Cards.css";

import Card from "./Card.jsx";

export default function Cards({ cities, onClose }) {
  return (
    <div className="cards">
      {cities.length > 0 ? (
        cities.map((c) => (
          <Card
            key={c.id}
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            id={c.id}
            onClose={() => onClose(c.id)}
          />
        ))
      ) : (
        <div className="noCards">
          Please search a city to access its weather information.
        </div>
      )}
    </div>
  );
}
