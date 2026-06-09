import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  Heart, 
  Lightbulb,
  X,
  Mail,
  Loader2
} from 'lucide-react';
import { TiltCard } from '../components/TiltCard';

interface JobPosition {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

export const Careers: React.FC = () => {
  const [jobs, setJobs] = useState<JobPosition[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  // Apply submission handled directly via triggers

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/jobs');
        const data = await res.json();
        if (data && data.success) {
          setJobs(data.data);
        }
      } catch (err) {
        console.error('Error fetching jobs from API, using fallback data:', err);
        // Fallback static data in case API or DB is down
        setJobs([
          {
            title: 'Flutter Developer',
            department: 'Engineering',
            location: 'Bhavnagar',
            type: 'Full-time',
            description: 'We are looking for a skilled Flutter Developer to join our core engineering team in Bhavnagar. You will be building high-performance, offline-first mobile tools that empower site operations.',
            requirements: [
              '2+ years of experience in Flutter development',
              'Strong understanding of state management (Bloc/Provider/Riverpod)',
              'Experience with offline synchronization, SQLite, or Hive databases',
              'Knowledge of publishing apps on Google Play Store and Apple App Store'
            ]
          },
          {
            title: 'Backend Developer (Node.js)',
            department: 'Engineering',
            location: 'Remote',
            type: 'Full-time',
            description: 'We are seeking a Backend Developer (Node.js) to design, build, and optimize scalable RESTful APIs and database schemas for our next-generation enterprise solutions.',
            requirements: [
              '3+ years of experience with Node.js and Express',
              'Strong MongoDB schema design & Mongoose queries optimization',
              'Experience with REST API design, WebSockets, and JWT authentication',
              'Familiarity with cloud platforms (AWS / Google Cloud) and Docker'
            ]
          },
          {
            title: 'Business Development Executive',
            department: 'Sales',
            location: 'Bhavnagar',
            type: 'Full-time',
            description: 'Join our sales team to identify new business opportunities, engage with potential industrial clients, and present digital intelligence solutions designed to improve operations.',
            requirements: [
              '1+ years of experience in IT/Software sales',
              'Excellent written/verbal communication and negotiation skills',
              'Experience with lead generation, proposal writing, and CRM tools',
              'Ability to coordinate with engineering teams to scope requirements'
            ]
          },
          {
            title: 'UI/UX Designer',
            department: 'Design',
            location: 'Hybrid',
            type: 'Full-time',
            description: 'We are searching for a UI/UX Designer who is passionate about creating clean, modern, and beautiful user interfaces that solve complex operational challenges simply.',
            requirements: [
              '2+ years of experience using Figma or Adobe XD',
              'Strong portfolio showcasing mobile app, web app, and responsive designs',
              'Ability to build wireframes, interactive user flows, and prototypes',
              'Deep understanding of modern typography, CSS grids, and color theory'
            ]
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Apply submission is handled directly via user client triggers (Mailto/WhatsApp link)

  const scrollToPositions = () => {
    const element = document.getElementById('positions-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <div className="pt-20 overflow-hidden">
      {/* HERO SECTION */}
      <section className="bg-bg-light dot-grid py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-6xl font-poppins font-black text-primary leading-tight">
            Build the Future <span className="text-accent italic font-light">With Us</span>
          </h1>
          <p className="text-muted-gray text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Join a team of problem-solvers building real technology for real industries.
          </p>
          <div className="pt-2">
            <motion.button
              onClick={scrollToPositions}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(13, 27, 42, 0.2)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary text-white font-bold px-8 py-3.5 rounded-full"
            >
              See Open Positions
            </motion.button>
          </div>
        </div>
      </section>

      {/* WHY JOIN US SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto text-center space-y-16">
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl font-poppins font-black text-primary">Why Join Us?</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <TiltCard>
              <div className="group bg-bg-light border border-card-border p-6 rounded-2xl space-y-4 h-full hover:bg-primary transition-all duration-300">
                <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                  <Sparkles className="w-5 h-5 text-accent group-hover:text-white" />
                </div>
                <h3 className="text-lg font-bold font-poppins text-primary group-hover:text-white transition-colors duration-300">Impactful Work</h3>
                <p className="text-sm text-muted-gray leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  You'll work on products used by real businesses in the field every day.
                </p>
              </div>
            </TiltCard>

            <TiltCard>
              <div className="group bg-bg-light border border-card-border p-6 rounded-2xl space-y-4 h-full hover:bg-primary transition-all duration-300">
                <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                  <BookOpen className="w-5 h-5 text-accent group-hover:text-white" />
                </div>
                <h3 className="text-lg font-bold font-poppins text-primary group-hover:text-white transition-colors duration-300">Growth First</h3>
                <p className="text-sm text-muted-gray leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  We invest in your learning, development, and career progression.
                </p>
              </div>
            </TiltCard>

            <TiltCard>
              <div className="group bg-bg-light border border-card-border p-6 rounded-2xl space-y-4 h-full hover:bg-primary transition-all duration-300">
                <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                  <Heart className="w-5 h-5 text-accent group-hover:text-white" />
                </div>
                <h3 className="text-lg font-bold font-poppins text-primary group-hover:text-white transition-colors duration-300">Collaborative Culture</h3>
                <p className="text-sm text-muted-gray leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  Flat structure, open communication, and a team that cares.
                </p>
              </div>
            </TiltCard>

            <TiltCard>
              <div className="group bg-bg-light border border-card-border p-6 rounded-2xl space-y-4 h-full hover:bg-primary transition-all duration-300">
                <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                  <Lightbulb className="w-5 h-5 text-accent group-hover:text-white" />
                </div>
                <h3 className="text-lg font-bold font-poppins text-primary group-hover:text-white transition-colors duration-300">Innovation-Driven</h3>
                <p className="text-sm text-muted-gray leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  We encourage new ideas and building things that matter.
                </p>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS LIST */}
      <section id="positions-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-bg-light border-b border-gray-100">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-poppins font-black text-primary">Current Openings</h2>
            <p className="text-muted-gray text-sm">Find the right role for your engineering or design career.</p>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-accent" />
            </div>
          ) : (
            <div className="space-y-6">
              {jobs.map((job, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-white border border-card-border rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 shadow-premium hover:bg-primary transition-all duration-300 text-left"
                >
                  <div className="space-y-3.5">
                    <h3 className="text-xl font-bold font-poppins text-primary group-hover:text-white transition-colors duration-300">{job.title}</h3>
                    
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-gray font-semibold">
                      <span className="px-2.5 py-1 bg-primary/5 text-primary border border-primary/10 group-hover:bg-white/10 group-hover:text-white group-hover:border-white/15 rounded-full font-mono uppercase transition-colors duration-300">
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1 group-hover:text-gray-300 transition-colors duration-300">
                        <MapPin className="w-3.5 h-3.5" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1 group-hover:text-gray-300 transition-colors duration-300">
                        <Clock className="w-3.5 h-3.5" />
                        {job.type}
                      </span>
                    </div>
                  </div>

                  <motion.button
                    onClick={() => setSelectedJob(job)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full sm:w-auto bg-primary text-white font-bold px-6 py-2.5 rounded-full flex items-center justify-center gap-1.5 transition-all duration-200 group-hover:bg-accent group-hover:text-white group-hover:shadow-glow"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-poppins font-black text-primary">
            Don't see your role? We'd still love to hear from you.
          </h2>
          <p className="text-muted-gray max-w-xl mx-auto text-sm sm:text-base">
            Drop us your resume and details. We are always searching for top-tier operational designers and developers.
          </p>
          <div className="pt-2">
            <a href="mailto:info@dzinfotech.in">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(13, 27, 42, 0.2)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary text-white font-bold px-8 py-4 rounded-full"
              >
                Send Us Your Resume
              </motion.button>
            </a>
          </div>
        </div>
      </section>

      {/* APPLY MODAL */}
      <AnimatePresence>
        {selectedJob && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedJob(null)}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            />
            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-x-4 bottom-4 top-4 sm:inset-auto sm:left-1/2 sm:top-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 bg-white rounded-2xl shadow-2xl z-50 p-6 sm:p-8 w-full max-w-lg overflow-y-auto max-h-[90vh] text-left"
            >
              <div className="flex justify-between items-start border-b pb-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold font-poppins text-primary">Apply for {selectedJob.title}</h3>
                  <p className="text-xs text-muted-gray uppercase font-bold tracking-widest mt-1">
                    {selectedJob.department} // {selectedJob.location}
                  </p>
                </div>
                <button 
                  onClick={() => setSelectedJob(null)}
                  className="text-gray-400 hover:text-accent p-1 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Job description blurb */}
                <div className="p-4 bg-bg-light border border-card-border rounded-xl text-xs space-y-1.5 leading-relaxed text-muted-gray">
                  <span className="font-bold text-primary block">Description:</span>
                  <p className="mb-2">{selectedJob.description}</p>
                  <span className="font-bold text-primary block">Key Requirements:</span>
                  <ul className="list-disc pl-4 space-y-1">
                    {selectedJob.requirements.map((req, rIdx) => (
                      <li key={rIdx}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <p className="text-sm font-semibold text-primary text-center">Choose how you would like to apply:</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email Option */}
                    <a 
                      href={`mailto:info@dzinfotech.in?subject=Application%20for%20${encodeURIComponent(selectedJob.title)}%20Position`}
                      className="group flex flex-col items-center justify-center p-6 bg-white border border-card-border rounded-2xl hover:bg-primary transition-all duration-300 text-center shadow-premium space-y-3"
                    >
                      <div className="w-12 h-12 bg-bg-light rounded-xl flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                        <Mail className="w-6 h-6 text-accent group-hover:text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary text-base group-hover:text-white transition-colors">Apply via Email</h4>
                        <p className="text-xs text-muted-gray group-hover:text-gray-300 transition-colors mt-0.5">Send resume to info@dzinfotech.in</p>
                      </div>
                    </a>

                    {/* WhatsApp Option */}
                    <a 
                      href={`https://wa.me/919328525395?text=${encodeURIComponent(`Hello DZ Infotech, I would like to apply for the "${selectedJob.title}" position. Let me share my details.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center justify-center p-6 bg-white border border-card-border rounded-2xl hover:bg-primary transition-all duration-300 text-center shadow-premium space-y-3"
                    >
                      <div className="w-12 h-12 bg-bg-light rounded-xl flex items-center justify-center text-primary group-hover:bg-[#25D366] group-hover:text-white transition-colors duration-300">
                        <svg className="w-6 h-6 fill-current text-[#25D366] group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24">
                          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.333 4.982L2 22l5.233-1.371a9.92 9.92 0 004.775 1.22c5.507 0 9.991-4.479 9.992-9.986C22.002 6.478 17.518 2 12.012 2zm5.794 14.51c-.248.697-1.229 1.28-1.783 1.348-.48.058-1.107.25-3.218-.622-2.701-1.117-4.437-3.874-4.571-4.053-.134-.179-1.097-1.458-1.097-2.78 0-1.323.692-1.973.938-2.235.247-.262.538-.328.718-.328.18 0 .359.006.516.012.162.006.381-.06.596.457.221.53.757 1.848.822 1.98.066.133.11.288.021.464-.088.176-.133.287-.265.441-.133.155-.279.348-.398.469-.133.133-.272.279-.117.545.155.266.69 1.136 1.48 1.842.818.728 1.506.953 1.72.11.215.156.48.332.695.176.216-.156.48-.458.72-.782.242-.324.484-.227.81-.1.326.126 2.066 1.026 2.42 1.203.354.178.59.263.678.414.088.15.088.875-.16 1.572z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-primary text-base group-hover:text-white transition-colors">Apply via WhatsApp</h4>
                        <p className="text-xs text-muted-gray group-hover:text-gray-300 transition-colors mt-0.5">Chat with our hiring team directly</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Careers;
