"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitch from "../components/ThemeSwitch";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="w-full sticky top-0 flex justify-between items-center px-15 py-7 z-50">
      <span className="font-bold text-xl">
        {">"} Djordje Milutin <span className="blink">{"_"}</span>
      </span>
      <div className="space-x-7 flex items-center">
        <Link href="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
          Home
        </Link>
        <span className="w-px h-5 bg-gray-300 dark:bg-gray-600"></span>
        <Link
          href="/about"
          className={`nav-link ${isActive("/about") ? "active" : ""}`}
        >
          About
        </Link>
        <span className="w-px h-5 bg-gray-300 dark:bg-gray-600"></span>
        <Link
          href="/projects"
          className={`nav-link ${isActive("/projects") ? "active" : ""}`}
        >
          Projects
        </Link>
        <span className="w-px h-5 bg-gray-300 dark:bg-gray-600"></span>
        <Link
          href="/contact"
          className={`nav-link ${isActive("/contact") ? "active" : ""}`}
        >
          Contact
        </Link>
        <span className="w-px h-5 bg-gray-300 dark:bg-gray-600"></span>
        <ThemeSwitch />
      </div>
    </nav>
  );
}
