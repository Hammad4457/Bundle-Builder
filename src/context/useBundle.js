import { createContext, useContext } from "react";

export const BundleContext = createContext();

export function useBundle() {
  return useContext(BundleContext);
}
