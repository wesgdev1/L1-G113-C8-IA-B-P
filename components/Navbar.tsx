"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Brain, BookOpen, Users, Award, FileText } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Inicio", href: "/", icon: Brain },
    { name: "Temas & Quiz", href: "/quiz", icon: BookOpen },
    { name: "Recursos", href: "/recursos", icon: FileText },
    { name: "Proyectos", href: "/proyectos", icon: Award },
    { name: "Glosario", href: "/glosario", icon: Users },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-tech-dark/80 backdrop-blur-md border-b border-tech-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-24 h-24">
              <Image
                src="https://res.cloudinary.com/djrdozcdw/image/upload/v1755995891/logo_q33kuh.png"
                alt="Talento Tech Logo"
                width={128}
                height={128}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-tech-purple-400 to-tech-cyan-400 bg-clip-text text-transparent">
                G113-IA
              </span>
              <span className="text-xs text-gray-400">Talento Tech</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-tech-purple-400 transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-tech-dark/95 rounded-lg mt-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 text-gray-300 hover:text-tech-purple-400 block px-3 py-2 rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
