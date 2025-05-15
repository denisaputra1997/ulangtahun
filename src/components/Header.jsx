import React from "react";
import partyImage from "../assets/gavin.png";
import bgimage from "../assets/babysharck.jpg";
import { FaPlay } from "react-icons/fa";

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
        <h3
          className="display-5 font-weight-bold text-shadow"
          style={{ fontFamily: "Pacifico, cursive" }}
        >
          🎉 Selamat Ulang Tahun 🎈
        </h3>
        <h4
          className="display-6 font-weight-bold text-shadow"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Gavin Alshaki
        </h4>
        <h5 style={{ fontFamily: " cursive" }}>Yang ke - 2 tahun</h5>

        <div className="d-flex justify-content-center">
          <img
            src={partyImage}
            alt="Undangan Acara"
            className="rounded shadow-lg img-fluid"
            width="200"
          />
        </div>

        {/* <button className="btn btn-primary btn-lg ml-3 mt-3">
          <FaPlay className="mr-2" />
          Play
        </button> */}
      </div>
    </header>
  );
};

export default Header;
