import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from "framer-motion";

interface ProjectCard {
  id: string;
  title: string;
  readTime: string;
  image: string;
  caseStudy?: string;
  viewProject?: boolean;
  behanceLink: string;
  grad?: boolean;
}

const FeaturedWork: React.FC = () => {
  const projects: ProjectCard[] = [
    {
      id: '1',
      title: 'Vyapari Sang',
      readTime: '17 min Read',
      image: '/phd_1.png',
      caseStudy: 'Case Study 01',
      viewProject: true,
      behanceLink: 'https://www.behance.net/gallery/236124553/Vyapari-Sang',
      grad: false,
    },
    {
      id: '2',
      title: 'Xeonic',
      readTime: '8 min Read',
      image: '/phd_2.png',
      caseStudy: 'Case Study 02',
      behanceLink: 'https://www.behance.net/gallery/205515587/Xeonic',
      grad: false,
    },
    {
      id: '3',
      title: 'Macros',
      readTime: '5 min Read',
      image: '/phd_3.png',
      caseStudy: 'Case Study 03',
      behanceLink: 'https://www.behance.net/gallery/218717433/Macros-Food-Tracker-App-(UI-UX-Redesign)',
      grad: true,
    },
    {
      id: '4',
      title: 'IRCTC Redesign',
      readTime: '12 min Read',
      image: '/phd_4.png',
      caseStudy: 'Case Study 04',
      viewProject: true,
      behanceLink: 'https://www.behance.net/gallery/218713471/IRCTC-App-Redesign',
      grad: false,
    }
  ];

  const ReadTimeBar = ({ readTime }: { readTime: string }) => (
    <div className="absolute top-0 left-0 right-0 bg-black/20 text-white font-semibold font-inter text-xs py-2 px-4 backdrop-blur-sm overflow-hidden">
      <div className="flex animate-marquee space-x-6 min-w-max">
        {[...Array(2)].map((_, j) => (
          <div key={j} className="flex items-center space-x-2">
            {[...Array(12)].map((_, i) => (
              <React.Fragment key={`${j}-${i}`}>
                <span className="whitespace-nowrap">{readTime}</span>
                <span className="text-primary">★</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );

  const ProjectCardComponent = ({ project, isFullWidth }: { project: ProjectCard; isFullWidth: boolean }) => (
    <a
      href={project.behanceLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`block relative group rounded-3xl overflow-hidden h-[400px] sm:h-[832px]
      ${isFullWidth ? 'sm:col-span-2' : ''}`}>
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${project.image})` }}>
        <div className={`absolute inset-0 ${project.grad ? `bg-gradient-to-t from-black/80 via-black/20 to-transparent` : ''}`} />
      </div>

      {/* Read Time Bar */}
      <ReadTimeBar readTime={project.readTime} />

      {/* Content */}
      <div className="relative flex justify-between items-end p-4 sm:p-6 md:p-8 lg:p-10 h-full">
        <div className="text-white flex-1">
          {project.caseStudy && (
            <p className="text-xs sm:text-sm md:text-base text-white/80 mb-2 sm:mb-3 font-medium">
              {project.caseStudy}
            </p>
          )}
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
            {project.title}
          </h3>
        </div>

        <div className="ml-4 sm:ml-6">
          <div className="inline-flex items-center space-x-2 bg-white text-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold transition-colors group/btn">
            <span className="text-sm sm:text-base">View Case Study</span>
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </a>
  );

  return (
    <section className="w-full py-16 sm:py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[42px] sm:text-6xl md:text-7xl lg:text-[154px] text-center mt-10 sm:mt-16 font-whyte">
          Featured Work
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-1 sm:mt-10">
          <ProjectCardComponent project={projects[0]} isFullWidth={true} />
          <ProjectCardComponent project={projects[1]} isFullWidth={false} />
          <ProjectCardComponent project={projects[2]} isFullWidth={false} />
          <ProjectCardComponent project={projects[3]} isFullWidth={true} />
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedWork;