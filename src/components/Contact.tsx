import React, { useState, useEffect, useRef } from "react";
import { Send, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll(".contact-animate");
          elements.forEach((element, index) => {
            setTimeout(() => {
              element.classList.add("animate-in");
            }, index * 200);
          });
        }
      });
    }, observerOptions);

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch(
        "https://formsubmit.co/harshkuhikar68@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            _subject: `Portfolio Contact: ${formData.subject}`,
            _captcha: false,
          }),
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 opacity-50" />

      <div
        ref={contactRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="contact-animate text-center mb-16 opacity-0 transform translate-y-10 transition-all duration-700">
          <h2 className="text-4xl md:text-6xl font-black font-orbitron text-white mb-4">
            GET IN{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              TOUCH
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's collaborate and create
            something amazing together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="contact-animate opacity-0 transform translate-x-[-50px] transition-all duration-700 space-y-8">
            <div className="glass-dark p-6 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Connect
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="contact-icon p-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white floating">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a
                      href="mailto:harshkuhikar68@gmail.com"
                      className="text-white text-lg hover:text-cyan-400 transition-colors"
                    >
                      harshkuhikar68@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div
                    className="contact-icon p-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 text-white floating"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a
                      href="tel:+918511830227"
                      className="text-white text-lg hover:text-cyan-400 transition-colors"
                    >
                      +91 8511830227
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div
                    className="contact-icon p-3 rounded-full bg-gradient-to-r from-green-400 to-teal-500 text-white floating"
                    style={{ animationDelay: "1s" }}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white text-lg">India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  <a
                    target="_blank"
                    href="https://github.com/harshkuhikar"
                    className="contact-icon p-3 rounded-full glass hover-lift hover-glow transition-all duration-300 group"
                  >
                    <Github
                      className="text-cyan-400 group-hover:text-white"
                      size={24}
                    />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/harsh-kuhikar/"
                    className="contact-icon p-3 rounded-full glass hover-lift hover-glow transition-all duration-300 group"
                  >
                    <Linkedin
                      className="text-cyan-400 group-hover:text-white"
                      size={24}
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* 3D animated element */}
            <div className="glass-dark p-6 rounded-2xl text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center pulse">
                <div className="w-24 h-24 bg-gray-900 rounded-full flex items-center justify-center">
                  <span
                    className="text-2xl font-bold text-cyan-400"
                    style={{
                      height: "100%",
                    }}
                  >
                    <img
                      src="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
                      alt=""
                      style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "50%",
                      }}
                    />
                  </span>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Available for freelance projects and full-time opportunities
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-animate opacity-0 transform translate-x-[50px] transition-all duration-700">
            <div className="glass-dark p-6 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-field">
                  <label
                    htmlFor="name"
                    className="block text-gray-300 text-sm font-medium mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50 transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-field">
                  <label
                    htmlFor="email"
                    className="block text-gray-300 text-sm font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="form-field">
                  <label
                    htmlFor="subject"
                    className="block text-gray-300 text-sm font-medium mb-2"
                  >
                    Project Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50 transition-all duration-300"
                    placeholder="Project inquiry, collaboration, etc."
                  />
                </div>

                <div className="form-field">
                  <label
                    htmlFor="message"
                    className="block text-gray-300 text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="loading" />
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {submitStatus === "success" && (
                  <div className="p-4 bg-green-500 bg-opacity-20 border border-green-500 rounded-lg">
                    <p className="text-green-400 text-sm">
                      Message sent successfully! I'll get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-500 bg-opacity-20 border border-red-500 rounded-lg">
                    <p className="text-red-400 text-sm">
                      Something went wrong. Please try again or contact me
                      directly.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-700 text-center fade-in">
          <p className="text-gray-400 text-sm">
            © 2024 Harsh J Kuhikar. Crafted with passion and precision.
          </p>
        </div>
      </div>

      <style>{`
        .contact-animate.animate-in {
          opacity: 1;
          transform: translateX(0) translateY(0);
        }
      `}</style>
    </section>
  );
};

export default Contact;
