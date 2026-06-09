import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  Heart, 
  Lightbulb,
  X,
  CheckCircle,
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
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  
  // Apply Form state
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantMessage, setApplicantMessage] = useState('');

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

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail) return;

    setSubmitting(true);
    // Simulate API application submission
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setSelectedJob(null);
        setApplicantName('');
        setApplicantEmail('');
        setApplicantMessage('');
      }, 2000);
    }, 1200);
  };

  const scrollToPositions = () => {
    const element = document.getElementById('positions-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
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
              <div className="bg-bg-light border border-card-border p-6 rounded-2xl space-y-4 h-full">
                <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-bold font-poppins text-primary">Impactful Work</h3>
                <p className="text-sm text-muted-gray leading-relaxed">
                  You'll work on products used by real businesses in the field every day.
                </p>
              </div>
            </TiltCard>

            <TiltCard>
              <div className="bg-bg-light border border-card-border p-6 rounded-2xl space-y-4 h-full">
                <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-bold font-poppins text-primary">Growth First</h3>
                <p className="text-sm text-muted-gray leading-relaxed">
                  We invest in your learning, development, and career progression.
                </p>
              </div>
            </TiltCard>

            <TiltCard>
              <div className="bg-bg-light border border-card-border p-6 rounded-2xl space-y-4 h-full">
                <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-bold font-poppins text-primary">Collaborative Culture</h3>
                <p className="text-sm text-muted-gray leading-relaxed">
                  Flat structure, open communication, and a team that cares.
                </p>
              </div>
            </TiltCard>

            <TiltCard>
              <div className="bg-bg-light border border-card-border p-6 rounded-2xl space-y-4 h-full">
                <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-bold font-poppins text-primary">Innovation-Driven</h3>
                <p className="text-sm text-muted-gray leading-relaxed">
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
                  className="bg-white border border-card-border rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 shadow-premium hover:shadow-premium-hover transition-all duration-300 text-left"
                >
                  <div className="space-y-3.5">
                    <h3 className="text-xl font-bold font-poppins text-primary">{job.title}</h3>
                    
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-gray font-semibold">
                      <span className="px-2.5 py-1 bg-primary/5 text-primary border border-primary/10 rounded-full font-mono uppercase">
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {job.type}
                      </span>
                    </div>
                  </div>

                  <motion.button
                    onClick={() => setSelectedJob(job)}
                    whileHover={{ scale: 1.05, backgroundColor: "#E8622A", color: "#FFFFFF" }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full sm:w-auto bg-primary text-white font-bold px-6 py-2.5 rounded-full flex items-center justify-center gap-1.5 transition-all duration-200"
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

              {success ? (
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                >
                  <CheckCircle className="w-16 h-16 text-green-500" />
                  <h4 className="text-lg font-bold text-primary">Application Submitted!</h4>
                  <p className="text-sm text-muted-gray">Thank you for applying. Our team will review your application soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleApplySubmit} className="space-y-4">
                  {/* Job description blurb */}
                  <div className="p-3 bg-bg-light border rounded-lg text-xs space-y-1 leading-relaxed text-muted-gray">
                    <span className="font-bold text-primary block">Description:</span>
                    <p>{selectedJob.description}</p>
                    <span className="font-bold text-primary block mt-2">Key Requirements:</span>
                    <ul className="list-disc pl-4 space-y-0.5">
                      {selectedJob.requirements.map((req, rIdx) => (
                        <li key={rIdx}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-primary block uppercase">Full Name *</label>
                    <input 
                      type="text" 
                      required
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      className="w-full bg-bg-light border border-card-border p-2.5 rounded-lg text-sm focus:outline-none focus:border-accent"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-primary block uppercase">Email Address *</label>
                    <input 
                      type="email" 
                      required
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      className="w-full bg-bg-light border border-card-border p-2.5 rounded-lg text-sm focus:outline-none focus:border-accent"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-primary block uppercase">Cover Letter / Note</label>
                    <textarea 
                      value={applicantMessage}
                      onChange={(e) => setApplicantMessage(e.target.value)}
                      rows={3}
                      className="w-full bg-bg-light border border-card-border p-2.5 rounded-lg text-sm focus:outline-none focus:border-accent resize-none"
                      placeholder="Tell us why you are a great fit..."
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-primary text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting Application...
                        </>
                      ) : (
                        'Submit Application'
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Careers;
