"use client";

import Image from "next/image";
import { useState } from "react";
import profilePic from "../public/ben4.png";
import {
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";

// Tech Badge Component
function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-4 py-2 bg-orange-50 text-orange-700 rounded-full text-m font-medium border border-orange-200">
      {children}
    </span>
  );
}

// Media Carousel Component
function MediaCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Placeholder media items - replace with actual paths
  const mediaItems = [
    { type: "video", src: "/snapfolia-go.mp4" },
    { type: "image", src: "/snap1.jpg" },
    { type: "image", src: "/snap2.jpg" },
    { type: "image", src: "/snap3.jpg" },
    { type: "image", src: "/snap4.jpg" },
    { type: "image", src: "/snap5.jpg" },
    { type: "image", src: "/snap7.jpg" },
    { type: "image", src: "/snap8.jpg" },
    { type: "image", src: "/snap6.jpg" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + mediaItems.length) % mediaItems.length
    );
  };

  const currentMedia = mediaItems[currentIndex];

  return (
    <div className="relative">
      {/* Main Display */}
      <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-2xl aspect-[9/16] max-w-sm mx-auto">
        {currentMedia.type === "video" ? (
          <video
            key={currentIndex}
            src={currentMedia.src}
            controls
            autoPlay // Add autoplay
            muted // Required for autoplay to work in browsers
            loop // Optional: loop the video
            className="w-full h-full object-contain bg-black"
            poster="/projects/snapfolia-thumbnail.png"
            playsInline
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={currentMedia.src}
            alt={`Snapfolia Go screenshot ${currentIndex}`}
            fill
            className="object-contain" // Also change this from object-cover to object-contain
          />
        )}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all backdrop-blur-sm"
          aria-label="Previous"
        >
          <ChevronLeft className="size-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all backdrop-blur-sm"
          aria-label="Next"
        >
          <ChevronRight className="size-6" />
        </button>

        {/* Media Type Indicator */}
        {currentMedia.type === "video" && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-orange-600 text-white text-xs font-semibold rounded-full flex items-center gap-1">
            <Play className="size-3" />
            VIDEO
          </div>
        )}
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
        {mediaItems.map((item, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`flex-shrink-0 relative w-16 h-24 rounded-lg overflow-hidden border-2 transition-all ${
              currentIndex === index
                ? "border-orange-600 scale-105"
                : "border-slate-200 hover:border-orange-300 opacity-60 hover:opacity-100"
            }`}
          >
            {item.type === "video" ? (
              <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                <Play className="size-6 text-white" />
              </div>
            ) : (
              <Image
                src={item.src}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            )}
          </button>
        ))}
      </div>

      {/* Counter */}
      <p className="text-center text-sm text-slate-500 mt-2">
        {currentIndex + 1} / {mediaItems.length}
      </p>
    </div>
  );
}

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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-16 text-center">
            Projects
          </h2>

          {/* Snapfolia Go Project */}
<div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl shadow-xl overflow-hidden">
  {/* Changed to a Grid that handles both columns and rows explicitly */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6 p-8 lg:p-12">
    
    {/* --- ROW 1: HEADERS --- */}

    {/* Top Left: Title */}
    {/* lg:row-start-1 ensures it sits at the top on desktop */}
    <div className="lg:col-start-1 lg:row-start-1">
      <h3 className="text-4xl font-bold text-slate-900">
        Snapfolia Go
      </h3>
    </div>

    {/* Top Right: "About" Header */}
   
    <div className="lg:col-start-2 lg:row-start-1 flex items-end">

      <h4 className="text-2xl font-semibold text-slate-900">
        About
      </h4>
    </div>

    {/* --- ROW 2: CONTENT --- */}

    <div className="lg:col-start-1 lg:row-start-2">
      <MediaCarousel />
    </div>

    <div className="lg:col-start-2 lg:row-start-2 flex flex-col gap-6">
      <p className="text-slate-600 leading-relaxed text-xl">
        A live leaf classifier mobile app dedicated to FAITH
        Colleges, Marian Orchard and Batangas Lake Lands. Derived
        from Snapfolia https://snapfolia.vercel.app, Snapfolia Go is
        a mobile app that provides real-time results simply by
        scanning a leaf with the device’s camera. The app aims to
        offer a better user experience, delivering live results and
        object tracking.
      </p>

      <div>
        <h4 className="text-2xl font-semibold text-slate-900 mb-3">
          Tech Stack
        </h4>
        <div className="flex flex-wrap gap-2">
          <TechBadge>Dart</TechBadge>
          <TechBadge>Flutter</TechBadge>
          <TechBadge>Yolov8</TechBadge>
          <TechBadge>TensorFlow lite</TechBadge>
          <TechBadge>Flutter_vision</TechBadge>
          <TechBadge>Python</TechBadge>
          <TechBadge>Pytorch</TechBadge>
        </div>
      </div>
    </div>

  </div>
</div>
        </div>
      </section>
    </div>
  );
}
