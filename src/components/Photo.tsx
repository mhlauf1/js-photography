"use client";
import { useMediaQuery } from "react-responsive";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.15, // Adjust this value to control when the animation starts
  });

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
      <h3 className="mt-4">{title}</h3>
      <p className="text-sm">{date}</p>
    </motion.div>
  );
};

export default Photo;
