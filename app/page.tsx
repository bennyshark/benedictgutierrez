"use client";

import Image from "next/image";
import profilePic from "../public/ben4.png";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export default function Home() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <div
        id="home"
        className="min-h-screen w-full flex items-center justify-center px-8"
      >
        <div className="flex flex-col lg:flex-row items-center gap-20 max-w-6xl w-full">
          {/* Text Content */}
          <div className="flex flex-col space-y-8 flex-1">
            {/* Main Heading */}
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                Hi! I'm{" "}
                <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Benedict
                </span>
              </h1>
              <p className="text-2xl lg:text-3xl text-slate-600 font-light mt-6">
                Web & Machine Learning Developer
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              I build scalable web applications, machine learning projects, and
              Ai/Api integrations.
            </p>

            {/* CTA and Social */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
              <button
                onClick={scrollToProjects}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 hover:bg-orange-700"
              >
                <span>Explore My Work</span>
                <ArrowDown className="size-5 group-hover:translate-y-1 transition-transform" />
              </button>

              {/* Social Icons */}
              <div className="flex gap-3">
                <a
                  href="https://github.com/bennyshark"
                  className="p-3 rounded-full border-2 border-slate-200 hover:border-orange-300 hover:bg-orange-50 transition-all group"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="size-5 text-slate-700 group-hover:text-orange-600 transition-colors" />
                </a>
                <a
                  href="https://linkedin.com/in/benedict-gutierrez-15917b333"
                  className="p-3 rounded-full border-2 border-slate-200 hover:border-orange-300 hover:bg-orange-50 transition-all group"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="size-5 text-slate-700 group-hover:text-orange-600 transition-colors" />
                </a>
                <a
                  href="mailto:benedictgutierrezcs25@gmail.com"
                  className="p-3 rounded-full border-2 border-slate-200 hover:border-orange-300 hover:bg-orange-50 transition-all group"
                  aria-label="Email"
                >
                  <Mail className="size-5 text-slate-700 group-hover:text-orange-600 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <Image
              src={profilePic}
              alt="Benedict Gutierrez"
              width={400}
              height={400}
              className="rounded-full bg-slate-300"
              priority
            />
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <section id="projects" className="w-full bg-white py-24 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Projects
          </h2>
        </div>
      </section>
    </div>
  );
}
