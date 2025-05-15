import React, { useState } from "react";

const RSVP = () => {
  const [name, setName] = useState("");

  const sendWhatsAppMessage = () => {
    const phoneNumber = "6281234567890";
    const message = `Halo! Saya ${name}, saya akan hadir di acara 🎉`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <section className="container mt-4 p-4 bg-light rounded shadow-lg">
      <h2 className="mb-3">🎊 Konfirmasi Kehadiran</h2>
      <input 
        type="text" 
        className="form-control mb-3" 
        placeholder="Masukkan nama Anda" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <button className="btn btn-success w-100" onClick={sendWhatsAppMessage}>Konfirmasi Kehadiran</button>
    </section>
  );
};

export default RSVP;
