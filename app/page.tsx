import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import AllComponentes from "./Components/AllComponentes";
import Client from "twitter-api-sdk";

export default async function Home() {

  return (
    <main className="font-sixtyfour max-w-full overflow-x-hidden">
       
      <Hero />
      <AllComponentes />
      
      
    </main>
  );
}
