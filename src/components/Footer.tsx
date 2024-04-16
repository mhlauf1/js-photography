import React from "react";
import Container from "./Container";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="dark-bg">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="flex  flex-col gap-8">
            <h2 className="h2 w-4/5 lg:w-9/12">
              Let&apos;s start a conversation about your next destination.
            </h2>
            <span className="text-gray-300  cursor-pointer hover:text-white transition duration-500 ease-in-out">
              jsphotography@gmail.com
            </span>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="text-gray-300  cursor-pointer hover:text-white transition duration-500 ease-in-out">
              Instagram
            </li>
            <li className="text-gray-300  cursor-pointer hover:text-white transition duration-500 ease-in-out">
              LinkedIn
            </li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="text-gray-300  cursor-pointer hover:text-white transition duration-500 ease-in-out">
              Destinations
            </li>
            <li className="text-gray-300  cursor-pointer hover:text-white transition duration-500 ease-in-out">
              Gallery
            </li>
            <li className="text-gray-30 cursor-pointer hover:text-white transition duration-500 ease-in-out">
              Info
            </li>
          </ul>
          <span className="text-gray-300">Nashville, Tennessee</span>
        </div>
        <div className="mt-16 flex flex-col items-center mb-8">
          <h2 className="footer-name mb-8">Jake Snitkin</h2>
          <p className="text-gray-400 text-sm">All Rights Reserved</p>
          <p className="text-gray-400 text-sm">
            Powered By Michael Laufersweiler
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
