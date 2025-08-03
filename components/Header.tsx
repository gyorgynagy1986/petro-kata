"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-['Pacifico'] text-teal-600">
              logo
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Főoldal
              </Link>
              <Link
                href="/bemutatkozas"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Bemutatkozás
              </Link>
              <div className="relative group">
                <Link
                  href="/szolgaltatasok"
                  className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium cursor-pointer flex items-center gap-1"
                >
                  Szolgáltatások
                  <i className="ri-arrow-down-s-line w-4 h-4 flex items-center justify-center"></i>
                </Link>
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1">
                    <Link
                      href="/szolgaltatasok/egyeni-tanacsadas"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                    >
                      Egyéni tanácsadás
                    </Link>
                    <Link
                      href="/szolgaltatasok/online-tanacsadas"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                    >
                      Online tanácsadás
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                href="kapcsolat"
                className="bg-teal-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-teal-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                Kapcsolat
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-teal-600 cursor-pointer"
            >
              <i
                className={`${
                  isMenuOpen ? "ri-close-line" : "ri-menu-line"
                } w-6 h-6 flex items-center justify-center`}
              ></i>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 cursor-pointer"
              >
                Főoldal
              </Link>
              <Link
                href="/bemutatkozas"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 cursor-pointer"
              >
                Bemutatkozás
              </Link>
              <Link
                href="/szolgaltatasok"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 cursor-pointer"
              >
                Szolgáltatások
              </Link>
              <Link
                href="/szolgaltatasok/egyeni-tanacsadas"
                className="block px-3 py-2 text-sm text-gray-600 hover:text-teal-600 cursor-pointer ml-4"
              >
                Egyéni tanácsadás
              </Link>
              <Link
                href="/szolgaltatasok/online-tanacsadas"
                className="block px-3 py-2 text-sm text-gray-600 hover:text-teal-600 cursor-pointer ml-4"
              >
                Online tanácsadás
              </Link>

              <Link
                href="#contact"
                className="block px-3 py-2 text-base font-medium bg-teal-600 text-white rounded cursor-pointer"
              >
                Kapcsolat
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
