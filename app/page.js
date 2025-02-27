"use client";
import HeroSection from "./components/hero";
import Maps from "./components/maps";
import Navbar from "./components/navbar";
import Timeline from "./components/timeline";
import AmirTemur3D from "./components/amir-temur3d";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Timeline />
      <div className="relative z-0">
        <Maps />
      </div>
      <AmirTemur3D />
    </main>
  );
}
