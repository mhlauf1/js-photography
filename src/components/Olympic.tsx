"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Container from "./Container";
import PhotoCaption from "./PhotoCaption";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {};

const Olympic = (props: Props) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const parallax1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const parallax2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  return (
    <div className="bg-neutral-50">
      <Container>
        <section className="pt-64 pb-24">
          <div className="flex mb-64 gap-x-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.15, ease: "ease" }} // Delay for 0.4 seconds
              className="w-7/12 hover:opacity-70"
            >
              <Image
                style={{ display: "flex", flex: 2 }}
                alt="Olympic National Park"
                src="/olympic-1.jpeg"
                width={500}
                height={500}
                objectFit="cover"
                layout="responsive"
              />
              <PhotoCaption location="Olympic" year="2023" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.15, ease: "ease" }} // Delay for 0.4 seconds
              className="w-5/12 hover:opacity-70"
            >
              <Image
                style={{ display: "flex", flex: 1 }}
                alt="Olympic National Park"
                src="/olympic-2.jpeg"
                width={500}
                height={500}
                objectFit="cover"
                layout="responsive"
              />
              <PhotoCaption location="Olympic" year="2023" />
            </motion.div>
          </div>

          <div className="flex mb-64 gap-x-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.15, ease: "ease" }} // Delay for 0.4 seconds
              className="w-5/12 hover:opacity-70"
            >
              <Image
                style={{ display: "flex", flex: 1 }}
                alt="Olympic National Park"
                src="/olympic-4.jpeg"
                width={500}
                height={500}
                objectFit="cover"
                layout="responsive"
              />
              <PhotoCaption location="Olypmic" year="2023" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.15, ease: "ease" }} // Delay for 0.4 seconds
              className="w-7/12 hover:opacity-70"
            >
              <Image
                style={{ display: "flex", flex: 2 }}
                alt="Olympic National Park"
                src="/olympic-3.jpeg"
                width={500}
                height={500}
                objectFit="cover"
                layout="responsive"
              />
              <PhotoCaption location="Olypmic" year="2023" />
            </motion.div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Olympic;
