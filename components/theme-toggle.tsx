"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { SunIcon, MoonIcon } from "@phosphor-icons/react/dist/ssr";

export default function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
}
