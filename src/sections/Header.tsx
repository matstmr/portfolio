"use client";
import { useEffect, useState } from "react";

export const Header = () => {
  const [activeLink, setActiveLink] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;

      const projectsOffset =
        document.getElementById("project")?.offsetTop || 8000;
      const aboutOffset = document.getElementById("about")?.offsetTop || 31000;

      // Vérifiez la position de défilement et mettez à jour `activeLink`
      if (scrollPosition + windowHeight >= fullHeight - 50) {
        setActiveLink("contact");
      } else if (scrollPosition >= aboutOffset) {
        setActiveLink("about");
      } else if (scrollPosition >= projectsOffset) {
        setActiveLink("projects");
      } else {
        setActiveLink("home");
      }
    };

    // Écoutez l'événement de défilement
    window.addEventListener("scroll", handleScroll);

    // Nettoyez l'écouteur lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    document.getElementById(link)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#"
          className={`nav-item ${
            activeLink === "home"
              ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              : ""
          }`}
          onClick={() => handleLinkClick("home")}
        >
          Home
        </a>
        <a
          href="#project"
          onClick={() => handleLinkClick("projects")}
          className={`nav-item ${
            activeLink === "projects"
              ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              : ""
          }`}
        >
          Projets
        </a>
        <a
          href="#about"
          onClick={() => handleLinkClick("about")}
          className={`nav-item ${
            activeLink === "about"
              ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              : ""
          }`}
        >
          À propos
        </a>
        <a
          href="#contact"
          onClick={() => handleLinkClick("contact")}
          className={`nav-item ${
            activeLink === "contact"
              ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              : ""
          }`}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
