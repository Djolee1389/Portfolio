"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitch from "./ThemeSwitch";
import LanguageSwitch from "./LanguageSwitch";
import { useTranslations } from "next-intl";

export const BurgerMenu = () => {
  const t = useTranslations("Navigation");
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div>
      <button
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        title={isOpen ? "Close menu" : "Open menu"}
        onKeyDown={(e) => {
          if (e.key === "Escape") setIsOpen(false);
        }}
        className="relative z-50 flex flex-col gap-1 "
      >
        <span
          className={`block w-6 h-0.5 bg-(--primary) transition-all transform ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-(--primary) transition-all transform ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-(--primary) transition-all transform ${
            isOpen ? "-rotate-45 -translate-y-1" : ""
          }`}
        ></span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 pt-20 bg-(--background) z-40 flex flex-col justify-between p-6">
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              className={`nav-link ${isActive("/") ? "active" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              {t("home")}
            </Link>
            <Link
              href="/about"
              className={`nav-link ${isActive("/about") ? "active" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              {t("about")}
            </Link>
            <Link
              href="/projects"
              className={`nav-link ${isActive("/projects") ? "active" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              {t("projects")}
            </Link>
            <Link
              href="/contact"
              className={`nav-link ${isActive("/contact") ? "active" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              {t("contact")}
            </Link>
          </div>

          <div className="mt-6 flex justify-between items-center  ">
            <ThemeSwitch />
            <LanguageSwitch />
          </div>
        </div>
      )}
    </div>
  );
};
