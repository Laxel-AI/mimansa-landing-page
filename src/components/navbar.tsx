"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Search, Globe, Menu, X, LogIn } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

// Navigation items JSON
const navigationItems = {
  main: [
    {
      label: "NEWS",
      link: "/news",
      type: "link",
    },
    {
      label: "BLOGS",
      link: "/blog",
      type: "link",
    },
    {
      label: "CONTACT",
      link: "/contact",
      type: "link",
    },
  ],
  languages: ["English", "Hindi"],
  regions: ["INDIA", "SINGAPORE", "UAE"],
};

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState(navigationItems.languages[0]);
  const region = navigationItems.regions[0];
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/95 shadow-sm"
          : "bg-white"
      } border-b border-gray-200`}
    >
      <div className="flex items-center justify-between px-4 md:px-8 py-3">
        {/* Left section */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-xs">
            <span className="hidden md:inline-block font-medium">{region}</span>
            <span className="text-gray-400">|</span>
            <div className="relative group">
              <button className="flex items-center space-x-2 hover:text-gray-900 transition-colors">
                <span>{language}</span>
                <svg
                  className="h-3 w-3 opacity-50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-md p-2 min-w-32 z-50">
                {navigationItems.languages.map((lang) => (
                  <div
                    key={lang}
                    className="py-1 px-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => setLanguage(lang)}
                  >
                    {lang}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Center section - Main navigation */}
        <div className="hidden md:flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="space-x-8">
              {navigationItems.main.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <Link href={item.link!} legacyBehavior passHref>
                    <NavigationMenuLink className="text-sm font-medium text-gray-700 hover:text-gray-900">
                      {item.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right section */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="text-gray-700">
            <Search className="h-5 w-5" />
          </button>
          <Link
            href="https://app.laxel.in"
            target="_blank"
            className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            <LogIn className="h-4 w-4" />
            <span>Login</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white pt-16">
          <div className="container px-4 py-6 space-y-6">
            {navigationItems.main.map((item) => (
              <Link
                key={item.label}
                href={item.link!}
                className="block py-2 text-lg font-medium border-b border-gray-200"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/login"
              className="block py-2 text-lg font-medium border-b border-gray-200"
            >
              LOGIN
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
