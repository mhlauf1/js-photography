"use client";
import Link from "next/link";
import IndexItems from "@/components/IndexItems";
import Container from "@/components/Container";

export default function Destinations() {
  return (
    <main className="dark-bg py-36 min-h-screen">
      <Container>
        <div className="flex flex-col items-start w-full">
          <IndexItems />
        </div>
      </Container>
    </main>
  );
}
