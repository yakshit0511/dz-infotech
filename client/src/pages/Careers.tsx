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

  // Role-specific apply messages
  const getApplyMessages = (job: JobPosition) => {
    const roleMessages: Record<string, { emailSubject: string; emailBody: string; whatsappMsg: string }> = {
      'Flutter Developer': {
        emailSubject: 'Application for Flutter Developer Position at DZ Infotech',
        emailBody: `Hello DZ Infotech Team,%0D%0A%0D%0AI would like to apply for the Flutter Developer position.%0D%0A%0D%0AI have experience in Flutter development, state management (Bloc/Provider/Riverpod), and offline-first mobile applications.%0D%0A%0D%0APlease find my resume and details below:%0D%0A%0D%0AName: %0D%0APhone: %0D%0ALinkedIn: %0D%0APortfolio/GitHub: %0D%0AYears of Experience: %0D%0A%0D%0ALooking forward to hearing from you!%0D%0ABest regards`,
        whatsappMsg: `Hello DZ Infotech! 👋\n\nI would like to apply for the *Flutter Developer* position.\n\nI have experience in Flutter, state management, and mobile app development.\n\nMy Details:\n• Name: \n• Phone: \n• LinkedIn/Portfolio: \n• Years of Experience: \n\nPlease let me know the next steps. Thank you! 🙏`
      },
      'Backend Developer (Node.js)': {
        emailSubject: 'Application for Backend Developer (Node.js) Position at DZ Infotech',
        emailBody: `Hello DZ Infotech Team,%0D%0A%0D%0AI would like to apply for the Backend Developer (Node.js) position.%0D%0A%0D%0AI have experience designing scalable RESTful APIs, MongoDB schema design, and cloud platforms.%0D%0A%0D%0APlease find my details below:%0D%0A%0D%0AName: %0D%0APhone: %0D%0ALinkedIn: %0D%0APortfolio/GitHub: %0D%0AYears of Experience: %0D%0A%0D%0ALooking forward to hearing from you!%0D%0ABest regards`,
        whatsappMsg: `Hello DZ Infotech! 👋\n\nI would like to apply for the *Backend Developer (Node.js)* position.\n\nI have experience with Node.js, Express, MongoDB, and REST API design.\n\nMy Details:\n• Name: \n• Phone: \n• LinkedIn/GitHub: \n• Years of Experience: \n\nPlease let me know the next steps. Thank you! 🙏`
      },
      'Business Development Executive': {
        emailSubject: 'Application for Business Development Executive Position at DZ Infotech',
        emailBody: `Hello DZ Infotech Team,%0D%0A%0D%0AI would like to apply for the Business Development Executive position.%0D%0A%0D%0AI have experience in IT/Software sales, lead generation, and client engagement.%0D%0A%0D%0APlease find my details below:%0D%0A%0D%0AName: %0D%0APhone: %0D%0ALinkedIn: %0D%0AYears of Experience: %0D%0ACurrent CTC / Expected CTC: %0D%0A%0D%0ALooking forward to hearing from you!%0D%0ABest regards`,
        whatsappMsg: `Hello DZ Infotech! 👋\n\nI would like to apply for the *Business Development Executive* position.\n\nI have experience in IT/Software sales and client relationship management.\n\nMy Details:\n• Name: \n• Phone: \n• LinkedIn: \n• Years of Experience: \n• Current/Expected CTC: \n\nPlease let me know the next steps. Thank you! 🙏`
      },
      'UI/UX Designer': {
        emailSubject: 'Application for UI/UX Designer Position at DZ Infotech',
        emailBody: `Hello DZ Infotech Team,%0D%0A%0D%0AI would like to apply for the UI/UX Designer position.%0D%0A%0D%0AI have experience in Figma/Adobe XD, creating wireframes, and building user-friendly interfaces.%0D%0A%0D%0APlease find my details below:%0D%0A%0D%0AName: %0D%0APhone: %0D%0APortfolio Link: %0D%0ALinkedIn: %0D%0AYears of Experience: %0D%0A%0D%0ALooking forward to hearing from you!%0D%0ABest regards`,
        whatsappMsg: `Hello DZ Infotech! 👋\n\nI would like to apply for the *UI/UX Designer* position.\n\nI have experience in Figma/Adobe XD and building clean, modern user interfaces.\n\nMy Details:\n• Name: \n• Phone: \n• Portfolio Link: \n• LinkedIn: \n• Years of Experience: \n\nPlease let me know the next steps. Thank you! 🙏`
      }
    };

    return roleMessages[job.title] || {
      emailSubject: `Application for ${job.title} Position at DZ Infotech`,
      emailBody: `Hello DZ Infotech Team,%0D%0A%0D%0AI would like to apply for the ${job.title} position.%0D%0A%0D%0APlease find my details below:%0D%0A%0D%0AName: %0D%0APhone: %0D%0ALinkedIn: %0D%0AYears of Experience: %0D%0A%0D%0ALooking forward to hearing from you!%0D%0ABest regards`,
      whatsappMsg: `Hello DZ Infotech! 👋\n\nI would like to apply for the *${job.title}* position.\n\nMy Details:\n• Name: \n• Phone: \n• LinkedIn: \n• Years of Experience: \n\nPlease let me know the next steps. Thank you! 🙏`
    };
  };

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
              className="fixed inset-x-4 bottom-4 top-4 sm:inset-auto sm:left-1/2 sm:top-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 bg-white rounded-3xl shadow-2xl z-50 w-full max-w-xl flex flex-col text-left overflow-hidden"
              style={{ height: 'calc(100vh - 80px)', maxHeight: '680px' }}
            >
              {/* Modal Header — dark navy */}
              <div className="bg-primary px-6 py-5 flex justify-between items-start flex-shrink-0">
                <div>
                  <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase">
                    {selectedJob.department} · {selectedJob.location} · {selectedJob.type}
                  </span>
                  <h3 className="text-xl font-black font-poppins text-white mt-1">Apply for {selectedJob.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="text-white/60 hover:text-white p-1 transition-colors flex-shrink-0 ml-4 mt-1"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Apply Buttons — ALWAYS visible, right under header */}
              <div className="flex-shrink-0 px-6 py-5 bg-white border-b border-gray-100">
                <p className="text-[11px] text-center font-bold text-muted-gray uppercase tracking-widest mb-4">Choose how you'd like to apply</p>
                {(() => {
                  const msgs = getApplyMessages(selectedJob);
                  return (
                    <div className="grid grid-cols-2 gap-3">
                      {/* Email */}
                      <a
                        href={`mailto:info@dzinfotech.in?subject=${encodeURIComponent(msgs.emailSubject)}&body=${msgs.emailBody}`}
                        className="group flex flex-col items-center justify-center p-4 bg-bg-light border-2 border-transparent rounded-2xl hover:border-accent hover:bg-accent/5 transition-all duration-300 text-center cursor-pointer"
                      >
                        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-2 group-hover:bg-accent transition-colors duration-300">
                          <Mail className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
                        </div>
                        <span className="font-bold text-sm text-primary group-hover:text-accent transition-colors">Email Us</span>
                        <span className="text-[10px] text-muted-gray mt-0.5">info@dzinfotech.in</span>
                      </a>

                      {/* WhatsApp */}
                      <a
                        href={`https://wa.me/919328525395?text=${encodeURIComponent(msgs.whatsappMsg)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center justify-center p-4 bg-bg-light border-2 border-transparent rounded-2xl hover:border-[#25D366] hover:bg-green-50 transition-all duration-300 text-center cursor-pointer"
                      >
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-2 group-hover:bg-[#25D366] transition-colors duration-300">
                          <svg className="w-5 h-5 fill-current text-[#25D366] group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24">
                            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.333 4.982L2 22l5.233-1.371a9.92 9.92 0 004.775 1.22c5.507 0 9.991-4.479 9.992-9.986C22.002 6.478 17.518 2 12.012 2zm5.794 14.51c-.248.697-1.229 1.28-1.783 1.348-.48.058-1.107.25-3.218-.622-2.701-1.117-4.437-3.874-4.571-4.053-.134-.179-1.097-1.458-1.097-2.78 0-1.323.692-1.973.938-2.235.247-.262.538-.328.718-.328.18 0 .359.006.516.012.162.006.381-.06.596.457.221.53.757 1.848.822 1.98.066.133.11.288.021.464-.088.176-.133.287-.265.441-.133.155-.279.348-.398.469-.133.133-.272.279-.117.545.155.266.69 1.136 1.48 1.842.818.728 1.506.953 1.72.11.215.156.48.332.695.176.216-.156.48-.458.72-.782.242-.324.484-.227.81-.1.326.126 2.066 1.026 2.42 1.203.354.178.59.263.678.414.088.15.088.875-.16 1.572z" />
                          </svg>
                        </div>
                        <span className="font-bold text-sm text-primary group-hover:text-[#25D366] transition-colors">WhatsApp</span>
                        <span className="text-[10px] text-muted-gray mt-0.5">+91 93285 25395</span>
                      </a>
                    </div>
                  );
                })()}
              </div>

              {/* Job Description — scrollable, below the buttons */}
              <div className="flex-1 overflow-y-auto px-6 py-5">
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">About the Role</p>
                <p className="text-sm text-muted-gray leading-relaxed mb-4">{selectedJob.description}</p>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Key Requirements</p>
                <ul className="space-y-1.5 pb-2">
                  {selectedJob.requirements.map((req, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2 text-sm text-muted-gray">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Careers;
