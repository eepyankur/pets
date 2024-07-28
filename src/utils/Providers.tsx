import React from "react";
import { GlobalContextProvider } from "../services/GlobalContextProvider.tsx";

export function Providers({ children }: { children: React.ReactNode }) {
  return <GlobalContextProvider>{children}</GlobalContextProvider>;
}
