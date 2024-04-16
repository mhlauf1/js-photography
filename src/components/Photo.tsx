"use client";
import { useMediaQuery } from "react-responsive";
import React, { useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IoMdArrowForward } from "react-icons/io";

type Props = {
  src: string;
  title: string;
  date: string;
  cols: string;
  animation: any;
};

const Photo = ({ src, title, date, cols, animation }: Props) => {
  const prefersReducedMotion = useMediaQuery({
    query: "(prefers-reduced-motion: reduce)",
  });

  const [hovered, setHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.15, // Adjust this value to control when the animation starts
  });
  const arrowVariants = {
    hidden: { x: -20, opacity: 0 }, // Start closer to the final position
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 1,
      }, // Slower and sharper movement
    },
  };

  const animationControls = useAnimation();

  const handleMouseEnter = () => {
    setHovered(true);
    animationControls.start("visible");
  };

  const handleMouseLeave = () => {
    setHovered(false);
    animationControls.start("hidden");
  };

  const animationProps = prefersReducedMotion
    ? {}
    : {
        ...animation,
        animate: inView ? animation.animate : animation.initial, // Animate when in view
      };
  return (
    <motion.div
      {...animationProps}
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`w-full md:w-${cols}/12 text-gray-400 hover:text-white duration-500 cursor-pointer`}
    >
      <Image
        alt={title}
        src={src}
        width={500}
        height={500}
        className="rounded-lg opacity-80 hover:opacity-100 duration-500"
        objectFit="cover"
        layout="responsive"
      />
      <div className="flex mt-2 justify-between items-start">
        <div className="bg-[#040404] flex flex-col flex-1">
          <h3>{title}</h3>
          <p className="text-sm">{date}</p>
        </div>
        <motion.div
          variants={arrowVariants}
          initial="hidden"
          animate={hovered ? "visible" : "hidden"}
        >
          <IoMdArrowForward className="text-xl" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Photo;
