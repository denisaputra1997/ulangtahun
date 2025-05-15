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
        <h3 className="display-5 font-weight-bold text-shadow" style={{ fontFamily: "Pacifico, cursive" }}>🎉 Selamat Ulang Tahun 🎈</h3>
        <h4 className="display-6 font-weight-bold text-shadow" style={{ fontFamily: "Pacifico, cursive" }}>Gavin </h4>
        <h5 style={{ fontFamily: " cursive" }}>Yang ke - 2 tahun</h5>
        
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

