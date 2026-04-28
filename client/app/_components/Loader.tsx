"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1500); // timing adjust karu shakto

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader ${loaded ? "loaded" : ""}`}>
      <div className={`loader__content ${loaded ? "fade-out" : ""}`}>
        <div className="loader__shadow"></div>
        <div className="loader__box"></div>
      </div>
    </div>
  );
}