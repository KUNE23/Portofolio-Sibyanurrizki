import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { GithubLogo } from "./icons";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({ title, description, image, technologies, liveUrl, githubUrl }: ProjectCardProps) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-accent transition-all hover:border-primary/50">
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-accent">
        <Image src={image} alt={title} className="object-cover transition-transform duration-300 group-hover:scale-105" fill />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          {liveUrl && (
            <Button variant="default" className="rounded-full" asChild>
              {/* <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" />
                Live Demo
              </a> */}
            </Button>
          )}
          {githubUrl && (
            <Button variant="outline" className="rounded-full shadow-none" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubLogo className="mr-1 h-4 w-4" />
                View Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
      image: "/e-commerce.png",
      technologies: ["PHP", "Laravel", "Livewire", "Jestream", "MySql", "Javascript", "Bootstrap", "API"],
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/KUNE23/E-Commerce-with-Admin-Page",
      target: "_blank",
    },
    {
      title: "Catatku",
      description:
        "A smart task management application that leverages Artificial Intelligence (AI) to categorize, prioritize, and suggest optimal task scheduling. This project aims to streamline personal and professional productivity through intelligent organization.",
      image: "/catatku.png",
      technologies: ["PHP", "Laravel", "Livewire", "Breeze", "MySql", "Javascript", "TailwindCss", "API"],
      liveUrl: "https://ai-taskmanager.com",
      githubUrl: "https://github.com/KUNE23/Catatku",
    },
    {
      title: "BB-Code Generator",
      description:
        "A feature-rich chat application designed for real-time communication. It incorporates functionalities such as real-time messaging, file sharing, and video calls, providing a comprehensive platform for interactive user experiences.",
      image: "/bbcode.png",
      technologies: ["HTML", "CSS", "Javascript"],
      liveUrl: "https://chatapp-demo.com",
      githubUrl: "https://github.com/KUNE23/IrRespond",
    },
    {
      title: "InventoryApplication",
      description:
        "An AI image generator application that utilizes a sophisticated model to produce images based on user-provided prompts. This project demonstrates the integration of artificial intelligence for creative content generation.",
      image: "/inventaris.png",
      technologies: ["PHP", "Laravel", "MySql", "Javascript", "Bootstrap"],
      liveUrl: "https://ai-image-generator.com",
      githubUrl: "https://github.com/KUNE23/InventarisApp",
    },
    {
      title: "KasirApplication",
      description: "A robust point-of-sale (POS) and inventory management system designed to streamline product data, transactions, and user management. It provides a comprehensive solution for managing sales and stock efficiently.",
      image: "/kasir.png",
      technologies: ["PHP", "Laravel", "MySql", "Javascript", "Bootstrap"],
      liveUrl: "https://ai-image-generator.com",
      githubUrl: "https://github.com/KUNE23/almart",
    },
  ];

  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Projects
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Featured Work</h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">Showcasing some of my best projects and technical achievements</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
