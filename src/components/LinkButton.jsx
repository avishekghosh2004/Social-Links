import React from "react";
import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa6";

const icons = {
  x: <FaXTwitter className="text-xl" />,
  github: <FaGithub className="text-xl" />,
  linkedin: <FaLinkedin className="text-xl" />,
  instagram: <FaInstagram className="text-xl" />,
  discord: <FaDiscord className="text-xl" />,
};

function LinkButton({ platform, label, url, delay = 0 }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        animationDelay: `${delay}s`,
      }}
      className="flex items-center justify-between w-full max-w-md px-5 py-3
                 bg-white/5 hover:bg-black/40
                 text-white rounded-xl backdrop-blur-md
                 shadow-md transition-all duration-300 ease-in-out
                 hover:scale-[1.03] hover:shadow-[0_0_15px_#ffffff80]
                 animate-fadeIn opacity-0"
    >
      <div className="flex items-center gap-3">
        {icons[platform]}
        <span className="font-medium">{label}</span>
      </div>
      <span className="text-white/40 text-sm">↗</span>
    </a>
  );
}

export default LinkButton;
