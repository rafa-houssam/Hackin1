"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import ProjectSlider from "@/components/ProjectSlider";
import WhyHireMe from "@/components/WhyHireMe";
import Testimonials from "@/components/Testimonials";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import BlogPosts from "@/components/BlogPosts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Experience />
      <ProjectSlider />
      <WhyHireMe />
      <Testimonials />
      <Contact />
      <Skills />
      <BlogPosts />
      <Footer />
    </main>
  );
}