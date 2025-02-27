"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md text-white px-6 py-4 flex justify-between items-center z-50">
      {/* Logo */}
      <Link href="/">
        <motion.div
          className="text-2xl font-bold flex gap-1.5 text-blue-600 items-center cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Amir Temur
          <motion.img
            src="/flag.png"
            alt="Amir Temur Flag"
            className="h-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </Link>

      {/* Menu Items */}
      <div className="hidden md:flex space-x-6">
        <Link
          href="/tarix"
          className="hover:text-blue-600 flex flex-row items-center"
        >
          <span className="flex w-2.5 h-2.5 bg-blue-600 rounded-full me-1.5 shrink-0"></span>
          Tarix
        </Link>
        <Link
          href="/janglar"
          className="hover:text-purple-500 flex flex-row items-center"
        >
          <span className="flex w-2.5 h-2.5 bg-purple-500 rounded-full me-1.5 shrink-0"></span>
          Janglar
        </Link>
        <Link
          href="/imperiya"
          className="hover:text-indigo-500 flex flex-row items-center"
        >
          <span className="flex w-2.5 h-2.5 bg-indigo-500 rounded-full me-1.5 shrink-0"></span>
          Imperiya
        </Link>
        <Link
          href="/adolat"
          className="hover:text-teal-500 flex flex-row items-center"
        >
          <span className="flex w-2.5 h-2.5 bg-teal-500 rounded-full me-1.5 shrink-0"></span>
          Adolat
        </Link>
        <Link
          href="/testlar"
          className="hover:text-yellow-500 flex flex-row items-center"
        >
          <span className="flex w-2.5 h-2.5 bg-yellow-500 rounded-full me-1.5 shrink-0"></span>
          Test ishlaymiz!
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div
        className="md:hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 left-0 w-full bg-black bg-opacity-90 p-4 flex flex-col items-center space-y-4 md:hidden"
        >
          <Link
            href="/tarix"
            className="hover:text-blue-600 flex flex-row items-center"
            onClick={() => setIsOpen(false)}
          >
            <span className="flex w-2.5 h-2.5 bg-blue-600 rounded-full me-1.5 shrink-0"></span>
            Tarix
          </Link>
          <Link
            href="/janglar"
            className="hover:text-red-400 flex flex-row items-center"
            onClick={() => setIsOpen(false)}
          >
            <span className="flex w-2.5 h-2.5 bg-purple-500 rounded-full me-1.5 shrink-0"></span>
            Janglar
          </Link>
          <Link
            href="/imperiya"
            className="hover:text-red-400 flex flex-row items-center"
            onClick={() => setIsOpen(false)}
          >
            <span className="flex w-2.5 h-2.5 bg-indigo-500 rounded-full me-1.5 shrink-0"></span>
            Imperiya
          </Link>
          <Link
            href="/adolat"
            className="hover:text-red-400 flex flex-row items-center"
            onClick={() => setIsOpen(false)}
          >
            <span className="flex w-2.5 h-2.5 bg-teal-500 rounded-full me-1.5 shrink-0"></span>
            Adolat
          </Link>
          <Link
            href="/testlar"
            className="hover:text-red-400 flex flex-row items-center"
            onClick={() => setIsOpen(false)}
          >
            <span className="flex w-2.5 h-2.5 bg-yellow-500 rounded-full me-1.5 shrink-0"></span>
            Test ishlaymiz!
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
