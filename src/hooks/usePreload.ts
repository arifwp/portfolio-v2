"use client";

import { useState, useEffect } from "react";

export const usePreload = () => {
  const [isPreloadComplete, setIsPreloadComplete] = useState(false);

  useEffect(() => {
    // Cek apakah preload sudah pernah ditampilkan (optional)
    // Uncomment jika ingin preload hanya muncul sekali per session
    // const hasPreloaded = sessionStorage.getItem("hasPreloaded");
    // if (hasPreloaded) {
    //   setIsPreloadComplete(true);
    // }
  }, []);

  const handlePreloadComplete = () => {
    setIsPreloadComplete(true);
    // sessionStorage.setItem("hasPreloaded", "true"); // Optional
  };

  return { isPreloadComplete, handlePreloadComplete };
};
