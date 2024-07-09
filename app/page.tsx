
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import Footer from "@/components/Footer";
import LatestBlogs from "@/components/LatestBlogs";

export default function Home() {
  return (
  
    <main className="relative bg-black-300 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        
        <LatestBlogs />
        
       
        <Footer />
      </div>
    </main>
  
  );
}
