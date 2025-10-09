// import React from 'react';
// import { ArrowUpRight } from 'lucide-react';
// import { motion } from "framer-motion";

// interface ProjectCard {
//     id: string;
//     title: string;
//     description: string;
//     tags: string[];
//     readTime: string;
//     image: string;
//     caseStudy?: string;
//     viewProject?: boolean;
// }

// const FeaturedWork: React.FC = () => {
//     const projects: ProjectCard[] = [
//         {
//             id: '1',
//             title: 'Vyapari Sang: Connecting businesses',
//             description: 'Empower SMEs to penetrate new markets by connecting with distributors and super stockists across regions.',
//             tags: ['Mobile'],
//             readTime: '10 min Read',
//             image: '/phd_1.png',
//             caseStudy: 'Case Study 01',
//             viewProject: true
//         },
//         {
//             id: '2',
//             title: 'Empowered 500k users with AI Enhanced ResumeBuilder',
//             description: '',
//             tags: ['Mobile', 'Web', 'Expected to be 1M MAU'],
//             readTime: '8 min Read',
//             image: '/phd_2.png',
//             caseStudy: 'Case Study 02'
//         },
//         {
//             id: '3',
//             title: 'Empowered 500k users with AI Enhanced ResumeBuilder',
//             description: '',
//             tags: ['Mobile', 'Web', 'Expected to be 1M MAU'],
//             readTime: '8 min Read',
//             image: '/phd_3.png',
//             caseStudy: 'Case Study 03'
//         },
//         {
//             id: '4',
//             title: 'Talent Linker: A job Search Platform',
//             description: 'expected to serve 1M Active Users in the US Market',
//             tags: ['Mobile', 'Web', 'Expected to be 1M MAU'],
//             readTime: '6 min Read',
//             image: '/phd_4.png',
//             caseStudy: 'Case Study 04',
//             viewProject: true
//         }
//     ];

//     const ReadTimeBar = ({ readTime }: { readTime: string }) => (
//         <div className="absolute top-0 left-0 right-0 bg-foreground/20 text-white font-semibold font-inter text-xs py-2 px-4 backdrop-blur-sm overflow-hidden">
//           <div className="flex animate-marquee space-x-6 min-w-max">
//             {[...Array(2)].map((_, j) => (
//               <div key={j} className="flex items-center space-x-2">
//                 {[...Array(12)].map((_, i) => (
//                   <React.Fragment key={`${j}-${i}`}>
//                     <span className="whitespace-nowrap">{readTime}</span>
//                     <span className="text-yellow-400">★</span>
//                   </React.Fragment>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>
//     );

//     const ProjectCardComponent = ({ project, isFullWidth }: { project: ProjectCard; isFullWidth: boolean }) => (
//         <div className={`relative group cursor-pointer rounded-3xl overflow-hidden ${isFullWidth ? 'col-span-2' : 'col-span-1'}`} style={{ minHeight: '832px' }}>
//             {/* Background Image */}
//             <div
//                 className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
//                 style={{ backgroundImage: `url(${project.image})` }}>
//                 {/* Dark gradient overlay */}
//                 <div className="absolute inset-0 background bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
//             </div>

//             {/* Read Time Bar */}
//             <ReadTimeBar readTime={project.readTime} />

//             {/* Content */}
//             <div className="relative flex justify-between items-end p-8" style={{ minHeight: '832px' }}>
//                 <div className="text-white flex-1">
//                     {project.caseStudy && (
//                         <p className="text-sm text-white/80 mb-3 font-medium">{project.caseStudy}</p>
//                     )}

//                     <h3 className="text-4xl font-bold mb-4 leading-tight">
//                         {project.title}
//                         {project.description && (
//                             <span className="block text-2xl font-normal mt-2 text-white/90">{project.description}</span>
//                         )}
//                     </h3>

//                     <div className="flex items-center space-x-1 mb-6">
//                         {project.tags.map((tag, index) => (
//                             <React.Fragment key={index}>
//                                 <span className="text-sm text-white/90 flex items-center">
//                                     <span className="w-1.5 h-1.5 bg-white rounded-full mx-1"></span>
//                                     {tag}
//                                 </span>
//                                 {/* {index < project.tags.length - 1 && <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>} */}
//                             </React.Fragment>
//                         ))}
//                     </div>
//                 </div>

//                 <div className="ml-8">
//                     <button className="inline-flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors group/btn">
//                         <span>View Case Study</span>
//                         <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );

//     return (
//         <section className="w-full py-20">
//             <div className="max-w-7xl mx-auto">
//                 {/* Section Title */}
//                 <motion.h1
//                     initial={{ opacity: 0, y: 50 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 1, ease: "easeOut" }}
//                     viewport={{ once: true }}
//                     className="text-5xl sm:text-6xl md:7xl lg:text-[160px] flex text-center items-center justify-center mt-16 font-whyte">
//                     Featured Work
//                 </motion.h1>

//                 {/* Projects Grid */}
//                 <motion.div 
//                 initial={{ opacity: 0, y: 50 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 1, ease: "easeOut" }}
//                     viewport={{ once: true }}
//                     className="grid grid-cols-2 gap-6">
//                     {/* Full Width Card 1 */}
//                     <ProjectCardComponent project={projects[0]} isFullWidth={true} />

//                     {/* Two Half Width Cards */}
//                     <ProjectCardComponent project={projects[1]} isFullWidth={false} />
//                     <ProjectCardComponent project={projects[2]} isFullWidth={false} />

//                     {/* Full Width Card 2 */}
//                     <ProjectCardComponent project={projects[3]} isFullWidth={true} />
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default FeaturedWork;






// import React from 'react';
// import { ArrowUpRight } from 'lucide-react';
// import { motion } from "framer-motion";

// interface ProjectCard {
//     id: string;
//     title: string;
//     description: string;
//     tags: string[];
//     readTime: string;
//     image: string;
//     caseStudy?: string;
//     viewProject?: boolean;
// }

// const FeaturedWork: React.FC = () => {
//     const projects: ProjectCard[] = [
//         {
//             id: '1',
//             title: 'Vyapari Sang: Connecting businesses',
//             description: 'Empower SMEs to penetrate new markets by connecting with distributors and super stockists across regions.',
//             tags: ['Mobile'],
//             readTime: '10 min Read',
//             image: '/phd_1.png',
//             caseStudy: 'Case Study 01',
//             viewProject: true
//         },
//         {
//             id: '2',
//             title: 'Empowered 500k users with AI Enhanced ResumeBuilder',
//             description: '',
//             tags: ['Mobile', 'Web', 'Expected to be 1M MAU'],
//             readTime: '8 min Read',
//             image: '/phd_2.png',
//             caseStudy: 'Case Study 02'
//         },
//         {
//             id: '3',
//             title: 'Empowered 500k users with AI Enhanced ResumeBuilder',
//             description: '',
//             tags: ['Mobile', 'Web', 'Expected to be 1M MAU'],
//             readTime: '8 min Read',
//             image: '/phd_3.png',
//             caseStudy: 'Case Study 03'
//         },
//         {
//             id: '4',
//             title: 'Talent Linker: A job Search Platform',
//             description: 'expected to serve 1M Active Users in the US Market',
//             tags: ['Mobile', 'Web', 'Expected to be 1M MAU'],
//             readTime: '6 min Read',
//             image: '/phd_4.png',
//             caseStudy: 'Case Study 04',
//             viewProject: true
//         }
//     ];

//     const ReadTimeBar = ({ readTime }: { readTime: string }) => (
//         <div className="absolute top-0 left-0 right-0 bg-foreground/20 text-white font-semibold font-inter text-xs py-2 px-4 backdrop-blur-sm overflow-hidden">
//             <div className="flex animate-marquee space-x-6 min-w-max">
//                 {[...Array(2)].map((_, j) => (
//                     <div key={j} className="flex items-center space-x-2">
//                         {[...Array(12)].map((_, i) => (
//                             <React.Fragment key={`${j}-${i}`}>
//                                 <span className="whitespace-nowrap">{readTime}</span>
//                                 <span className="text-yellow-400">★</span>
//                             </React.Fragment>
//                         ))}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );

//     const ProjectCardComponent = ({ project, isFullWidth }: { project: ProjectCard; isFullWidth: boolean }) => (
//         <div
//             className={`relative group cursor-pointer rounded-3xl overflow-hidden 
//             ${isFullWidth ? 'sm:col-span-2 col-span-1' : 'col-span-1'}`}
//             style={{ minHeight: '480px' }}
//         >
//             <div
//                 className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
//                 style={{ backgroundImage: `url(${project.image})` }}>
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
//             </div>

//             <ReadTimeBar readTime={project.readTime} />

//             <div className="relative flex flex-col justify-end p-6 sm:p-8 sm:min-h-[832px] min-h-[480px]">
//                 <div className="text-white flex-1">
//                     {project.caseStudy && (
//                         <p className="text-sm text-white/80 mb-3 font-medium">{project.caseStudy}</p>
//                     )}

//                     <h3 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
//                         {project.title}
//                         {project.description && (
//                             <span className="block text-xl sm:text-2xl font-normal mt-2 text-white/90">{project.description}</span>
//                         )}
//                     </h3>

//                     <div className="flex flex-wrap items-center space-x-1 mb-6">
//                         {project.tags.map((tag, index) => (
//                             <React.Fragment key={index}>
//                                 <span className="text-sm text-white/90 flex items-center">
//                                     <span className="w-1.5 h-1.5 bg-white rounded-full mx-1"></span>
//                                     {tag}
//                                 </span>
//                             </React.Fragment>
//                         ))}
//                     </div>
//                 </div>

//                 <div>
//                     <button className="inline-flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors group/btn">
//                         <span>View Case Study</span>
//                         <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );

//     return (
//         <section className="w-full py-20">
//             <div className="max-w-7xl mx-auto">
//                 <motion.h1
//                     initial={{ opacity: 0, y: 50 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 1, ease: "easeOut" }}
//                     viewport={{ once: true }}
//                     className="text-5xl sm:text-6xl md:text-7xl lg:text-[160px] text-center mt-16 font-whyte">
//                     Featured Work
//                 </motion.h1>

//                 <motion.div
//                     initial={{ opacity: 0, y: 50 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 1, ease: "easeOut" }}
//                     viewport={{ once: true }}
//                     className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10"
//                 >
//                     <ProjectCardComponent project={projects[0]} isFullWidth={true} />
//                     <ProjectCardComponent project={projects[1]} isFullWidth={false} />
//                     <ProjectCardComponent project={projects[2]} isFullWidth={false} />
//                     <ProjectCardComponent project={projects[3]} isFullWidth={true} />
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default FeaturedWork;








// import React from 'react';
// import { ArrowUpRight } from 'lucide-react';
// import { motion } from "framer-motion";

// interface ProjectCard {
//   id: string;
//   title: string;
// //   description: string;
// //   tags: string[];
//   readTime: string;
//   image: string;
//   caseStudy?: string;
//   viewProject?: boolean;
// }

// const FeaturedWork: React.FC = () => {
//   const projects: ProjectCard[] = [
//     {
//       id: '1',
//       title: 'Vyapari Sang',
//     //   description: 'Empower SMEs to penetrate new markets by connecting with distributors and super stockists across regions.',
//     //   tags: ['Mobile'],
//       readTime: '17 min Read',
//       image: '/phd_1.png',
//       caseStudy: 'Case Study 01',
//       viewProject: true
//     },
//     {
//       id: '2',
//       title: 'Xeonic',
//     //   description: '',
//     //   tags: ['Mobile', 'Web', 'Expected to be 1M MAU'],
//       readTime: '8 min Read',
//       image: '/phd_2.png',
//       caseStudy: 'Case Study 02'
//     },
//     {
//       id: '3',
//       title: 'Macros',
//     //   description: '',
//     //   tags: ['Mobile', 'Web', 'Expected to be 1M MAU'],
//       readTime: '5 min Read',
//       image: '/phd_3.png',
//       caseStudy: 'Case Study 03'
//     },
//     {
//       id: '4',
//       title: 'IRCTC Redesign',
//     //   description: 'expected to serve 1M Active Users in the US Market',
//     //   tags: ['Mobile', 'Web', 'Expected to be 1M MAU'],
//       readTime: '12 min Read',
//       image: '/phd_4.png',
//       caseStudy: 'Case Study 04',
//       viewProject: true
//     }
//   ];

//   const ReadTimeBar = ({ readTime }: { readTime: string }) => (
//     <div className="absolute top-0 left-0 right-0 bg-black/20 text-white font-semibold font-inter text-xs py-2 px-4 backdrop-blur-sm overflow-hidden">
//       <div className="flex animate-marquee space-x-6 min-w-max">
//         {[...Array(2)].map((_, j) => (
//           <div key={j} className="flex items-center space-x-2">
//             {[...Array(12)].map((_, i) => (
//               <React.Fragment key={`${j}-${i}`}>
//                 <span className="whitespace-nowrap">{readTime}</span>
//                 <span className="text-primary">★</span>
//               </React.Fragment>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   const ProjectCardComponent = ({ project, isFullWidth }: { project: ProjectCard; isFullWidth: boolean }) => (
//     <div
//       className={`relative group cursor-pointer rounded-3xl overflow-hidden 
//       ${isFullWidth ? 'sm:col-span-2 col-span-1' : 'col-span-1'}`}
//       style={{ minHeight: '832px' }}>
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
//         style={{ backgroundImage: `url(${project.image})` }}>
//         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
//       </div>

//       {/* Read Time Bar */}
//       <ReadTimeBar readTime={project.readTime} />

//       {/* Content */}
//       <div className="relative flex justify-between items-end p-4 sm:p-6 md:p-8 lg:p-10 h-full">
//         <div className="text-white flex-1">
//           {project.caseStudy && (
//             <p className="text-xs sm:text-sm md:text-base text-white/80 mb-2 sm:mb-3 font-medium">
//               {project.caseStudy}
//             </p>
//           )}

//           <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
//             {project.title}
//           </h3>
//         </div>

//         <div className="ml-4 sm:ml-6">
//           <button className="inline-flex items-center space-x-2 bg-white text-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-white/90 transition-colors group/btn">
//             <span className="text-sm sm:text-base">View Case Study</span>
//             <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <section className="w-full py-16 sm:py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.h1
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="text-4xl sm:text-6xl md:text-7xl lg:text-[154px] text-center mt-10 sm:mt-16 font-whyte">
//           Featured Work
//         </motion.h1>

//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
//           <ProjectCardComponent project={projects[0]} isFullWidth={true} />
//           <ProjectCardComponent project={projects[1]} isFullWidth={false} />
//           <ProjectCardComponent project={projects[2]} isFullWidth={false} />
//           <ProjectCardComponent project={projects[3]} isFullWidth={true} />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedWork;






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
      rel="noopener noreferrer" // Good practice for security when using target="_blank"
      className={`block relative group rounded-3xl overflow-hidden 
      ${isFullWidth ? 'sm:col-span-2 col-span-1' : 'col-span-1'}`}
      style={{ minHeight: '832px' }}>
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${project.image})` }}>
        <div className={`absolute inset-0 ${project.grad ?`bg-gradient-to-t from-black/80 via-black/20 to-transparent` :''}`}  />
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
          {/* ✨ CHANGED: Replaced <button> with <div> to avoid invalid nesting (<a><a> or <a<button>) */}
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[154px] text-center mt-10 sm:mt-16 font-whyte">
          Featured Work
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
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