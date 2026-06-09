import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Mail, 
  Phone, 
  MapPin,
  Calendar
} from 'lucide-react';
import { TiltCard } from '../components/TiltCard';

export const About: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  } as const;

  const timelineEvents = [
    {
      date: "April 2025",
      title: "The Idea",
      desc: "Idea for ConTrack conceived after identifying operational challenges faced by contractors on real construction projects."
    },
    {
      date: "June – July 2025",
      title: "Prototype Phase",
      desc: "First working prototype developed, focusing on digital site execution and field first reporting."
    },
    {
      date: "September 2025",
      title: "DZ Infotech Foundation",
      desc: "DZ Infotech officially registered as a technology firm in Bhavnagar, Gujarat."
    },
    {
      date: "Late 2025",
      title: "ConTrack MVP Launch",
      desc: "First flagship product launched with DPR, progress tracking, and attendance modules."
    },
    {
      date: "Early Adoption",
      title: "Proof of Concept",
      desc: "Solution successfully demonstrated to over 15 major contractors for live feedback."
    },
    {
      date: "Future Vision",
      title: "Industry Expansion",
      desc: "Expanding our digital intelligence platform to automate workflows across multiple heavy industries."
    }
  ];

  const team = [
    { name: "Soumyarajsinh Zala", role: "Co-Founder & Product", initials: "SZ" },
    { name: "Yash Dhamecha", role: "Co-Founder & Engineering", initials: "YD" },
    { name: "Harpal Mori", role: "Lead UI/UX Designer", initials: "HM" }
  ];

  return (
    <div className="pt-20 overflow-hidden">
      {/* HERO SECTION */}
      <section className="bg-bg-light dot-grid py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-6xl font-poppins font-black text-primary leading-tight">
            We're Building the Future of <br />
            <span className="text-accent italic font-light">Industrial Operations</span>
          </h1>
          <p className="text-muted-gray text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A passionate team of engineers, designers, and strategists dedicated to transforming how industries work.
          </p>
        </div>
      </section>

      {/* OUR STORY SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left text */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6 text-left"
          >
            <h2 className="text-3xl font-poppins font-black text-primary">From Observation to Innovation</h2>
            <p className="text-muted-gray text-sm sm:text-base leading-relaxed">
              DZ Infotech was born from real-world observation. We noticed how construction companies struggled with paper-based reporting, disconnected communication, and zero financial visibility. We set out to change that — one industry at a time.
            </p>
            <p className="text-muted-gray text-sm sm:text-base leading-relaxed">
              We started with ConTrack, a mobile-first construction management platform, and we're now expanding our solutions to tackle challenges in logistics, warehousing, and beyond.
            </p>
          </motion.div>

          {/* Right graphics - Mission/Vision side-by-side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <TiltCard>
              <div className="group bg-bg-light border border-card-border p-6 rounded-2xl text-left space-y-4 h-full hover:bg-primary transition-all duration-300">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-poppins text-primary group-hover:text-white transition-colors duration-300">Our Mission</h3>
                <p className="text-xs text-muted-gray leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  To build practical, scalable digital tools that give businesses complete operational control.
                </p>
              </div>
            </TiltCard>

            <TiltCard>
              <div className="group bg-bg-light border border-card-border p-6 rounded-2xl text-left space-y-4 h-full hover:bg-primary transition-all duration-300">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-poppins text-primary group-hover:text-white transition-colors duration-300">Our Vision</h3>
                <p className="text-xs text-muted-gray leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  To transform how industries operate globally through intelligent, accessible technology.
                </p>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-bg-light border-b border-gray-100">
        <div className="max-w-7xl mx-auto text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-poppins font-black text-primary">Core Values</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              { val: "Simplicity", desc: "Technology should be easy to use, not complex." },
              { val: "Impact", desc: "Every product we build solves a real problem." },
              { val: "Integrity", desc: "We do what we say, and say what we mean." },
              { val: "Innovation", desc: "We continuously improve and evolve our solutions." }
            ].map((item, idx) => (
              <TiltCard key={idx}>
                <div className="group bg-white border border-card-border p-6 rounded-2xl space-y-3 h-full hover:bg-primary transition-all duration-300">
                  <h3 className="text-lg font-bold font-poppins text-accent group-hover:text-white transition-colors duration-300">{item.val}</h3>
                  <p className="text-sm text-muted-gray leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{item.desc}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION (Directly matching user attachments) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-poppins font-black text-primary">DZ Infotech Timeline</h2>
            <p className="text-muted-gray text-sm font-medium">Building the intelligence layer for global industries.</p>
          </div>

          {/* Timeline graphic */}
          <div className="relative border-l-2 border-gray-200 ml-4 md:ml-0 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:top-0 md:before:h-full md:before:w-0.5 md:before:bg-gray-200">
            <div className="space-y-12">
              {timelineEvents.map((evt, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-start md:items-center`}
                  >
                    {/* Node Dot */}
                    <div className="absolute -left-[9px] md:left-1/2 md:transform md:-translate-x-1/2 w-4.5 h-4.5 rounded-full bg-primary border-4 border-white flex items-center justify-center z-10 shadow shadow-accent/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    </div>

                    {/* Timeline Card */}
                    <div className={`w-full md:w-[45%] pl-8 md:pl-0 ${isEven ? 'md:text-left md:pr-8' : 'md:text-right md:pl-8'}`}>
                      <div className="group bg-white border border-card-border p-6 rounded-2xl shadow-premium hover:bg-primary transition-all duration-300 inline-block w-full text-left">
                        <div className="flex items-center gap-1.5 text-accent font-bold text-xs uppercase mb-2">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{evt.date}</span>
                        </div>
                        <h4 className="text-lg font-bold font-poppins text-primary mb-1 group-hover:text-white transition-colors duration-300">{evt.title}</h4>
                        <p className="text-xs sm:text-sm text-muted-gray leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{evt.desc}</p>
                      </div>
                    </div>
                    {/* Spacer for MD screens */}
                    <div className="hidden md:block md:w-[10%]" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-bg-light border-b border-gray-100">
        <div className="max-w-7xl mx-auto text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-poppins font-black text-primary">The Team Behind DZ Infotech</h2>
            <p className="text-muted-gray text-sm">Passionate builders transforming industrial execution.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, idx) => (
              <TiltCard key={idx}>
                <div className="group bg-white border border-card-border p-8 rounded-2xl text-center space-y-4 shadow-premium hover:bg-primary transition-all duration-300">
                  {/* Initials Avatar */}
                  <div className="w-20 h-20 rounded-full bg-primary text-white text-2xl font-black font-poppins mx-auto flex items-center justify-center border-4 border-white shadow-md group-hover:bg-accent group-hover:border-primary transition-colors duration-300">
                    {member.initials}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold font-poppins text-primary group-hover:text-white transition-colors duration-300">{member.name}</h4>
                    <span className="text-xs text-accent font-bold uppercase tracking-wider block mt-1 group-hover:text-white/95 transition-colors duration-300">
                      {member.role}
                    </span>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT INFO BLOCK */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-poppins font-black text-primary">Get In Touch</h2>
            <p className="text-muted-gray text-sm">Have a question or want to discuss a project? Reach out to us.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
            <div className="group bg-bg-light border border-card-border p-6 rounded-2xl flex items-start gap-4 hover:bg-primary transition-all duration-300 shadow-premium">
              <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-300">
                <Mail className="w-5 h-5 text-accent group-hover:text-white" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block group-hover:text-white/80 transition-colors duration-300">Email Us</span>
                <a href="mailto:info@dzinfotech.in" className="text-sm font-bold text-primary hover:text-accent group-hover:text-white group-hover:hover:text-accent transition-colors">
                  info@dzinfotech.in
                </a>
              </div>
            </div>

            <div className="group bg-bg-light border border-card-border p-6 rounded-2xl flex items-start gap-4 hover:bg-primary transition-all duration-300 shadow-premium">
              <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-300">
                <Phone className="w-5 h-5 text-accent group-hover:text-white" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block group-hover:text-white/80 transition-colors duration-300">Call Us</span>
                <a href="tel:+919328525395" className="text-sm font-bold text-primary hover:text-accent group-hover:text-white group-hover:hover:text-accent transition-colors">
                  +91 93285 25395
                </a>
              </div>
            </div>

            <div className="group bg-bg-light border border-card-border p-6 rounded-2xl flex items-start gap-4 hover:bg-primary transition-all duration-300 shadow-premium">
              <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-300">
                <MapPin className="w-5 h-5 text-accent group-hover:text-white" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block group-hover:text-white/80 transition-colors duration-300">Location</span>
                <span className="text-sm font-bold text-primary group-hover:text-white transition-colors">
                  Bhavnagar, Gujarat, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
