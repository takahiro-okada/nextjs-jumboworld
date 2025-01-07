"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/app/_components/elements/Button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-4 px-4 md:py-8 md:px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center rounded-full bg-white px-4 py-3 md:px-8 md:py-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="JUMBO WORLD"
            width={120}
            height={40}
            className="h-8 w-auto md:h-10"
          />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            <li>
              <Link href="/works" className="font-bold">
                制作実績
              </Link>
            </li>
            <li>
              <Link href="/column" className="font-bold">
                コラム
              </Link>
            </li>
            <li>
              <Link href="/price" className="font-bold">
                料金
              </Link>
            </li>
            <li>
              <Link href="/company" className="font-bold">
                会社概要
              </Link>
            </li>
            <li>
              <Button href="/contact">お問い合わせ</Button>
            </li>
          </ul>
        </nav>
        <button
          className="md:hidden font-bold"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white">
          <div className="flex flex-col items-center justify-center h-full">
            <button
              className="absolute top-4 right-4 font-bold"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            <nav>
              <ul className="flex flex-col items-center gap-8">
                <li>
                  <Link
                    href="/works"
                    className="font-bold"
                    onClick={toggleMenu}
                  >
                    制作実績
                  </Link>
                </li>
                <li>
                  <Link
                    href="/column"
                    className="font-bold"
                    onClick={toggleMenu}
                  >
                    コラム
                  </Link>
                </li>
                <li>
                  <Link
                    href="/price"
                    className="font-bold"
                    onClick={toggleMenu}
                  >
                    料金
                  </Link>
                </li>
                <li>
                  <Link
                    href="/company"
                    className="font-bold"
                    onClick={toggleMenu}
                  >
                    会社概要
                  </Link>
                </li>
                <li>
                  <Button href="/contact">お問い合わせ</Button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
