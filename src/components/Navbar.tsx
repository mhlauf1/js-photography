"use client";
import React, { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import Container from "./Container";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="w-screen fixed top-0 z-50 py-4 bg-transparnet">
      <Container>
        <nav className="flex items-center  justify-between">
          <div className="w-4/12">
            <Link href="/">
              <h4 className="text-gray-300 hover:text-white duration-500 cursor-pointer">
                Jake Snitkin
              </h4>
            </Link>
          </div>
          <div className="flex  w-8/12 items-center justify-between">
            <p className="text-gray-300 hover:text-white duration-500 cursor-pointer">
              jsphotography@gmail.com
            </p>
            <ul className="flex gap-2">
              <Link href="/gallery">
                <li className="text-gray-300 hover:text-white duration-500 cursor-pointer">
                  Gallery
                </li>
              </Link>
              <Link href="/destinations">
                <li className="text-gray-300 hover:text-white duration-500 cursor-pointer">
                  Destinations
                </li>
              </Link>
              <Link href="/info">
                <li className="text-gray-300 hover:text-white duration-500 cursor-pointer">
                  Info
                </li>
              </Link>
            </ul>
          </div>
          {/* <div className="text-neutral-300 hover:opacity-80 duration-500">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div> */}
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
