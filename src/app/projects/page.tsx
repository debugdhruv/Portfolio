import { fetchProjects } from "@/lib/notion";
import { Metadata } from "next";
import ProjectClient from "@/components/ProjectClient";
export const metadata: Metadata = {
  title: "My Projects",
  description: "Showcase of my projects",
};


export const revalidate = 0;

export default async function ProjectsPage() {
  const projects = await fetchProjects();
  
  return <ProjectClient projects={projects} />;
}