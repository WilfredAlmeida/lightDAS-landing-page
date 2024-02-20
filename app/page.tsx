import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Features";

export default function Home() {
  return (
    <main>
      
      {/* <Navbar/> */}
      <Hero />
      <Features />
      
    </main>
  );
}
