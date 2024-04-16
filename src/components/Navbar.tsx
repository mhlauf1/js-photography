"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Container from "./Container";

const navigation = [
  { name: "Gallery", href: "/gallery" },
  { name: "Destinations", href: "/destinations" },
  { name: "Info", href: "/info" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sidebarVariants = {
    hidden: {
      x: "100%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <header className="fixed w-full top-0 z-30 bg-transparent">
      <Container>
        <div className="flex justify-between items-center py-4">
          <div className="lg:w-4/12">
            <Link
              className="text-gray-300 hover:text-white transition duration-500 ease-in-out"
              href="/"
            >
              Jake Snitkin
            </Link>
          </div>
          <div className="flex justify-between items-center lg:w-8/12">
            <p className="text-gray-300 hidden lg:flex hover:text-white transition duration-500 ease-in-out">
              jsphotography@gmail.com
            </p>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden"
            >
              <Bars3Icon className="h-6 w-6 text-gray-300" />
            </button>

            {/* Links for Desktop */}
            <nav className="hidden lg:flex items-center justify-between space-x-4">
              {navigation.map((item) => (
                <Link
                  className="text-gray-300 hover:text-white transition duration-500 ease-in-out"
                  key={item.name}
                  href={item.href}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </Container>
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
          >
            <motion.div
              className="fixed inset-0 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="fixed inset-0 overflow-hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={sidebarVariants}
            >
              <Dialog.Panel className="absolute right-0 top-0 bottom-0 w-full bg-white p-5">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="absolute text-black top-5 right-5"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
                <div className="mt-8 space-y-6">
                  <button
                    className="block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Link
                      className="block text-lg font-medium text-gray-900"
                      key="Home"
                      href="/"
                    >
                      Home
                    </Link>
                  </button>
                  {navigation.map((item) => (
                    <button
                      className="block"
                      key={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Link
                        className="block text-lg font-medium text-gray-900"
                        key={item.name}
                        href={item.href}
                      >
                        {item.name}
                      </Link>
                    </button>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    jsphotography@gmail.com
                  </a>
                </div>
              </Dialog.Panel>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
