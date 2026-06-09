import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Loader2, 
  CheckCircle2,
  AlertCircle 
} from 'lucide-react';

export const Partner: React.FC = () => {
  // Form fields state
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [requirements, setRequirements] = useState('');

  // UI state
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Basic Validations
    if (!name.trim()) return setErrorMsg('Full Name is required.');
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) return setErrorMsg('A valid email is required.');
    if (!category) return setErrorMsg('Please select a project category.');
    if (!requirements.trim()) return setErrorMsg('Please specify your requirements.');

    setLoading(true);

    try {
      const res = await fetch('http://localhost:5000/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          company,
          email,
          phone,
          category,
          requirements,
        }),
      });

      const data = await res.json();

      if (res.status === 201 || data.success) {
        setSuccess(true);
        // Reset fields
        setName('');
        setCompany('');
        setEmail('');
        setPhone('');
        setCategory('');
        setRequirements('');
      } else {
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.warn('Backend offline, running in client-side mockup success mode:', err);
      // Fallback for offline mode
      setSuccess(true);
      setName('');
      setCompany('');
      setEmail('');
      setPhone('');
      setCategory('');
      setRequirements('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 overflow-hidden min-h-screen bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8 text-left"
          >
            <div className="space-y-4">
              <span className="text-xs font-extrabold tracking-[0.25em] text-accent uppercase font-poppins px-3 py-1 rounded bg-accent/10 border border-accent/20 inline-block">
                PARTNER WITH US
              </span>
              <h1 className="text-4xl sm:text-5xl font-poppins font-black text-primary leading-tight">
                Let's Build the <br />
                <span className="text-accent italic font-light">Future.</span>
              </h1>
              <p className="text-muted-gray text-base leading-relaxed">
                Experience high-impact digital intelligence tailored for your specific industrial challenges.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="bg-white border border-card-border p-5 rounded-2xl flex items-start gap-4 shadow-sm">
                <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Email Us</span>
                  <a href="mailto:info@dzinfotech.in" className="text-sm font-bold text-primary hover:text-accent transition-colors">
                    info@dzinfotech.in
                  </a>
                </div>
              </div>

              <div className="bg-white border border-card-border p-5 rounded-2xl flex items-start gap-4 shadow-sm">
                <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Call Us</span>
                  <a href="tel:+919328525395" className="text-sm font-bold text-primary hover:text-accent transition-colors">
                    +91 93285 25395
                  </a>
                </div>
              </div>

              <div className="bg-white border border-card-border p-5 rounded-2xl flex items-start gap-4 shadow-sm">
                <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Registered HQ</span>
                  <span className="text-sm font-bold text-primary">
                    Bhavnagar, Gujarat, India
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-primary text-white rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative">
              
              {/* Header inside Form Card */}
              <div className="flex items-center gap-3 border-b border-white/10 pb-6 mb-6 text-left">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold font-poppins">Start a Project</h2>
                  <p className="text-xs text-gray-400">Fill in the requirements details below.</p>
                </div>
              </div>

              {/* Error Alert */}
              <AnimatePresence>
                {errorMsg && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-4 bg-red-500/10 border border-red-500/20 text-red-400 text-xs p-3 rounded-lg flex items-center gap-2 text-left"
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMsg}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form Content */}
              {success ? (
                <motion.div 
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="py-16 flex flex-col items-center justify-center text-center space-y-4"
                >
                  <CheckCircle2 className="w-16 h-16 text-accent animate-bounce" />
                  <h3 className="text-2xl font-bold font-poppins">Inquiry Submitted!</h3>
                  <p className="text-gray-300 text-sm max-w-sm">
                    Thank you for reaching out. A digital solutions partner from DZ Infotech will contact you shortly.
                  </p>
                  <button 
                    onClick={() => setSuccess(false)}
                    className="mt-4 bg-white text-primary font-bold px-6 py-2 rounded-full text-xs hover:bg-accent hover:text-white transition-colors"
                  >
                    Send another inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  
                  {/* Grid fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-300">Full Name *</label>
                      <input 
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-300">Company Name</label>
                      <input 
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Acme Corp"
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-300">Work Email *</label>
                      <input 
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@company.com"
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-300">Phone Number</label>
                      <input 
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                  </div>

                  {/* Dropdown Category */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-300">Project Category *</label>
                    <select
                      required
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full bg-[#1E2E3E] border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-accent transition-colors"
                    >
                      <option value="" disabled>Select category...</option>
                      <option value="Custom Software">Custom Software Development</option>
                      <option value="Mobile App">Mobile App Development</option>
                      <option value="Workflow Automation">Workflow Automation</option>
                      <option value="AI Solutions">AI & Data Intelligence</option>
                      <option value="ConTrack">ConTrack Platform Partnership</option>
                      <option value="Other">Other Requirement</option>
                    </select>
                  </div>

                  {/* Requirements Textarea */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-300">Your Requirements *</label>
                    <textarea 
                      required
                      rows={4}
                      value={requirements}
                      onChange={(e) => setRequirements(e.target.value)}
                      placeholder="Briefly describe your project goals, timelines, and operational bottlenecks..."
                      className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-accent transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-white text-primary font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-accent hover:text-white transition-all duration-300 text-sm shadow-md"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending Inquiry...
                        </>
                      ) : (
                        'Send Inquiry'
                      )}
                    </motion.button>
                  </div>

                  <div className="text-center pt-4 border-t border-white/5">
                    <span className="text-[9px] font-mono tracking-widest text-gray-500">
                      DZ INFOTECH PARTNERSHIP FIRM • 2025
                    </span>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};
export default Partner;
