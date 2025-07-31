import React, { useEffect, useRef } from "react";
import { Calendar, MapPin, Briefcase, Code, Zap } from "lucide-react";

const Experience: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      id: 1,
      title: "Fullstack Developer",
      company: "Scalezix",
      period: "2024 - Present",
      location: "Remote",
      type: "Full-time",
      technologies: ["React.js", "Node.js", "AI/ML", "TypeScript", "SCSS"],
      responsibilities: [
        "Developing React.js frontend for AI-based applications",
        "Collaborating with backend team on Node.js integration",
        "Implementing responsive and interactive user interfaces",
        "Optimizing application performance and user experience",
      ],
      icon: <Zap className="w-6 h-6" />,
      color: "from-cyan-400 to-blue-500",
      status: "current",
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Qubeta Techno Lab",
      period: "Dec 2023 - Sept 2024",
      location: "Ahmedabad, Gujarat",
      type: "Full-time",
      technologies: ["React.js", "Bootstrap", "JavaScript", "SCSS", "PHP"],
      responsibilities: [
        "Built comprehensive B2B ecommerce platform frontend",
        "Developed WOW Recycle sustainability platform",
        "Converted PSD/Figma designs to responsive HTML/CSS",
        "Implemented complex UI components and interactions",
      ],
      icon: <Briefcase className="w-6 h-6" />,
      color: "from-purple-400 to-pink-500",
      status: "completed",
    },
    {
      id: 3,
      title: "Frontend Developer Trainee",
      company: "Tops Technologies",
      period: "Sept 2022 - July 2023",
      location: "Ahmedabad, Gujarat",
      type: "Training",
      technologies: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap"],
      responsibilities: [
        "Intensive training in frontend web development",
        "Learned modern JavaScript frameworks and libraries",
        "Practiced responsive web design principles",
        "Completed multiple hands-on projects",
      ],
      icon: <Code className="w-6 h-6" />,
      color: "from-green-400 to-teal-500",
      status: "completed",
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
          // Animate timeline line
          const timelineLine = entry.target.querySelector(".timeline-line");
          if (timelineLine) {
            (timelineLine as HTMLElement).style.height = "100%";
          }

          // Animate experience cards
          const cards = entry.target.querySelectorAll(".experience-card");
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("animate-in");
            }, index * 300);
          });
        }
      });
    }, observerOptions);

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  return (
    <section id="experience" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-6xl font-black font-orbitron text-white mb-4">
            CAREER{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              JOURNEY
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional growth and achievements in frontend development
          </p>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-400 to-purple-500 timeline-line transition-all duration-2000 experience-line"
            style={{ height: "0%" }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`experience-card flex flex-col sm:flex-row ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                } items-center gap-4 sm:gap-0 transition-all duration-700`}
              >
                {/* Card content */}
                <div
                  className={`w-full sm:w-5/12 ${
                    index % 2 === 0 ? "sm:pr-8" : "sm:pl-8"
                  }`}
                >
                  <div className="glass-dark p-6 rounded-2xl hover-lift hover-glow transition-all duration-300 group relative">
                    {/* Status badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`p-3 rounded-full bg-gradient-to-r ${exp.color} text-white`}
                      >
                        {exp.icon}
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          exp.status === "current"
                            ? "bg-green-500"
                            : "bg-blue-500"
                        } text-white`}
                      >
                        {exp.status === "current" ? "Current" : "Completed"}
                      </span>
                    </div>

                    {/* Company info */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-cyan-400 font-semibold mb-2">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap items-center space-x-4 text-gray-400 text-sm">
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-800 text-cyan-400 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <div
                          key={respIndex}
                          className="flex items-start space-x-2"
                        >
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{resp}</span>
                        </div>
                      ))}
                    </div>

                    {/* Holographic overlay */}
                    <div className="absolute inset-0 holographic rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden sm:flex w-full sm:w-2/12 justify-center">
                  <div
                    className={`timeline-dot w-6 h-6 rounded-full bg-gradient-to-r ${exp.color} border-4 border-gray-900 z-10 pulse`}
                  />
                </div>

                {/* Spacer */}
                <div className="hidden sm:block w-5/12" />
              </div>
            ))}
          </div>

          {/* Education section */}
          <div className="mt-16 text-center fade-in">
            <div className="glass-dark p-6 rounded-2xl max-w-lg mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-cyan-400">
                  B.Sc. in Biosciences
                </h4>
                <p className="text-gray-300">Indrashil University, Gujarat</p>
                <p className="text-gray-400">May 2022 • GPA: 6.77</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .experience-card.animate-in {
          opacity: 1;
          transform: translateX(0);
        }
        
        .timeline-line {
          transition: height 2s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Experience;
