"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Search, Globe, Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState("English");
  const [region, setRegion] = useState("INDIA");
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
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
        <div className="flex items-center space-x-6">
          <button className="text-gray-600 flex items-center space-x-1 hover:text-gray-900 transition-colors">
            <Globe className="h-4 w-4" />
            <span className="text-xs hidden md:inline-block tracking-wider">
              LOCATIONS
            </span>
          </button>

          <div className="flex items-center space-x-2 text-xs">
            <span className="hidden md:inline-block font-medium">{region}</span>
            <span className="text-gray-400">|</span>
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-gray-900 transition-colors">
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
                <div className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
                  Hindi
                </div>
                <div className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
                  English
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/news" legacyBehavior passHref>
                  <NavigationMenuLink className="text-sm font-medium text-gray-700 hover:text-gray-900">
                    NEWS
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  COMMUNITY
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[200px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/inclusion"
                          className="block p-2 hover:bg-gray-100"
                        >
                          Inclusion
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/pro-bono"
                          className="block p-2 hover:bg-gray-100"
                        >
                          Pro Bono
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/social-responsibility"
                          className="block p-2 hover:bg-gray-100"
                        >
                          Social Responsibility
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/alumni" legacyBehavior passHref>
                  <NavigationMenuLink className="text-sm font-medium text-gray-700 hover:text-gray-900">
                    ALUMNI
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/careers" legacyBehavior passHref>
                  <NavigationMenuLink className="text-sm font-medium text-gray-700 hover:text-gray-900">
                    CAREERS
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <button className="text-gray-700">
            <Search className="h-5 w-5" />
          </button>
        </div>

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
            <Link
              href="/news"
              className="block py-2 text-lg font-medium border-b border-gray-200"
            >
              NEWS
            </Link>
            <div>
              <div className="block py-2 text-lg font-medium border-b border-gray-200">
                COMMUNITY
              </div>
              <div className="pl-4 py-2 space-y-2">
                <Link href="/inclusion" className="block py-1">
                  Inclusion
                </Link>
                <Link href="/pro-bono" className="block py-1">
                  Pro Bono
                </Link>
                <Link href="/social-responsibility" className="block py-1">
                  Social Responsibility
                </Link>
              </div>
            </div>
            <Link
              href="/alumni"
              className="block py-2 text-lg font-medium border-b border-gray-200"
            >
              ALUMNI
            </Link>
            <Link
              href="/careers"
              className="block py-2 text-lg font-medium border-b border-gray-200"
            >
              CAREERS
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
