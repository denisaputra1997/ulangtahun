import React from "react";
import partyImage from "../assets/gavin.png";
import bgimage from "../assets/bg.png";

const Header = () => {
  return (
    <header
      className="py-4 bg-primary text-dark rounded"
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <h1 className="display-4 font-weight-bold text-shadow" style={{ fontFamily: "Pacifico, cursive" }}>🎉 Undangan Spesial 🎈</h1>
        <p className="lead font-weight-bold">Kami mengundang Anda untuk acara yang luar biasa!</p>
        <div className="d-flex justify-content-center">
          <img
            src={partyImage}
            alt="Undangan Acara"
            className="rounded shadow-lg img-fluid"
            width="200"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

