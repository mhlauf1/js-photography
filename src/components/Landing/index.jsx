"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { slideUp } from "./animation";
import { motion } from "framer-motion";

export default function Home() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.06 * direction;
  };

  return (
    <motion.main
      variants={slideUp}
      initial="initial"
      animate="enter"
      className={styles.landing}
    >
      <div className="absolute inset-0 -z-1">
        <Image
          src="/olympic-6.jpeg"
          alt="background"
          height={500}
          width={500}
          objectFit="cover"
          layout="responsive"
          className={styles.overlay}
        />
        <div className={styles.overlay} />
      </div>
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Jake Snitkin Photography -</p>
          <p ref={secondText}>Jake Snitkin Photography -</p>
        </div>
      </div>
      <div data-scroll data-scroll-speed={0.1} className={styles.description}>
        <p>Explore</p>
        <p>Collection Below</p>
      </div>
      <div className={styles.secondaryImage}>
        <div className="w-[400px] h-[350px] ">
          <Image
            src="/olympic-1.jpeg"
            className="rounded-sm"
            alt="Latest Trip"
            layout="responsive"
            width={300}
            height={250}
            objectFit="cover"
          />
        </div>
      </div>
    </motion.main>
  );
}
