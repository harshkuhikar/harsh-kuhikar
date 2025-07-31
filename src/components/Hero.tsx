import React, { useEffect, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const AnimatedSphere = () => {
  const meshRef = useRef<any>();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#00bfff"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0.4}
      />
    </Sphere>
  );
};

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Simple fade-in animation without GSAP
    const animateElements = () => {
      const elements = [
        titleRef.current,
        subtitleRef.current,
        taglineRef.current,
      ];

      elements.forEach((element, index) => {
        if (element) {
          setTimeout(() => {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
          }, index * 200);
        }
      });

      // Animate contact items
      const contactItems = document.querySelectorAll(".hero-contact");
      contactItems.forEach((item, index) => {
        setTimeout(() => {
          (item as HTMLElement).style.opacity = "1";
          (item as HTMLElement).style.transform = "translateY(0)";
        }, 600 + index * 100);
      });
    };

    // Create particles
    const createParticles = () => {
      const particleContainer = document.querySelector(".particle-container");
      if (particleContainer) {
        for (let i = 0; i < 20; i++) {
          const particle = document.createElement("div");
          particle.className = "particle";
          particle.style.left = Math.random() * 100 + "%";
          particle.style.top = Math.random() * 100 + "%";
          particle.style.animationDelay = Math.random() * 4 + "s";
          particleContainer.appendChild(particle);
        }
      }
    };

    animateElements();
    createParticles();

    // Floating animation for contact items
    const floatingElements = document.querySelectorAll(".floating-contact");
    floatingElements.forEach((element, index) => {
      const delay = index * 0.5;
      (element as HTMLElement).style.animationDelay = delay + "s";
    });
  }, []);

  return (
    <section id="home" className="section gradient-bg relative overflow-hidden">
      {/* Particle container */}
      <div className="particle-container absolute inset-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1
                ref={titleRef}
                className="text-5xl md:text-7xl font-black font-orbitron text-white leading-tight opacity-0 transform translate-y-10 transition-all duration-1000"
              >
                HARSH J
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  KUHIKAR
                </span>
              </h1>

              <p
                ref={subtitleRef}
                className="text-xl md:text-2xl text-gray-300 font-medium opacity-0 transform translate-y-10 transition-all duration-1000"
              >
                Frontend Developer | UI Designer | React.js Developer
              </p>

              <p
                ref={taglineRef}
                className="text-lg text-cyan-300 font-light italic opacity-0 transform translate-y-10 transition-all duration-1000"
              >
                "I turn designs into reality with clean, animated, responsive
                code."
              </p>
            </div>

            <div className="space-y-4">
              <div className="hero-contact floating-contact glass p-4 rounded-lg hover-lift hover-glow transition-all duration-300 opacity-0 transform translate-y-5">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-cyan-400" size={20} />
                  <span className="text-gray-300">Vastral, Ahmedabad</span>
                </div>
              </div>

              <div className="hero-contact floating-contact glass p-4 rounded-lg hover-lift hover-glow transition-all duration-300 opacity-0 transform translate-y-5">
                <div className="flex items-center space-x-3">
                  <Mail className="text-cyan-400" size={20} />
                  <a
                    href="mailto:harshkuhikar68@gmail.com"
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    harshkuhikar68@gmail.com
                  </a>
                </div>
              </div>

              <div className="hero-contact floating-contact glass p-4 rounded-lg hover-lift hover-glow transition-all duration-300 opacity-0 transform translate-y-5">
                <div className="flex items-center space-x-3">
                  <Phone className="text-cyan-400" size={20} />
                  <a
                    href="tel:+918511830227"
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    +91 8511830227
                  </a>
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href="#"
                  className="hero-contact glass p-3 rounded-full hover-lift hover-glow transition-all duration-300 opacity-0 transform translate-y-5"
                >
                  <Github className="text-cyan-400" size={24} />
                </a>
                <a
                  href="#"
                  className="hero-contact glass p-3 rounded-full hover-lift hover-glow transition-all duration-300 opacity-0 transform translate-y-5"
                >
                  <Linkedin className="text-cyan-400" size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - 3D Animation */}
          <div className="relative h-96 lg:h-[600px]">
            <Suspense
              fallback={
                <div className="flex items-center justify-center h-full text-cyan-400">
                  Loading 3D Scene...
                </div>
              }
            >
              <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <AnimatedSphere />
                <OrbitControls
                  enableZoom={false}
                  autoRotate
                  autoRotateSpeed={0.5}
                />
              </Canvas>
            </Suspense>

            {/* Floating tech icons */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="floating absolute top-20 left-10 glass p-3 rounded-full">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  JS
                </div>
              </div>
              <div
                className="floating absolute top-40 right-10 glass p-3 rounded-full"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  ⚛️
                </div>
              </div>
              <div
                className="floating absolute bottom-40 left-20 glass p-3 rounded-full"
                style={{ animationDelay: "1s" }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  CSS
                </div>
              </div>
              <div
                className="floating absolute bottom-20 right-20 glass p-3 rounded-full"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  HTML
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
