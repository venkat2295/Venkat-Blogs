import React, { Suspense } from 'react';
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Footer from "@/components/Footer";
import Blogpagecontent from "@/app/Blogpagecontent";

export default function Blogpage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems}/>
          <Blogpagecontent />
          <Footer />
        </div>
      </main>
    </Suspense>
  );
}