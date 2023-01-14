"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
function DarkModeButton() {
  const [isMounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isMounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div>
      {currentTheme === "dark" ? (
        <SunIcon
          className="w-8 h-8 cursor-pointer text-yellow-400"
          onClick={() => setTheme("light")}></SunIcon>
      ) : (
        <MoonIcon
          className="w-8 h-8 cursor-pointer"
          onClick={() => setTheme("dark")}></MoonIcon>
      )}
    </div>
  );
}

export default DarkModeButton;
