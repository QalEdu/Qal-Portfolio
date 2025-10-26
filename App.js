import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Terminal, Shield, Network, Cpu, Brain, Code, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Secure Network Monitoring Dashboard",
      category: "networking",
      description: "Real-time network traffic analyzer with anomaly detection and security alerts built using Python and React.",
      tech: ["Python", "React", "Docker", "Wireshark", "Prometheus"],
      icon: Network,
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      id: 2,
      title: "AI-Powered Log Analyzer",
      category: "ai",
      description: "Machine learning model that analyzes system logs to predict potential security threats and performance issues.",
      tech: ["Python", "TensorFlow", "FastAPI", "Elasticsearch"],
      icon: Brain,
      gradient: "from-purple-500 to-pink-400"
    },
    {
      id: 3,
      title: "Zero-Trust Authentication API",
      category: "cybersecurity",
      description: "Backend service implementing zero-trust security principles with multi-factor authentication and role-based access control.",
      tech: ["Node.js", "Express", "JWT", "Redis", "MongoDB"],
      icon: Shield,
      gradient: "from-green-500 to-emerald-400"
    },
    {
      id: 4,
      title: "Cloud Infrastructure Automation",
      category: "backend",
      description: "Infrastructure as Code solution for automated deployment and scaling of cloud resources with monitoring.",
      tech: ["Terraform", "AWS", "Docker", "Kubernetes", "Grafana"],
      icon: Cpu,
      gradient: "from-orange-500 to-red-400"
    }
  ];

  const skills = [
    { category: "Backend Development", items: ["Node.js", "Express", "Python", "FastAPI", "REST/GraphQL", "MongoDB", "PostgreSQL"] },
    { category: "Networking", items: ["TCP/IP", "VLANs", "Firewalls", "Cisco CLI", "Wireshark", "Network Security", "Load Balancing"] },
    { category: "Web Development", items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vite", "Responsive Design"] },
    { category: "DevOps & IT", items: ["Docker", "Kubernetes", "Linux", "Git", "CI/CD", "AWS", "Terraform"] },
    { category: "Cybersecurity", items: ["OWASP", "Secure Coding", "Vulnerability Assessment", "CTF", "Network Security", "Authentication"] },
    { category: "AI & ML", items: ["TensorFlow", "PyTorch", "LLM Integration", "Data Analysis", "Natural Language Processing"] }
  ];

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            >
              DevPortfolio
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['hero', 'about', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-300 ${
                    activeSection === section 
                      ? 'text-cyan-400 font-semibold' 
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  {section === 'hero' ? 'Home' : section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4 border-t border-gray-800"
            >
              {['hero', 'about', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left py-2 capitalize ${
                    activeSection === section 
                      ? 'text-cyan-400 font-semibold' 
                      : 'text-gray-300'
                  }`}
                >
                  {section === 'hero' ? 'Home' : section}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                <Terminal className="w-16 h-16 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Alex Chen
              </span>
            </h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Backend Engineer • Network Specialist • Cybersecurity Enthusiast
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Building secure, scalable systems at the intersection of networking, AI, and cybersecurity
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors duration-300"
              >
                <Github size={20} />
                GitHub
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors duration-300"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a 
                href="mailto:hello@yourdomain.com"
                className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-6 py-3 rounded-lg transition-all duration-300"
              >
                <Mail size={20} />
                Contact
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm a passionate developer with a strong foundation in networking and backend development, 
                currently expanding my expertise into cybersecurity and AI technologies.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                With hands-on experience in building scalable web applications and managing complex network infrastructures, 
                I bring a unique perspective to solving technical challenges at the intersection of these domains.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm constantly learning and experimenting with new technologies, from implementing zero-trust security models 
                to exploring the capabilities of large language models in practical applications.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Network className="text-cyan-400" size={24} />
                  <h3 className="text-xl font-semibold">Networking</h3>
                </div>
                <p className="text-gray-400">Designing and implementing secure, high-performance network architectures with focus on reliability and scalability.</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="text-blue-400" size={24} />
                  <h3 className="text-xl font-semibold">Backend Development</h3>
                </div>
                <p className="text-gray-400">Building robust APIs and microservices with modern frameworks, emphasizing security, performance, and maintainability.</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="text-green-400" size={24} />
                  <h3 className="text-xl font-semibold">Cybersecurity</h3>
                </div>
                <p className="text-gray-400">Implementing security best practices and exploring offensive/defensive security techniques through hands-on labs and CTF challenges.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient}`}>
                    <project.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                    View Code
                  </button>
                  <button className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
                    Live Demo
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillCategory, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">{skillCategory.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((item, itemIndex) => (
                    <span 
                      key={itemIndex}
                      className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300 hover:bg-gray-600/50 transition-colors duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-8"></div>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Interested in collaborating on a project or have questions about my work? 
              I'm always open to discussing new opportunities and challenges.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="mailto:hello@yourdomain.com"
                className="flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 rounded-lg transition-all duration-300 text-lg font-semibold"
              >
                <Mail size={24} />
                hello@yourdomain.com
              </a>
              <a 
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-lg transition-colors duration-300 text-lg font-semibold"
              >
                <Github size={24} />
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>&copy; 2024 Alex Chen. Built with React, Tailwind CSS, and Framer Motion.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
