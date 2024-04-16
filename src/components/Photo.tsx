"use client";
import React, { useState, useCallback } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IoMdArrowForward } from "react-icons/io";
import { useMediaQuery } from "react-responsive";
import { AnimationProps, MotionProps } from "framer-motion";

type Props = {
  src: string;
  title: string;
  date: string;
  cols: string;
  animation: AnimationProps; // assuming AnimationProps is a custom type you have defined that fits the structure you are passing
};

const Photo: React.FC<Props> = React.memo(
  ({ src, title, date, cols, animation }) => {
    const prefersReducedMotion = useMediaQuery({
      query: "(prefers-reduced-motion: reduce)",
    });

    const [hovered, setHovered] = useState<boolean>(false);
    const animationControls = useAnimation();

    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.15,
    });

    const handleMouseEnter = useCallback(() => {
      setHovered(true);
      animationControls.start("visible");
    }, [animationControls]);

    console.log(title, "render");

    const handleMouseLeave = useCallback(() => {
      setHovered(false);
      animationControls.start("hidden");
    }, [animationControls]);

    const arrowVariants = {
      hidden: { x: -20, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5, // Reduced duration
          ease: "easeOut", // Changed easing function
        },
      },
    };

    const animationProps = prefersReducedMotion
      ? {}
      : {
          ...animation,
          animate: inView ? animation.animate : animation.initial,
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
  }
);

export default Photo;
