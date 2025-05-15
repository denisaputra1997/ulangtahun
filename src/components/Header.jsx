import React from "react";
import childImage from "../assets/gavin.png"; // Gambar anak

const Header = () => {
  return (
    <header className="header">
      <h3 className="title">🎂 Selamat Ulang Tahun🎈
      <p>GAVIN</p>
      </h3>
      <p>Yuk, rayakan hari spesial bersama kami!</p>
      <div className="photo-container">
        <img src={childImage} alt="Foto Anak" className="child-photo" style={{ width: "120px" }} />
        <span className="emoji1">🎈</span>
        <span className="emoji2">🎁</span>
        <span className="emoji3">🎉</span>
      </div>
    </header>
  );
};

export default Header;
