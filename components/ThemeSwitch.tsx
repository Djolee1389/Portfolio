"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTranslations } from "next-intl";

export default function ThemeSwitch() {
  const t = useTranslations("Aria-labels");

  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  if (resolvedTheme === "dark") {
    return (
      <button
        onClick={() => setTheme("light")}
        className="p-2 rounded-full border aspect-square cursor-pointer "
        aria-label={t("lightMode")}
      >
        <LightModeIcon />
      </button>
    );
  }
  if (resolvedTheme === "light") {
    return (
      <button
        onClick={() => setTheme("dark")}
        className="p-2 rounded-full border aspect-square cursor-pointer "
        aria-label={t("darkMode")}
      >
        <DarkModeIcon />
      </button>
    );
  }
}
