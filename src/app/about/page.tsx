"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Linkedin, ExternalLink } from 'lucide-react';

export default function About() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full items-center justify-center px-4 pt-24 md:pt-32 lg:pt-28"
    >
      {/* Hero Section with Photo and Description */}
      <section className="w-full max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-[704px] rounded-3xl overflow-hidden">
              <Image
                src="/me.png" // Replace with your actual photo
                alt="Dhruv Narayan Tiwari"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Title */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-inter font-bold text-foreground leading-tight"
              >
                Product Designer,
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-inter font-bold text-foreground leading-tight"
              >
                Graduated
              </motion.h2>
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-inter font-bold text-foreground leading-tight"
              >
                in CSE,
              </motion.h3>
              <motion.h4
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-inter font-bold text-foreground leading-tight"
              >
                part-time Developer
              </motion.h4>
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4 text-foreground font-inter"
            >
              <p className="text-lg leading-relaxed">
                I&apos;m Dhruv, a Product designer from India and free-time Developer. I am a 
                graduate in Computer Science and Engineering from LNCT (Lakshmi 
                Narain College of Technology) Bhopal, and have previously worked as a{" "}
                <span className="font-bold text-primary">product designer</span> with DevGrowth Solutions, Bhopal, IN (Hybrid).
              </p>
              
              <p className="text-lg leading-relaxed">
                My experience so far includes building designs from scratch for 1m+ 
                users, crafting product visions while collaborating with cross functional 
                partners, building narratives and pitches to senior leadership.
              </p>
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
            className="space-y-6"
          >
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
                <h3 className="font-semibold text-foreground font-inter">DevGrowth Solutions</h3>
                <p className="text-sm text-muted-foreground">• 2023 - 2024 (Hybrid)</p>
                <p className="text-sm text-foreground">
                  Product Design - Creating mid-fidelity wireframes - high fidelity wireframes - 
                  interactive prototypes across four platforms tailored specifically for the human resources 
                  industry.
                </p>
              </div>

              {/* AbC@ Xyz.com */}
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground font-inter">AbC@ Xyz.com</h3>
                <p className="text-sm text-muted-foreground">• 2021 - 2023 (Remote)</p>
                <p className="text-sm text-foreground">
                  Product Design - Creating mid-fidelity wireframes - high fidelity wireframes.
                </p>
              </div>

              {/* XYZ * abc.com Solutions */}
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground font-inter">XYZ * abc.com Solutions</h3>
                <p className="text-sm text-muted-foreground">• 2023 - 2024 (Hybrid)</p>
                <p className="text-sm text-foreground">
                  Product Design - Creating mid-fidelity wireframes.
                </p>
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

                {/* Socials */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 font-inter">Socials</h4>
                  <div className="flex space-x-4">
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
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
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
  );
}