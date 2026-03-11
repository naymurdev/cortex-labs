"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type BackgroundType =
  | "video1"
  | "video2"
  | "video3"
  | "neural"
  | "mesh"
  | "bars"
  | "spiral";

interface BackgroundContextType {
  background: BackgroundType;
  setBackground: (background: BackgroundType) => void;
  toggleBackground: () => void;
}

const BackgroundContext = createContext<BackgroundContextType | undefined>(
  undefined,
);

const backgrounds: BackgroundType[] = [
  "video1",
  "video2",
  "video3",
  "neural",
  "mesh",
  "bars",
  "spiral",
];

export function BackgroundProvider({ children }: { children: ReactNode }) {
  const [background, setBackgroundState] = useState<BackgroundType>("video3");

  useEffect(() => {
    const stored = localStorage.getItem("background") as BackgroundType;
    if (stored && backgrounds.includes(stored)) {
      setBackgroundState(stored);
    }
  }, []);

  const setBackground = (newBackground: BackgroundType) => {
    setBackgroundState(newBackground);
    localStorage.setItem("background", newBackground);
  };

  const toggleBackground = () => {
    const currentIndex = backgrounds.indexOf(background);
    const nextIndex = (currentIndex + 1) % backgrounds.length;
    setBackground(backgrounds[nextIndex]);
  };

  return (
    <BackgroundContext.Provider
      value={{ background, setBackground, toggleBackground }}
    >
      {children}
    </BackgroundContext.Provider>
  );
}

export function useBackground() {
  const context = useContext(BackgroundContext);
  if (context === undefined) {
    throw new Error("useBackground must be used within a BackgroundProvider");
  }
  return context;
}
