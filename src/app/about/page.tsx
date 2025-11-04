"use client";

import Image from "next/image";
import NavBar from "@/components/NavBar";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Linkedin, X, ArrowBigDown } from 'lucide-react';

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);
  // State for the "Read More" functionality
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <NavBar onMenuToggle={setMenuOpen} />
      
      <motion.main
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full items-center justify-center px-4 pt-24 md:pt-32 lg:pt-28">
        {/* Hero Section with Photo and Description */}
        <section className="w-full max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column - Photo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative">
              <div className="relative w-full h-[704px] rounded-3xl overflow-hidden">
                <Image
                  src="/me.png" // Replace with your actual photo
                  alt="Dhruv Narayan Tiwari"
                  fill
                  className="object-cover"
                  priority />
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8">
              {/* Title */}
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl lg:text-5xl font-inter font-bold text-foreground leading-tight">
                  Product Designer,
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl lg:text-5xl font-inter font-bold text-foreground leading-tight">
                  Graduated
                </motion.h2>
                <motion.h3
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-4xl text-gray-500 md:text-5xl lg:text-5xl font-inter font-bold text-foreground leading-tight">
                  in CSE,
                </motion.h3>
                <motion.h4
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl lg:text-5xl font-inter font-bold text-foreground leading-tight">
                  part-time Developer
                </motion.h4>
              </div>

              {/* Description with Read More functionality */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-4 text-foreground font-inter">

                <p className="text-lg leading-relaxed">
                  I&apos;m <span className="font-bold text-primary">Dhruv Narayan Tiwari</span>, a
                  <span className="font-bold"> UI/UX Designer</span> and
                  <span className="font-bold"> Frontend Developer</span> from India.
                  I hold a <span className="font-bold">Bachelors degree in Computer Science</span> and have previously collaborated with startups and clients as a
                  <span className="font-bold"> freelancer</span>.
                </p>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="space-y-4 hidden sm:inline-block overflow-hidden">
                  <p className="text-lg leading-relaxed">
                    My experience includes designing and developing full-stack products like
                    <span className="font-bold"> The Brain Room</span> a productivity and idea management platform and an <span className="font-bold">Environmental Pollutants Dashboard </span>
                    that visualizes real-time environmental data using React and Node.js.
                    I&apos;ve worked with startups such as <span className="font-bold">Vyapari Sang </span>
                    and <span className="font-bold">Xeonic</span>, delivering user-focused design systems and scalable web solutions.
                    As the <span className="font-bold">UI/UX Lead at GDSC</span>, I led a team whose startup idea
                    won a <span className="font-bold">national award in 2023</span>.
                  </p>
                  <p className="text-lg leading-relaxed">
                    I specialize in tools & technologies like <span className="font-bold">Figma, Framer, Illustrator Protopie, Spline, React.js, Node.js, Tailwind CSS,</span>
                    and <span className="font-bold">JavaScript, Github, CI/CD, Vercel, Render, Postman, MongoDB, Jira.
                    </span>
                  </p>
                </motion.div>
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="space-y-4 overflow-hidden">
                      <p className="text-lg leading-relaxed">
                        My experience includes designing and developing full-stack products like
                        <span className="font-bold"> The Brain Room</span> a productivity and idea management platform and an <span className="font-bold">Environmental Pollutants Dashboard </span>
                        that visualizes real-time environmental data using React and Node.js.
                        I&apos;ve worked with startups such as <span className="font-bold">Vyapari Sang </span>
                        and <span className="font-bold">Xeonic</span>, delivering user-focused design systems and scalable web solutions.
                        As the <span className="font-bold">UI/UX Lead at GDSC</span>, I led a team whose startup idea
                        won a <span className="font-bold">national award in 2023</span>.
                      </p>
                      <p className="text-lg leading-relaxed">
                        I specialize in tools & technologies like <span className="font-bold">Figma, Framer, Illustrator Protopie, Spline, React.js, Node.js, Tailwind CSS,</span>
                        and <span className="font-bold">JavaScript, Github, CI/CD, Vercel, Render, Postman, MongoDB, Jira.
                        </span>
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="sm:hidden font-bold text-muted-foreground hover:text-primary active:text-primary no-underline transition-colors duration-300"
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                </button>

              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Skills & Interest Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full max-w-7xl mx-auto px-4 py-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

            {/* Skills & Interest */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6">

              <h2 className="text-2xl font-inter font-semibold text-foreground">Skills & Interest</h2>

              <div className="space-y-4 text-foreground font-inter">
                <p className="leading-relaxed">
                  I enjoy growing and evolving my thoughts, skills, and
                  approaches to tackle the ever-changing challenges and
                  demands of our world. I flourish in ambitious, proactive
                  teams that prioritize ethical product development and
                  foster inclusive cultures.
                </p>

                <p className="leading-relaxed">
                  My design journey encompasses various disciplines
                  such as product and visual design, storytelling,
                  research, prototyping, wireframing, and data
                  visualisation. Additionally, I find joy in exploring
                  information design, making educational content, and
                  illustration.
                </p>

                <p className="leading-relaxed">
                  In my free time, I absolutely love going on adventures
                  on bike, especially taking long rides on highways and
                  slopes. While the traffic can be horrible, I can be in
                  on the road for hours, and I never seem to get tired of
                  it. Riding just fills me with energy and happiness!
                </p>
              </div>

              {/* Interest Images - Portrait Layout */}
              <div className="grid grid-cols-4 gap-3 mt-8">
                <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden">
                  <Image
                    src="/phd_1.jpg" // Replace with actual images
                    alt="Interest 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden">
                  <Image
                    src="/phd_2.jpg" // Replace with actual images
                    alt="Interest 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden">
                  <Image
                    src="/phd_3.jpg" // Replace with actual images
                    alt="Interest 3"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden">
                  <Image
                    src="/phd_4.jpg" // Replace with actual images
                    alt="Interest 4"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-inter font-semibold text-foreground">Experience</h2>

              <div className="space-y-8">
                {/* DevGrowth Solutions */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground font-inter">DevRipples Infotech Pvt. Ltd.</h3>
                  <p className="text-sm text-muted-foreground">August 2025 - Present (Indore)</p>
                  <p className="text-sm text-foreground">
                    Leading end-to-end product design initiatives, translating business goals into intuitive user experiences, mentoring designers, and collaborating cross-functionally to deliver impactful, user-centered digital products.
                  </p>
                </div>

                {/* AbC@ Xyz.com */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground font-inter">Xeonic</h3>
                  <p className="text-sm text-muted-foreground">July - November 2024</p>
                  {/* <p className="text-sm text-foreground">
                    Product Design - Creating mid-fidelity wireframes - high fidelity wireframes.
                  </p> */}
                </div>

                {/* XYZ * abc.com Solutions */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground font-inter">Vyapari Sang</h3>
                  <p className="text-sm text-muted-foreground">August 2023 - November 2024</p>
                  {/* <p className="text-sm text-foreground">
                    Product Design - Creating mid-fidelity wireframes.
                  </p> */}
                </div>

                {/* AbC@ Xyz.com */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground font-inter">Google Developers Student Club</h3>
                  <p className="text-sm text-muted-foreground">September 2023 - 2024</p>
                  {/* <p className="text-sm text-foreground">
                    Product Design - Creating mid-fidelity wireframes - high fidelity wireframes.
                  </p> */}
                </div>

                {/* XYZ * abc.com Solutions */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground font-inter">Vyapari Sang</h3>
                  <p className="text-sm text-muted-foreground">August 2023 - November 2024</p>
                  {/* <p className="text-sm text-foreground">
                    Product Design - Creating mid-fidelity wireframes.
                  </p> */}
                </div>

                {/* XYZ * abc.com Solutions */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground font-inter">Graphic Design and Content Writing</h3>
                  <p className="text-sm text-muted-foreground">February 2020 - April 2022</p>
                  {/* <p className="text-sm text-foreground">
                    Product Design - Creating mid-fidelity wireframes.
                  </p> */}
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-inter font-semibold text-foreground">Education</h2>

              <div className="space-y-6">
                {/* LNCT */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground font-inter">Lakshmi Narain College of Technology</h3>
                  <p className="text-sm text-muted-foreground">2022 - 2025</p>
                  <p className="text-sm text-foreground">B.tech in Computer Science & Engineering</p>
                </div>

                {/* Shri Vaishnav */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground font-inter">Shri Vaishnav Polytechnic College</h3>
                  <p className="text-sm text-muted-foreground">2019 - 2022</p>
                  <p className="text-sm text-foreground">Diploma in Computer Science & Engineering</p>
                </div>
              </div>
              {/* Contact Section under Experience */}
              <div className="space-y-6 pt-8">
                <h2 className="text-2xl font-inter font-semibold text-foreground">Contact</h2>

                <div className="space-y-4">
                  {/* Email */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 font-inter">Email</h4>
                    <a
                      href="mailto:dhruvtiwari.1130@gmail.com"
                      className="text-foreground hover:text-primary transition-colors duration-300"
                    >
                      dhruvtiwari.1130@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3 font-inter">Socials</h4>
                <div className="flex items-center my-auto space-x-6">
                  <a
                    href="https://instagram.com/dhruv_the_el_pee_da"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors duration-300"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/dhruvux"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors duration-300"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://www.behance.net/dhruvui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors duration-300"
                  >
                    <Image src="behance_dark.svg" width={28} height={28} alt="Behance Logo" className="dark:hidden inline-block" />
                    <Image src="behance_light.svg" width={28} height={28} alt="Behance Logo" className="hidden dark:inline-block" />
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.section>

        {/* Footer Copyright */}
        <motion.footer
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full max-w-9xl mx-auto px-4 py-8"
        >
          <div className="flex justify-end">
            <p className="text-sm text-foreground">© 2025 - All Rights Reserved</p>
          </div>
        </motion.footer>
      </motion.main>


      {/* ✅ Animated Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            // ये प्रॉपर्टीज़ लेफ्ट-साइड स्लाइड-इन इफ़ेक्ट के लिए अपडेट की गई हैं
            initial={{ x: "100%" }} // स्क्रीन के लेफ्ट से बाहर शुरू करें
            animate={{ x: 0 }} // स्क्रीन पर एंटर करें
            exit={{ x: "-100%" }} // स्क्रीन के लेफ्ट से बाहर निकलें
            transition={{ duration: 0.4, ease: "easeInOut" }} // एक स्मूथ ट्रांजीशन के लिए
            className="fixed inset-0 z-[100] bg-primary text-white"
          >
            {/* Close Button */}
            <button>
              <ArrowBigDown className=""/>
            </button>

            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-12 right-6 z-[101]"
              aria-label="Close menu">
              <X size={26} />
            </button>

            {/* Menu Links */}
            <div className="flex h-screen w-screen flex-col items-end justify-center space-y-10 pr-8 sm:pr-16">
              <Link href="/about" className="text-4xl font-semibold hover:opacity-80">About</Link>
              <Link href="/projects" className="text-4xl font-semibold hover:opacity-80">Projects</Link>
              <Link
                href="https://drive.google.com/file/d/12niEK0OIJFSsmz3T9NHv3khiqOONejkK/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl font-semibold hover:opacity-80">
                Resume
              </Link>
              <Link href="/#footer" className="text-4xl font-semibold hover:opacity-80" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
              <Link
                href="https://calendly.com/dhruvtiwari-1130/booktheslot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl font-semibold hover:opacity-80">
                Book a call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}