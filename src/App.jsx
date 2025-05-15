import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Info from "./components/Info";
// import RSVP from "./components/RSVP";

function App() {
  const [musicStarted, setMusicStarted] = useState(false);

  useEffect(() => {
    const audio = document.getElementById("bg-music");
    const playAudio = () => {
      if (audio && !musicStarted) {
        audio.volume = 0.5;
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => console.log("Autoplay dicegah, klik halaman untuk memulai musik."));
        }
        setMusicStarted(true);
      }
    };

    document.addEventListener("click", playAudio);
    return () => document.removeEventListener("click", playAudio);
  }, [musicStarted]);

  return (
    <div className="container text-center mt-5">
      <audio id="bg-music" src="/public/baby-shark.mp3" loop preload="auto" hidden></audio>
      <Header />
      <Info />
      {/* <RSVP /> */}
      <footer className="mt-4">
        <p className="text-muted">💖 Kami tidak sabar merayakan bersama! 🎁</p>
      </footer>
    </div>
  );
}

export default App;
