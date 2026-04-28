import { useEffect, useState } from "react";

export default function Loading() {

      const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="h-screen flex items-center justify-center bg-pink-50">
      <div className="text-center">
        
        {/* 💗 He tuza animation */}
        <div className="animate-ping h-10 w-10 bg-pink-400 rounded-full mx-auto"></div>

        <p className="mt-4 text-pink-500 font-medium">
          Loading Kirti’s world... 🎀✨
        </p>
      </div>
    </div>
  );
}