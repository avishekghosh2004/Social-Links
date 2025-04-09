import React, { useEffect, useState } from "react";
import LinkButton from "./components/LinkButton";
import "./index.css";
import profileImg from "/profile.jpg";

const subtitles = ["A Developer", "A Coder", "A Programmer"];

function App() {
  const [currentText, setCurrentText] = useState("");
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const currentSubtitle = subtitles[subtitleIndex];

    const timeout = setTimeout(() => {
      setCurrentText(
        isDeleting
          ? currentSubtitle.substring(0, charIndex - 1)
          : currentSubtitle.substring(0, charIndex + 1)
      );
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));

      if (!isDeleting && charIndex === currentSubtitle.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setSubtitleIndex((prev) => (prev + 1) % subtitles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, subtitleIndex]);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white px-4"
      style={{
        backgroundImage:
          "linear-gradient(-45deg, #0f0c29, #302b63, #24243e, #000)",
        backgroundSize: "400% 400%",
        animation: "gradientBG 15s ease infinite",
      }}
    >
      <img
        src={profileImg}
        alt="profile"
        className="w-24 h-24 rounded-full border-4 border-white mb-4 animate-bounceIn"
      />
      <h1 className="text-xl font-bold text-white drop-shadow-lg animate-slideIn">
        Avishek Ghosh
      </h1>
      <p className="mb-6 text-sm text-white/80 h-5">{currentText}</p>

      <div className="flex flex-col items-center w-full gap-4">
        <LinkButton
          platform="x"
          label="X"
          url="https://x.com/Avishek_ghosh01"
          delay={0.1}
        />
        <LinkButton
          platform="github"
          label="Github"
          url="https://github.com/avishekghosh2004"
          delay={0.2}
        />
        <LinkButton
          platform="linkedin"
          label="LinkedIn"
          url="https://www.linkedin.com/in/avishek-ghosh19/"
          delay={0.3}
        />
        <LinkButton
          platform="instagram"
          label="Instagram"
          url="https://www.instagram.com/classy_avi121/"
          delay={0.4}
        />
        <LinkButton
          platform="discord"
          label="Discord"
          url="https://discord.com/channels/@me"
          delay={0.5}
        />
      </div>
    </div>
  );
}

export default App;
