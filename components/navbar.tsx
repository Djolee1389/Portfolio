"use client";
import Link from "next/link";
import ThemeSwitch from "../components/ThemeSwitch";


export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-15 py-7">
      <span className="font-bold text-xl">{'>'} Djordje Milutin <span className="blink">{ '_' }</span></span>
      <div className="space-x-10">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
        <ThemeSwitch />
      </div>
    </nav>
  );
}