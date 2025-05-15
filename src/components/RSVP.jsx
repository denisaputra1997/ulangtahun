import React from "react";
import { useState } from "react";

const RSVP = () => {

   const [name, setName] = useState("");
   const [error, setError] = useState(null);

  const sendWhatsAppMessage = () => {
    const phoneNumber = "087888883403"; // Ganti dengan nomor WhatsApp tujuan
    const message = `Halo! Saya ${name}, saya akan hadir di acara ulang tahun `;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    fetch(whatsappLink)
      .then((res) => {
        if (!res.ok) {
          throw Error("Tidak dapat mengirimkan pesan WhatsApp");
        }
      })
      .catch((err) => setError(err.message));
  };

  return (
    <section className="rsvp">
      <h2>🎊 Konfirmasi Kehadiran</h2>
      <p>Silakan isi form RSVP di bawah ini:</p>
      <input 
        type="text" 
        placeholder="Masukkan nama Anda" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <button onClick={sendWhatsAppMessage}>Konfirmasi Kehadiran</button>
    </section>
  );
};

export default RSVP;
