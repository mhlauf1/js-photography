"use client";
import React from "react";
import Photo from "./Photo";
import { fadeIn } from "@/lib/animations";
import Container from "./Container";
import { useInView } from "react-intersection-observer";

// Expecting an array of image objects
type ImageData = {
  title: string;
  src: string;
  date: string;
};

type ImageGridProps = {
  images: ImageData[]; // Array of image data
  noMargin?: boolean;
};

const ImageGrid = ({ images, noMargin }: ImageGridProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15, // Adjust this value to control when the animation starts
  });

  const cols = 12 / images.length; // Divide the grid equally based on the number of images

  return (
    <div ref={ref} className="dark-bg">
      <Container>
        <div className={`flex ${noMargin ? "pb-0" : "pb-64"}  gap-x-2`}>
          {images.map((image, index) => (
            <Photo
              key={index}
              title={image.title}
              src={image.src}
              date={image.date}
              cols={`${cols}`}
              animation={{
                ...fadeIn,
                animate: inView ? fadeIn.animate : fadeIn.initial,
              }}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ImageGrid;
