
import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Sun, Moon, Github, Linkedin, Mail, Download, 
  Award, Briefcase, GraduationCap, Code, Heart, ChevronRight,
  TrendingUp, BarChart3, ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  EXPERIENCE_DATA, 
  EDUCATION_DATA, 
  PROJECTS_DATA, 
  AWARDS_DATA,
  PROFILE_IMAGE_URL
} from './constants.ts';

const Navbar = ({ darkMode, toggleDarkMode }: { darkMode: boolean, toggleDarkMode: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-brand-navy/90 shadow-lg backdrop-blur-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-3">
            <a href="#home" className="relative group">
              <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-brand-accent shadow-md transition-all group-hover:scale-110 group-active:scale-95 ring-2 ring-white/20">
                <img 
                  src={PROFILE_IMAGE_URL} 
                  alt="Catalina Garcia Headshot" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://picsum.photos/100/100?random=logo";
                  }}
                />
              </div>
            </a>
            <span className={`font-heading font-bold text-xl tracking-tight hidden sm:block ${scrolled ? 'text-slate-900 dark:text-white' : 'text-slate-900 dark:text-white'}`}>
              CATALINA GARCIA
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium hover:text-brand-accent dark:hover:text-brand-teal transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:scale-110 transition-transform"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a 
              href="resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-navy dark:bg-brand-teal text-white dark:text-brand-navy font-semibold text-sm hover:shadow-lg transition-all active:scale-95"
            >
              <Download size={16} /> Resume
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleDarkMode} className="p-2 text-slate-700 dark:text-slate-300" aria-label="Toggle Dark Mode">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 dark:text-white" aria-label="Toggle Menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white dark:bg-brand-navy border-b border-slate-200 dark:border-slate-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                 <a 
                  href="resume.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-brand-accent text-white font-bold"
                >
                  <Download size={18} /> Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ children, subtitle, align = 'center' }: { children?: React.ReactNode, subtitle?: string, align?: 'center' | 'left' }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 dark:text-white mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 80 }}
      viewport={{ once: true }}
      className={`h-1.5 bg-brand-accent rounded-full mt-4 ${align === 'center' ? 'mx-auto' : 'ml-0'}`}
    />
  </div>
);

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-slate-200/50 dark:from-slate-800/20 to-transparent opacity-50" />
    <div className="absolute bottom-10 left-10 -z-10 w-72 h-72 bg-brand-teal/10 rounded-full blur-3xl animate-pulse" />
    <div className="absolute top-40 right-10 -z-10 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-teal/10 text-brand-teal font-bold text-xs tracking-wider uppercase mb-6 border border-brand-teal/20">
            <ShieldCheck size={14} /> TS Clearance • USMC Veteran
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-brand-navy dark:text-white leading-[1.1] mb-6">
            Pioneering <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-rose-400">Data-Driven</span> Workforce Solutions.
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-xl">
            I help federal agencies and forward-thinking enterprises transform complex HR challenges into strategic advantages using AI, advanced analytics, and military-grade precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#portfolio" className="px-8 py-4 rounded-xl bg-brand-navy dark:bg-brand-teal text-white dark:text-brand-navy font-bold text-lg hover:shadow-2xl transition-all hover:-translate-y-1 text-center">
              Explore Portfolio
            </a>
            <a href="#contact" className="px-8 py-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-brand-navy dark:text-white font-bold text-lg hover:bg-slate-50 transition-all text-center">
              Contact Me
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-8 grayscale opacity-60 dark:opacity-40">
            <div className="text-sm font-semibold text-slate-400 tracking-widest uppercase">Trusted Experience</div>
            <div className="flex items-center gap-6">
              <span className="font-heading font-bold text-xl text-slate-800 dark:text-slate-200">DEA</span>
              <span className="font-heading font-bold text-xl text-slate-800 dark:text-slate-200">USMC</span>
              <span className="font-heading font-bold text-xl text-slate-800 dark:text-slate-200">OPM</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 w-full aspect-square max-w-lg mx-auto overflow-hidden rounded-full border-[12px] border-white dark:border-brand-navy shadow-[0_20px_50px_rgba(0,0,0,0.15)] group bg-white">
            <img 
              src={PROFILE_IMAGE_URL} 
              alt="Catalina Garcia Portrait" 
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://picsum.photos/600/600?random=123";
              }}
            />
            <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-6 -left-6 z-20 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 hidden sm:block"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-brand-teal/10 rounded-xl text-brand-teal">
                <BarChart3 size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold dark:text-white">99.8%</div>
                <div className="text-xs text-slate-500 uppercase font-bold tracking-tighter">Data Integrity Achieved</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="py-24 bg-white dark:bg-brand-navy/30">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading align="left" subtitle="A record of leadership, analytical excellence, and federal service.">
        Professional Experience
      </SectionHeading>
      
      <div className="space-y-12">
        {EXPERIENCE_DATA.map((exp, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative pl-8 border-l-2 border-slate-200 dark:border-slate-700 hover:border-brand-accent transition-colors pb-12 last:pb-0"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-brand-accent group-hover:scale-125 transition-all" />
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-accent transition-colors">
                  {exp.role}
                </h3>
                <p className="text-brand-teal font-semibold flex items-center gap-2">
                  <Briefcase size={16} /> {exp.company}
                </p>
              </div>
              <div className="mt-2 md:mt-0 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm font-bold border border-slate-200 dark:border-slate-700">
                {exp.period}
              </div>
            </div>
            <ul className="space-y-3">
              {exp.description.map((item, i) => (
                <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-300 leading-relaxed">
                  <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-brand-accent/40" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Skills = () => {
  const skillCategories = [
    { title: "Advanced Analytics", skills: ["Power BI", "Predictive Modeling", "Tableau", "Excel Data Models", "Data Integration"] },
    { title: "AI & ML Frameworks", skills: ["Gemini API", "Natural Language Processing", "Strategic AI Planning", "Sentiment Analysis"] },
    { title: "Leadership & HR", skills: ["Workforce Planning", "Organizational Design", "Federal Policy", "Strategic Staffing", "Project Management"] },
    { title: "Technical Systems", skills: ["SharePoint Administration", "SQL", "TFSMS/TFMMS", "DCPDS", "Cloud Infrastructure"] }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-brand-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Bridging technical expertise with strategic leadership.">
          Strategic Capabilities
        </SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white dark:bg-brand-navy/40 border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Code size={20} className="text-brand-accent" /> {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm font-medium hover:bg-brand-teal/10 hover:text-brand-teal transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => (
  <section id="portfolio" className="py-24 bg-white dark:bg-brand-navy/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading align="left" subtitle="Transforming data into actionable intelligence.">
        Workforce Intelligence Portfolio
      </SectionHeading>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {PROJECTS_DATA.map((project, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 bg-white dark:bg-brand-navy/40 hover:shadow-2xl transition-all duration-500"
          >
            <div className="aspect-[16/9] overflow-hidden relative bg-slate-200">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent opacity-0 group-hover:opacity-40 transition-opacity" />
              <div className="absolute bottom-6 left-6 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-brand-teal text-white text-xs font-bold uppercase tracking-widest shadow-lg">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 text-brand-accent font-bold text-xs uppercase tracking-widest mb-2">
                <TrendingUp size={14} /> {project.role}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {project.title}
              </h3>
              <div className="space-y-4 text-slate-600 dark:text-slate-300">
                <div>
                  <span className="font-bold text-slate-900 dark:text-white block text-sm mb-1 uppercase tracking-wider">The Challenge</span>
                  <p>{project.challenge}</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-l-4 border-brand-teal">
                   <span className="font-bold text-slate-900 dark:text-white block text-sm mb-1 uppercase tracking-wider">The Result</span>
                   <p className="text-slate-900 dark:text-white font-medium">{project.impact}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Awards = () => (
  <section className="py-24 bg-brand-navy text-white overflow-hidden relative">
    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading align="left">Recognition & Honors</SectionHeading>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {AWARDS_DATA.map((award, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <div className="p-3 rounded-xl bg-brand-teal/20 text-brand-teal">
              <Award size={24} />
            </div>
            <div>
              <div className="text-sm font-bold text-brand-teal mb-1">{award.year}</div>
              <div className="text-lg font-semibold">{award.title}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 bg-white dark:bg-brand-charcoal border-t border-slate-200 dark:border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-navy dark:border-brand-teal shadow-md">
              <img 
                src={PROFILE_IMAGE_URL} 
                alt="Catalina Garcia Portrait" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://picsum.photos/100/100?random=footer";
                }}
              />
            </div>
            <span className="font-heading font-bold text-lg dark:text-white">CATALINA GARCIA</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-sm text-center md:text-left">
            Strategically leading the future of workforce intelligence through data and AI.
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <a 
            href="https://www.linkedin.com/in/garcia-catalina" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-brand-accent hover:text-white transition-all"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="https://github.com/CatalinaGarcia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-brand-accent hover:text-white transition-all"
            aria-label="GitHub Profile"
          >
            <Github size={20} />
          </a>
          <a 
            href="mailto:4catalinagarcia@gmail.com" 
            className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-brand-accent hover:text-white transition-all"
            aria-label="Email Me"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 text-center text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} Catalina Garcia. All rights reserved. Built with precision and passion.
      </div>
    </div>
  </footer>
);

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen">
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <Hero />
      <section id="about" className="py-24 bg-slate-50 dark:bg-brand-charcoal overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <SectionHeading align="left">My Philosophy</SectionHeading>
              <p className="text-2xl font-medium text-slate-900 dark:text-white leading-relaxed italic">
                "In a world of noise, data is the only signal. My mission is to decode that signal into a more efficient, human-centric, and strategic workforce."
              </p>
              <div className="space-y-4 text-slate-600 dark:text-slate-300">
                <p>
                  As a Marine Corps veteran and federal professional, I bring a unique blend of operational discipline and advanced analytical expertise to the HR landscape. I believe that AI is not a replacement for human judgment, but a force multiplier for it.
                </p>
                <p>
                  My journey from active duty to high-level federal manpower analysis has taught me that the most complex organizational problems are solvable when you have the right data and the courage to act on it.
                </p>
              </div>
              <div className="pt-6 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-brand-teal">15+</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-slate-500">Years Federal Service</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-accent">400k+</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-slate-500">Records Managed</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-12 bg-white dark:bg-brand-navy rounded-[3rem] shadow-2xl border border-slate-100 dark:border-slate-800"
            >
              <div className="absolute -top-6 -right-6 p-6 bg-brand-accent rounded-3xl shadow-xl">
                <ShieldCheck size={48} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Education Journey</h3>
              <div className="space-y-8">
                {EDUCATION_DATA.map((edu, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="mt-1 flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-brand-teal" />
                      {idx !== EDUCATION_DATA.length - 1 && <div className="w-0.5 h-16 bg-slate-200 dark:bg-slate-700" />}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-brand-teal">{edu.period}</div>
                      <div className="text-xl font-bold text-slate-900 dark:text-white">{edu.institution}</div>
                      <div className="text-slate-600 dark:text-slate-400">{edu.degree}</div>
                      <div className="text-sm font-semibold text-brand-accent mt-1 italic">{edu.honors}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Experience />
      <Portfolio />
      <Skills />
      <Awards />
      
      <section id="contact" className="py-24 bg-slate-50 dark:bg-brand-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading subtitle="Ready to optimize your workforce strategy? Let's connect.">
            Get In Touch
          </SectionHeading>
          
          <div className="mt-12 p-12 rounded-[2.5rem] bg-white dark:bg-brand-navy shadow-xl border border-slate-100 dark:border-slate-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-left space-y-8">
                <div>
                  <h4 className="text-sm font-bold text-brand-teal uppercase tracking-widest mb-2">Direct Reach</h4>
                  <a 
                    href="mailto:4catalinagarcia@gmail.com" 
                    className="text-2xl font-bold text-slate-900 dark:text-white hover:text-brand-accent transition-colors block break-all"
                  >
                    4catalinagarcia@gmail.com
                  </a>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-teal uppercase tracking-widest mb-2">Social Hub</h4>
                  <div className="flex gap-4">
                    <a 
                      href="https://www.linkedin.com/in/garcia-catalina" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-brand-navy hover:text-white dark:hover:bg-brand-teal dark:hover:text-brand-navy transition-all"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin size={24} />
                    </a>
                    <a 
                      href="https://github.com/CatalinaGarcia" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-brand-navy hover:text-white dark:hover:bg-brand-teal dark:hover:text-brand-navy transition-all"
                      aria-label="GitHub Profile"
                    >
                      <Github size={24} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-brand-teal outline-none text-slate-900 dark:text-white" />
                <input type="email" placeholder="Email Address" className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-brand-teal outline-none text-slate-900 dark:text-white" />
                <textarea rows={4} placeholder="How can I help you?" className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-brand-teal outline-none text-slate-900 dark:text-white" />
                <button className="w-full py-5 rounded-xl bg-brand-accent text-white font-bold text-lg hover:shadow-lg hover:-translate-y-1 transition-all active:scale-95">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default App;
