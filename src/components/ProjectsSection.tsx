import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";
import { useRef, useState } from "react";

const ProjectsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 800;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with Stripe integration managing 10,000+ users and 50M+ bookings",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      year: "2024",
      duration: "6 months",
    },
    {
      title: "Social Media Analytics Dashboard",
      description: "Real-time analytics platform with interactive data visualizations",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["Vue.js", "Python", "PostgreSQL", "D3.js"],
      year: "2024",
      duration: "4 months",
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat with AI-powered assistance and video consultations",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&h=400&fit=crop",
      tags: ["React", "WebSocket", "OpenAI", "Redis"],
      year: "2023",
      duration: "5 months",
    },
    {
      title: "Project Management Tool",
      description: "Collaborative workspace with task automation and team analytics",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&h=400&fit=crop",
      tags: ["Angular", "Java Spring", "MySQL", "Microservices"],
      year: "2023",
      duration: "8 months",
    },
    {
      title: "Video Streaming Platform",
      description: "High-performance streaming service with adaptive bitrate and CDN delivery",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&h=400&fit=crop",
      tags: ["React", "AWS", "Redis", "WebRTC"],
      year: "2023",
      duration: "12 months",
    },
    {
      title: "Healthcare Portal",
      description: "Secure patient management system with HIPAA compliance",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
      tags: ["React", "Ruby on Rails", "PostgreSQL"],
      year: "2022",
      duration: "10 months",
    },
  ];

  return (
    <section id="projects" className="py-16 relative">
      <div className="w-full px-8">
        {/* Section header */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Featured Projects</h2>
        </div>

        {/* Carousel wrapper with arrows */}
        <div className="relative group/carousel">
          {/* Left Arrow */}
          {showLeftArrow && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-30 h-full w-12 rounded-none bg-background/80 hover:bg-background/95 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
          )}

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth pb-8 -mx-2 px-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          {/* Right Arrow */}
          {showRightArrow && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-30 h-full w-12 rounded-none bg-background/80 hover:bg-background/95 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
