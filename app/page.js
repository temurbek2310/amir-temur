"use client";
// import HeroSection from "./components/hero";
// import Maps from "./components/maps";
// import Navbar from "./components/navbar";
// import Timeline from "./components/timeline";
// import AmirTemur3D from "./components/amir-temur3d";
import dynamic from "next/dynamic";
const AmirTemur3D = dynamic(() => import("./components/amir-temur3d"), { ssr: false });
const HeroSection = dynamic(() => import("./components/hero"), { ssr: false });
const Maps = dynamic(() => import("./components/maps"), { ssr: false });
const Navbar = dynamic(() => import("./components/navbar"), { ssr: false });
const Timeline = dynamic(() => import("./components/timeline"), { ssr: false });

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
