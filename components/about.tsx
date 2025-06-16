import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import Image from "next/image";
import { HTMLAttributes } from "react";
import { GithubLogo } from "./icons";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import React from "react";

const About = () => {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="flex flex-col md:flex-row-reverse gap-12">
          <ProfileImage className="hidden md:block" />

          {/* Content */}
          <div className="flex-1 md:text-left">
            <Badge variant="secondary" className="mb-4">
              About Me
            </Badge>
            <ProfileImage className="mt-3 mb-8 block md:hidden" />
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Precision and Performance in Web Application Development</h2>
            <p className="text-muted-foreground mb-6 text-justify">
              As a dedicated full-stack developer, my work revolves around the art and science of building comprehensive digital solutions. I am driven by the belief that every line of code should contribute to a meaningful and intuitive
              user experience. My approach combines meticulous attention to detail with a strategic vision for scalability and performance, ensuring that the applications I build are not only functional but also future-proof.
            </p>
            <div className="flex flex-wrap gap-4 justify-start">
              <a href="https://github.com/kune23" target="_blank">
                <Button className="rounded-full">
                  <GithubLogo />
                  View Github
                </Button>
              </a>
              <a href="public/Alfiansyah_Sibyanurrizki.pdf" target="_blank" download="Alfiansyah_Sibyanurrizki.pdf">
                <Button variant="outline" className="rounded-full">
                  <Download />
                  Download CV
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProfileImage = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-10 w-48 h-48 md:w-64 md:h-64", className)} {...props}>
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-accent">
      <Image src="/my.jpg" alt="" className="object-cover" fill />
    </div>
  </div>
);

export default About;
