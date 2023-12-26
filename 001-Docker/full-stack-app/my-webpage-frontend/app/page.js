import React from "react";
import Counter from "@/components/Counter/Counter";
import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-heading">Number of visits to Webpage</h1>
      <Counter />
      <Image
        className="home-image"
        src="/assets/image.jpeg"
        alt="Funny image"
        width={500}
        height={280} 
      />
    </div>
  )
}
