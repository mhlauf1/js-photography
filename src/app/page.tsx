"use client";
import Link from "next/link";
import Hero from "@/components/Hero";
import ImageGrid from "@/components/ImageGrid";
import Container from "@/components/Container";
import {
  fourGridImages,
  fourGridImages3,
  fourGridImages2,
} from "@/lib/imageData";

export default function Home() {
  return (
    <main className="dark-bg">
      <Hero />
      <ImageGrid images={fourGridImages3} />
      <ImageGrid images={fourGridImages} />
      <ImageGrid images={fourGridImages2} />
      {/* <Container>
        <div className="flex justify-end w-full">
          <Link
            className="underline text-gray-300 hover:text-white duration-500"
            href="/gallery"
          >
            All Photos
          </Link>
        </div>
      </Container> */}
    </main>
  );
}
