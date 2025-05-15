import React from "react";
import partyImage from "../assets/gavin.png";
import bgimage from "../assets/babysharck.jpg";

const Header = () => {
  return (
    <header
      className="py-4 my-0 bg-primary text-dark rounded"
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <h3 className="display-5 font-weight-bold text-shadow" style={{ fontFamily: "Pacifico, cursive" }}>🎉 Selamat Ulang Tahun 🎈</h3>
        <h4 className="display-6 font-weight-bold text-shadow" style={{ fontFamily: "Georgia, serif" }}>Gavin Alshaki</h4>
        <h5 style={{ fontFamily: " cursive" }}>Yang ke - 2 tahun</h5>
        
        <div className="d-flex justify-content-center">
          <img
            src={partyImage}
            alt="Undangan Acara"
            className="rounded shadow-lg img-fluid"
            width="200"
          />
        </div>
        <div className="d-flex justify-content-center">
          <i className="fas fa-gift fa-2x bounce" style={{ animation: "bounce 1s ease infinite" }}></i>
        </div>
       
      </div>
    </header>
  );
};

export default Header;

