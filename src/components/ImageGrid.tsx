import React from "react";
import Photo from "./Photo";
import Container from "./Container";
import { fadeIn } from "@/lib/animations";
import { motion } from "framer-motion";

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
  // Define responsive columns based on the number of images, for mobile they should all take full width
  const cols = images.length >= 4 ? "3" : images.length === 3 ? "4" : "6"; // Set column span based on number of images

  return (
    <div className={`dark-bg ${noMargin ? "pb-0" : "pb-64"}`}>
      <Container>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {images.map((image, index) => (
            <Photo
              key={index}
              title={image.title}
              src={image.src}
              date={image.date}
              cols={cols}
              animation={fadeIn}
            />
          ))}
        </motion.div>
      </Container>
    </div>
  );
};

export default ImageGrid;
