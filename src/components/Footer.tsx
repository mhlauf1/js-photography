import React from "react";
import Container from "./Container";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="dark-bg">
      <Container>
        <div className="flex justify-between items-start">
          <div className="flex w-5/12 flex-col gap-8">
            <h2 className="h2">
              Let&apos;s start a conversation about your next destination.
            </h2>
            <span>jsphotography@gmail.com</span>
          </div>
          <ul className="flex flex-col gap-2">
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li>Destinations</li>
            <li>Gallery</li>
            <li>Info</li>
          </ul>
          <div>Nashville, Tennessee</div>
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
