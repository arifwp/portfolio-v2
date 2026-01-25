"use client";

import { usePreload } from "@/hooks/usePreload";
import { PreloadScreen } from "./PreloadScreen";

export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const { isPreloadComplete, handlePreloadComplete } = usePreload();

  return (
    <>
      {!isPreloadComplete && (
        <PreloadScreen onComplete={handlePreloadComplete} />
      )}

      {isPreloadComplete && <>{children}</>}
    </>
  );
};
