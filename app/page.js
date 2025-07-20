import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import Contact from "@/components/Contact/Contact";
import Education from "@/components/Education/Education";
import Experice from "@/components/Experience/Experice";

import Projects from "@/components/Projects/Projects";
import Reviews from "@/components/Reviews/Reviews";
import Skills from "@/components/Skills/Skills";
import React from "react";

const page = () => {
  return (
    <section className="max-w-full h-auto overflow-hidden">
      
      <Banner />
      <About />
      <Education />
      <Experice />
      <Skills />
      <Projects />
      <Reviews />
      <Contact />
    </section>
  );
};

export default page;
