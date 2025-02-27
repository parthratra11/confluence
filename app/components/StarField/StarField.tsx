import { useEffect } from "react";
import "@/app/styles/starfield.css";

export const StarField = () => {
  useEffect(() => {
    const container = document.querySelector(".star-container");

    // Create stars
    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      const size = Math.random();
      star.className = `star ${
        size < 0.6 ? "star-small" : size < 0.8 ? "star-medium" : "star-large"
      }`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animation = `twinkle ${2 + Math.random() * 3}s infinite`;
      container?.appendChild(star);
    }

    // Create shooting stars
    const createShootingStar = () => {
      const star = document.createElement("div");
      star.className = "shooting-star";
      star.style.top = `${Math.random() * 60}%`;
      star.style.left = `${Math.random() * 60}%`;
      container?.appendChild(star);
      setTimeout(() => star.remove(), 2000);
    };

    const interval = setInterval(() => {
      createShootingStar();
    }, 3000 + Math.random() * 4000);

    return () => clearInterval(interval);
  }, []);

  return <div className="star-container absolute inset-0" />;
};
