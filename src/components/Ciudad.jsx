import React from "react";
import "./Ciudad.css";
import { FaTemperatureLow } from "react-icons/fa";
import { AiFillCloud } from "react-icons/ai";
import { BsWind } from "react-icons/bs";
import { FaSearchLocation } from "react-icons/fa";

export default function Ciudad({ city }) {
  console.log(city);
  return (
    <div className="ciudad">
      <div className="container">
        <h2 className="name">{city.name}</h2>
        <div className="info">
          <div className="unitInfo">
            <FaTemperatureLow style={{ color: "var(--dark-orange)" }} />{" "}
            {city.temp} ºC
          </div>
          <div className="unitInfo">
            <AiFillCloud style={{ color: "var(--dark-orange)" }} />{" "}
            {city.weather}
          </div>
          <div className="unitInfo">
            <BsWind style={{ color: "var(--dark-orange)" }} /> {city.wind} km/h
          </div>
        </div>

        <div className="unitInfo">
          <FaSearchLocation style={{ color: "var(--dark-orange)" }} />
          <a
            href={`https://www.google.com/maps/search/${city.name}/@${city.latitud},${city.longitud}z`}
            alt="Mapa"
            target={"_blanck"}
            className="linkInfo"
          >
            Search in Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
