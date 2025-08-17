import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from "framer-motion";

interface ProjectCard {
    id: string;
    title: string;
    description: string;
    tags: string[];
    readTime: string;
    image: string;
    caseStudy?: string;
    viewProject?: boolean;
}

const FeaturedWork: React.FC = () => {
    const projects: ProjectCard[] = [
        {
            id: '1',
            title: 'Talent Linker: A job Search Platform',
            description: 'expected to serve 1M Active Users in the US Market',
            tags: ['Mobile', 'Web', 'Expected to be 1M MAU'],
            readTime: '6 min Read',
            image: '/phd_1.jpg',
            caseStudy: 'Case Study 04',
            viewProject: true
        },
        {
            id: '2',
            title: 'Empowered 500k users with AI Enhanced ResumeBuilder',
            description: '',
            tags: ['Mobile', 'Web', 'Expected to be 1M MAU'],
            readTime: '8 min Read',
            image: '/phd_2.jpg',
            caseStudy: 'Case Study 02'
        },
        {
            id: '3',
            title: 'Empowered 500k users with AI Enhanced ResumeBuilder',
            description: '',
            tags: ['Mobile', 'Web', 'Expected to be 1M MAU'],
            readTime: '8 min Read',
            image: '/phd_3.jpg',
            caseStudy: 'Case Study 02'
        },
        {
            id: '4',
            title: 'Talent Linker: A job Search Platform',
            description: 'expected to serve 1M Active Users in the US Market',
            tags: ['Mobile', 'Web', 'Expected to be 1M MAU'],
            readTime: '6 min Read',
            image: '/phd_4.jpg',
            caseStudy: 'Case Study 04',
            viewProject: true
        }
    ];

    const ReadTimeBar = ({ readTime }: { readTime: string }) => (
        <div className="absolute top-0 left-0 right-0 bg-foreground/20 text-white font-semibold font-inter text-xs py-2 px-4 backdrop-blur-sm overflow-hidden">
          <div className="flex animate-marquee space-x-6 min-w-max">
            {[...Array(2)].map((_, j) => (
              <div key={j} className="flex items-center space-x-2">
                {[...Array(12)].map((_, i) => (
                  <React.Fragment key={`${j}-${i}`}>
                    <span className="whitespace-nowrap">{readTime}</span>
                    <span className="text-yellow-400">★</span>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
    );

    const ProjectCardComponent = ({ project, isFullWidth }: { project: ProjectCard; isFullWidth: boolean }) => (
        <div className={`relative group cursor-pointer rounded-xl overflow-hidden ${isFullWidth ? 'col-span-2' : 'col-span-1'}`} style={{ minHeight: '832px' }}>
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${project.image})` }}
            >
            </div>

            {/* Read Time Bar */}
            <ReadTimeBar readTime={project.readTime} />

            {/* Content */}
            <div className="relative flex flex-col justify-end p-8" style={{ minHeight: '832px' }}>
                <div className="text-background">
                    {project.caseStudy && (
                        <p className="text-foreground/80 mb-2">{project.caseStudy}</p>
                    )}

                    <h3 className="text-2xl font-bold mb-2 leading-tight">
                        {project.title}
                        {project.description && (
                            <span className="block text-xl font-normal mt-1">{project.description}</span>
                        )}
                    </h3>

                    <div className="flex items-center space-x-4 mb-4">
                        {project.tags.map((tag, index) => (
                            <React.Fragment key={index}>
                                <span className="text-sm text-foreground/90">● {tag}</span>
                                {index < project.tags.length - 1 && <span className="text-foreground/60">●</span>}
                            </React.Fragment>
                        ))}
                    </div>

                    <button className="inline-flex items-center space-x-2 bg-primary text-background px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors group/btn">
                        <span>View Case Study</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <section className="w-full py-20">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-[160px] flex text-center items-center justify-center mt-16 font-whyte">
                    Featured Work
                </motion.h1>

                {/* Projects Grid */}
                <motion.div 
                initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 gap-6">
                    {/* Full Width Card 1 */}
                    <ProjectCardComponent project={projects[0]} isFullWidth={true} />

                    {/* Two Half Width Cards */}
                    <ProjectCardComponent project={projects[1]} isFullWidth={false} />
                    <ProjectCardComponent project={projects[2]} isFullWidth={false} />

                    {/* Full Width Card 2 */}
                    <ProjectCardComponent project={projects[3]} isFullWidth={true} />
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedWork;