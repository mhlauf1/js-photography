"use client";
import styles from "./page.module.css";
import { useState } from "react";
import Destination from "./destination";
import Modal from "./modal";
import { motion } from "framer-motion";
import { destinationPageImages } from "@/lib/imageData";

export default function IndexItems() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main className={styles.main}>
      <motion.div
        initial={{ opacity: 0, filter: "blur(8px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ delay: 0.2, duration: 1, ease: "ease" }}
        className={styles.body}
      >
        {destinationPageImages.map((project, index) => {
          return (
            <Destination
              index={index}
              title={project.title}
              setModal={setModal}
              date={project.date}
              key={index}
            />
          );
        })}
      </motion.div>
      <Modal modal={modal} destinations={destinationPageImages} />
    </main>
  );
}
