"use client";
import React from "react";
import { motion } from "framer-motion";
import Container from "./Container";
import Photo from "./Photo";
import { fadeInDelayed } from "@/lib/animations";

const Hero = () => {
  const headingText = "Jake Snitkin Photography. Explore Photos Below.";
  const words = headingText.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.15, ease: "easeInOut" },
    },
  };

  return (
    <div className="dark-bg">
      <Container>
        <section className="pt-36 pb-24">
          <div className="flex mb-16">
            <div className="w-4/12" />
            <div className="w-8/12">
              <motion.h1
                className="h1 text-gray-300 w-[18ch]"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {words.map((word, index) => (
                  <motion.span key={index} variants={itemVariants}>
                    {word}{" "}
                  </motion.span>
                ))}
              </motion.h1>
            </div>
          </div>
          <div className="flex mb-64 gap-x-2">
            <Photo
              title="Olympic National Park"
              src="/olympic-2.jpeg"
              date="June, 2022"
              cols="4"
              animation={fadeInDelayed}
            />
            <Photo
              title="Olympic National Park"
              src="/olympic-1.jpeg"
              date="June, 2022"
              cols="8"
              animation={fadeInDelayed}
            />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Hero;
