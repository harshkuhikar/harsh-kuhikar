import React, { useEffect, useRef } from "react";
import {
  Code,
  Palette,
  Smartphone,
  Database,
  GitBranch,
  Zap,
} from "lucide-react";

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    {
      category: "Frontend",
      icon: <Code className="w-8 h-8" />,
      items: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "jQuery",
        "Bootstrap",
        "SASS/LESS",
      ],
      color: "from-cyan-400 to-blue-500",
    },
    {
      category: "Design Conversions",
      icon: <Palette className="w-8 h-8" />,
      items: [
        "PSD to HTML",
        "Figma to HTML",
        "Sketch to Code",
        "Adobe XD to HTML",
      ],
      color: "from-purple-400 to-pink-500",
    },
    {
      category: "Responsive & UI",
      icon: <Smartphone className="w-8 h-8" />,
      items: [
        "Responsive Web Design",
        "SCSS",
        "Tailwind CSS",
        "Mobile-First Design",
      ],
      color: "from-green-400 to-teal-500",
    },
    {
      category: "CMS & Backend",
      icon: <Database className="w-8 h-8" />,
      items: ["WordPress", "Shopify", "PHP Basics", "MongoDB", "REST APIs"],
      color: "from-yellow-400 to-orange-500",
    },
    {
      category: "Version Control",
      icon: <GitBranch className="w-8 h-8" />,
      items: ["Git", "GitHub", "Version Control", "Collaboration"],
      color: "from-red-400 to-pink-500",
    },
    {
      category: "Performance",
      icon: <Zap className="w-8 h-8" />,
      items: [
        "Web Optimization",
        "SEO",
        "Performance Tuning",
        "Cross-browser Testing",
      ],
      color: "from-indigo-400 to-purple-500",
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
          const cards = entry.target.querySelectorAll(".skill-card");
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("animate-in");
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 opacity-50" />

      <div
        ref={skillsRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-6xl font-black font-orbitron text-white mb-4">
            TECH{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              ARSENAL
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge technologies and frameworks I use to create exceptional
            digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="skill-card glass-dark p-6 rounded-2xl hover-cursor transform-3d card-3d group opacity-0 transform translate-y-10 transition-all duration-700"
            >
              <div className="flex items-center mb-6">
                <div
                  className={`p-3 rounded-full bg-gradient-to-r ${skill.color} text-white mr-4`}
                >
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {skill.category}
                </h3>
              </div>

              <div className="space-y-3">
                {skill.items.map((item, itemIndex) => (
                  <div
                    key={item}
                    className="skill-item glass p-3 rounded-lg hover-lift transition-all duration-300"
                    style={{ animationDelay: `${itemIndex * 0.1}s` }}
                  >
                    <span className="text-gray-300 text-sm font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Holographic overlay */}
              <div className="absolute inset-0 holographic rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
  .skill-card.animate-in {
    opacity: 1;
    transform: translateY(0);
  }

  .skill-item {
    animation: skillFloat 3s ease-in-out infinite;
  }

  @keyframes skillFloat {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }
`}
      </style>
    </section>
  );
};

export default Skills;
