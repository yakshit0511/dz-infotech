import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';

const Linkedin: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Instagram: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Whatsapp: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.333 4.982L2 22l5.233-1.371a9.92 9.92 0 004.775 1.22c5.507 0 9.991-4.479 9.992-9.986C22.002 6.478 17.518 2 12.012 2zm5.794 14.51c-.248.697-1.229 1.28-1.783 1.348-.48.058-1.107.25-3.218-.622-2.701-1.117-4.437-3.874-4.571-4.053-.134-.179-1.097-1.458-1.097-2.78 0-1.323.692-1.973.938-2.235.247-.262.538-.328.718-.328.18 0 .359.006.516.012.162.006.381-.06.596.457.221.53.757 1.848.822 1.98.066.133.11.288.021.464-.088.176-.133.287-.265.441-.133.155-.279.348-.398.469-.133.133-.272.279-.117.545.155.266.69 1.136 1.48 1.842.818.728 1.506.953 1.72.11.215.156.48.332.695.176.216-.156.48-.458.72-.782.242-.324.484-.227.81-.1.326.126 2.066 1.026 2.42 1.203.354.178.59.263.678.414.088.15.088.875-.16 1.572z" />
  </svg>
);

export const Footer: React.FC = () => {
  const socialLinks = {
    linkedin: "https://www.linkedin.com/company/dzinfotech",
    instagram: "https://www.instagram.com/dz.infotech?igsh=MTdmYnBtdXV4ZmN5Zw==",
    whatsapp: "https://wa.me/919328525395"
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
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:text-[#25D366] hover:bg-white/10 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <Whatsapp className="w-5 h-5 fill-current" />
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
