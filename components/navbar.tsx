"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitch from "../components/ThemeSwitch";
import { BurgerMenu } from "./BurgerMenu";
import LanguageSwitcher from "./LanguageSwitch";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("Navigation");
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="w-full  sticky top-0 flex justify-between items-center px-8 py-7 z-50 sm:px-15">
      <Link href="/" >
        <span className="font-bold text-lg sm:text-xl">
          {">"} {process.env.NEXT_PUBLIC_NAME_KEY}{" "}
          <span className="blink">{"_"}</span>
        </span>
      </Link>

      <div className="space-x-3  items-center hidden md:flex">
        <Link href="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
          {t("home")}
        </Link>
        <span className="w-px h-5 bg-gray-300 dark:bg-gray-600"></span>
        <Link
          href="/about"
          className={`nav-link ${isActive("/about") ? "active" : ""}`}
        >
          {t("about")}
        </Link>
        <span className="w-px h-5 bg-gray-300 dark:bg-gray-600"></span>
        <Link
          href="/projects"
          className={`nav-link ${isActive("/projects") ? "active" : ""}`}
        >
          {t("projects")}
        </Link>
        <span className="w-px h-5 bg-gray-300 dark:bg-gray-600"></span>
        <Link
          href="/contact"
          className={`nav-link ${isActive("/contact") ? "active" : ""}`}
        >
          {t("contact")}
        </Link>
        <span className="w-px h-5 bg-gray-300 dark:bg-gray-600"></span>
        <ThemeSwitch />
        <span className="w-px h-5 bg-gray-300 dark:bg-gray-600"></span>
        <LanguageSwitcher />
      </div>
      <div className="md:hidden">
        <BurgerMenu />
      </div>
    </nav>
  );
}
