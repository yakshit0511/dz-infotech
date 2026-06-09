import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const socialLinks = {
    linkedin: "https://www.linkedin.com/company/dzinfotech",
    instagram: "https://www.instagram.com/dz.infotech?igsh=MTdmYnBtdXV4ZmN5Zw=="
  };

  return (
    <footer className="bg-footer-dark text-white border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-4 flex flex-col space-y-4">
            <Link to="/" className="inline-block">
              <Logo className="h-12" light />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              DZ Infotech is a visionary technology firm. We design and build smart digital solutions that empower businesses with control and efficiency.
            </p>
            {/* Social Icons */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:text-accent hover:bg-white/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:text-accent hover:bg-white/10 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div className="col-span-1 md:col-span-2 flex flex-col space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Company</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About DZ Infotech</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/partner" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div className="col-span-1 md:col-span-2 flex flex-col space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Products</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <a
                  href="https://contracksolutions.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  ConTrack
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-500" />
                </a>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="col-span-1 md:col-span-2 flex flex-col space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Resources</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <span className="hover:text-white cursor-pointer transition-colors opacity-75">Success Stories</span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors opacity-75">Blog</span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors opacity-75">FAQ</span>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="col-span-1 md:col-span-2 flex flex-col space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Legal</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <span className="hover:text-white cursor-pointer transition-colors opacity-75">Privacy Policy</span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors opacity-75">Terms & Conditions</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-medium">
          <p>© 2025 DZ Infotech. All rights reserved.</p>
          <div className="flex space-x-6">
            <span className="hover:text-gray-300 cursor-pointer">Bhavnagar, Gujarat, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
