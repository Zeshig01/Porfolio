"use client";
import { useEffect } from "react";

const ScrollProgress = () => {
  useEffect(() => {
    const progressBar = document.createElement("div");
    progressBar.className = "scroll-progress-bar";
    document.body.appendChild(progressBar);

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      progressBar.style.height = `${progress}%`;
    };

    window.addEventListener("scroll", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      progressBar.remove();
    };
  }, []);

  return null; // Because we're directly appending to body
};

export default ScrollProgress;
