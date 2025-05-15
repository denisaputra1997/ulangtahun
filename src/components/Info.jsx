import React from "react";

import bgimage from "../assets/babysharck.jpg";

const Info = () => {
  return (
    <section className="container mt-4 p-4 bg-light rounded shadow-lg" style={{ backgroundImage: `url(${bgimage})` , backgroundSize: "cover"}}>
      <h6 className="mb-3">Kami mengundang Bapak/ibu saudara/i untuk hadir di acara yang luar biasa ini</h6>
      <h2 className="mb-3">✨ Detail Acara</h2>
      <p className="fs-6"><strong>📅 Tanggal:</strong> [19 Mei 2025]</p>
      <p className="fs-6"><strong>📍 Lokasi:<a href="https://bit.ly/3GVp4Xa" target="_blank" rel="noopener noreferrer">  [Jl. Flamboyan Blok A16 No.24]</a></strong></p>
      <p className="fs-6"><strong>⏰ Waktu:</strong> [Jam Acara]</p>
    </section>
  );
};

export default Info;
