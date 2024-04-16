"use client";
import React from "react";
import Container from "./Container";
import { motion } from "framer-motion";
type Props = {};

const HomeHeader = (props: Props) => {
  return (
    <Container>
      <div className="flex w-full flex-col mt-16">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, ease: "easeIn" }}
          className="h1"
        >
          Jake Snitkin
        </motion.h1>
        <motion.h4
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, ease: "easeIn" }}
          className="h4 px-4"
        >
          PHOTOGRAPHY
        </motion.h4>
      </div>
    </Container>
  );
};

export default HomeHeader;
