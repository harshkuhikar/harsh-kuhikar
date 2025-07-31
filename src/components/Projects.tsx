import React, { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  Github,
  Zap,
  ShoppingCart,
  Recycle,
  TreePine,
  Landmark,
} from "lucide-react";

const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "AI Application (Senaptiq)",
      description:
        "React.js frontend for an AI-based tool with advanced machine learning capabilities. Collaborated with backend team using Node.js to create seamless user experience.",
      tech: ["React.js", "Node.js", "AI/ML", "REST APIs", "SCSS"],
      icon: <Zap className="w-8 h-8" />,
      color: "from-cyan-400 to-blue-500",
      year: "2024",
      status: "Live",
      features: [
        "AI-powered analytics dashboard",
        "Real-time data processing",
        "Interactive data visualizations",
        "Responsive design across devices",
      ],
    },
    {
      id: 2,
      title: "Alibaba-like E-Commerce Platform",
      description:
        "Developed full frontend for a comprehensive B2B ecommerce platform similar to Alibaba. Features include product catalogs, user management, and order processing.",
      tech: ["React.js", "Redux", "Bootstrap", "JavaScript", "PHP"],
      icon: <ShoppingCart className="w-8 h-8" />,
      color: "from-purple-400 to-pink-500",
      year: "2023-2024",
      status: "Production",
      features: [
        "Multi-vendor marketplace",
        "Advanced search & filtering",
        "Real-time chat system",
        "Payment gateway integration",
      ],
    },
    {
      id: 3,
      title: "WOW Recycle Website",
      description:
        "Sustainability-focused platform built with Bootstrap & ReactJS. Promotes environmental consciousness through innovative recycling solutions.",
      tech: ["React.js", "Bootstrap", "JavaScript", "SCSS", "Node.js"],
      icon: <Recycle className="w-8 h-8" />,
      color: "from-green-400 to-teal-500",
      year: "2023",
      status: "Live",
      features: [
        "Eco-friendly product catalog",
        "Carbon footprint calculator",
        "Educational resources",
        "Community engagement features",
      ],
    },
    {
      id: 4,
      title: "Sonal Agritech",
      description:
        "Sonal Agritech specializes in landscaping, horticulture, hardscaping, highway beautification and sustainable gardening solutions-offering organic fertilizers, urban greenery, tree care and agro-forestry services with an eco-first ethos.",
      tech: ["HTML", "CSS", "JavaScript", "jQuery", "Tailwind", "GSAP"],
      icon: <TreePine className="w-8 h-8" />,
      color: "from-green-400 to-teal-500",
      year: "2023",
      status: "Live",
      features: [
        "Professional landscaping and horticulture services",
        "Eco-friendly products and organic fertilizers",
        "Highway beautification and urban greenery solutions",
        "Tree care, plantation, and agro-forestry initiatives",
      ],
    },
    {
      id: 6,
      title: "Abu Hills",
      description:
        "Abu Hills is a scenic tourism and hospitality destination offering resort stays, outdoor adventure, event hosting, and eco-friendly experiences in the lush landscapes of Mount Abu, Rajasthan.",
      tech: [
        "React",
        "Tailwind",
        "Framer Motion",
        "Swiper.js",
        "GSAP",
        "LottieFiles",
      ],
      icon: <Landmark className="w-8 h-8" />,
      color: "from-blue-400 to-cyan-500",
      year: "2024",
      status: "Live",
      features: [
        "Luxury resort and nature stay experiences",
        "Event and wedding hosting in scenic locations",
        "Adventure tourism and eco-friendly activities",
        "Immersive virtual tour and online booking system",
      ],
      link: "https://abu-hills.netlify.app/",
    },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll(".project-card");
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("animate-in");
            }, index * 200);
          });
        }
      });
    }, observerOptions);

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  const handleProjectClick = (projectId: number) => {
    setSelectedProject(selectedProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 opacity-50" />

      <div
        ref={projectsRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-6xl font-black font-orbitron text-white mb-4">
            FEATURED{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              PROJECTS
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing innovative solutions and cutting-edge implementations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card opacity-0 transform translate-y-10 transition-all duration-700"
            >
              <div
                className="glass-dark p-6 rounded-2xl hover-cursor transform-3d card-3d group relative overflow-hidden cursor-pointer"
                onClick={() => handleProjectClick(project.id)}
              >
                {/* Status badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      project.status === "Live" ? "bg-green-500" : "bg-blue-500"
                    } text-white`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Project icon */}
                <div
                  className={`project-icon p-4 rounded-full bg-gradient-to-r ${project.color} text-white mb-6 inline-block floating`}
                >
                  {project.icon}
                </div>

                {/* Project header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">{project.year}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800 text-cyan-400 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expandable features */}
                {selectedProject === project.id && (
                  <div className="mb-6 space-y-2 animate-in">
                    <h4 className="text-cyan-400 font-semibold text-sm">
                      Key Features:
                    </h4>
                    {project.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Action buttons */}
                <div className="flex space-x-3">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-sm font-medium hover:scale-105 transition-transform">
                    <ArrowDown size={16} />
                    <span>Show more</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 glass text-gray-300 rounded-full text-sm font-medium hover:scale-105 transition-transform">
                    <Github size={16} />
                    <span>Code</span>
                  </button>
                </div>

                {/* Holographic overlay */}
                <div className="absolute inset-0 holographic rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .project-card.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default Projects;
