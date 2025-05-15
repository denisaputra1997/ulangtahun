import React from "react";
import "./App.css";
import Header from "./components/Header";
import Info from "./components/Info";
import RSVP from "./components/RSVP";
import { useEffect } from "react";
import { useState } from "react";

function App() {
 useEffect(() => {
    const audio = document.getElementById("bg-music");

    const playAudio = () => {
      if (audio) {
        audio.volume = 0.5;
        const playPromise = audio.play();

        if (playPromise !== undefined) {
          playPromise
            .catch(() => console.log("Autoplay dicegah, klik halaman untuk memulai musik."));
        }
      }
    };

    // Musik akan mulai setelah interaksi pertama (klik halaman)
    document.addEventListener("click", playAudio);
    return () => document.removeEventListener("click", playAudio);
  }, []);

  return (
    <div className="container">
      <audio id="bg-music" src="assets/happy.mp3" loop></audio>
      {/* Pemutar musik */}
      <Header />
      <Info />
      <RSVP />
      <footer className="footer">
        <p>💖 Kami tidak sabar merayakan bersama! 🎁</p>
      </footer>
    </div>
  );
}

export default App;
