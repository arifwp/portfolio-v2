"use client";

import { GlobalCursor } from "@/components/GlobalCursor";
import { CursorContext, CursorVariant } from "@/hooks/useCursor";
import { useState } from "react";

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const [variant, setVariant] = useState<CursorVariant>("default");

  return (
    <CursorContext.Provider value={{ setVariant }}>
      {children}
      <GlobalCursor variant={variant} />
    </CursorContext.Provider>
  );
};
