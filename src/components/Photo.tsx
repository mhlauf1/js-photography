import React, { useState, useCallback } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IoMdArrowForward } from "react-icons/io";
import { useMediaQuery } from "react-responsive";

type Props = {
  src: string;
  title: string;
  date: string;
  cols: string;
  animation: any;
};

const PhotoComponent: React.FC<Props> = ({
  src,
  title,
  date,
  cols,
  animation,
}) => {
  const prefersReducedMotion = useMediaQuery({
    query: "(prefers-reduced-motion: reduce)",
  });

  const [hovered, setHovered] = useState(false);
  const animationControls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const handleMouseEnter = useCallback(() => {
    setHovered(true);
    animationControls.start("visible");
  }, [animationControls]);

  const handleMouseLeave = useCallback(() => {
    setHovered(false);
    animationControls.start("hidden");
  }, [animationControls]);

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
          variants={{
            hidden: { x: -20, opacity: 0 },
            visible: {
              x: 0,
              opacity: 1,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
          initial="hidden"
          animate={hovered ? "visible" : "hidden"}
        >
          <IoMdArrowForward className="text-xl" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Photo = React.memo(PhotoComponent);
Photo.displayName = "Photo"; // Explicitly setting the display name for the component

export default Photo;
