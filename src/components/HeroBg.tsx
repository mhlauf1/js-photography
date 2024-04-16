"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroBg = () => {
  return (
    <header className="relative px-[5%]">
      <div className="container">
        <div className="flex max-h-[60rem] min-h-svh items-center justify-center py-16 text-center md:py-24 lg:py-28">
          <div className="w-full max-w-lg">
            <h1
              style={{ lineHeight: "100%" }}
              className="text-[7rem] text-neutral-100 font-playfair"
            >
              Jake Snitkin Photography
            </h1>
            <p className="md:text-md italic  mt-12 text-neutral-300">
              Capturing the Essence of Adventure: A Journey Through Natural
              Wonders
            </p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <Image
          src="/olympic-6.jpeg"
          height={500}
          width={500}
          objectFit="cover"
          layout="responsive"
          className="size-full"
          alt="Olympic National Park"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </header>
  );
};

export default HeroBg;
