import React, { useState } from 'react';
import { Menu, X, Slack } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NAV_ITEMS, SLACK_INVITE_URL } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);
    
    // Handle hash links (e.g., /#pricing)
    if (href.includes('#')) {
      e.preventDefault();
      const [path, hash] = href.split('#');
      
      if (location.pathname !== path) {
        // If we are on a different page, navigate to home first
        navigate('/');
        // Wait for navigation then scroll
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        // If already on home, just scroll
        const element = document.getElementById(hash);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-900/90 backdrop-blur-md border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              Viki Leads
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => {
              const isHash = item.href.includes('#');
              return isHash ? (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-gray-300 hover:text-white transition-colors text-sm font-medium cursor-pointer"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === item.href ? 'text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={SLACK_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-all text-sm font-medium"
            >
              <Slack size={16} />
              Join Slack
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-b border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => {
               const isHash = item.href.includes('#');
               return isHash ? (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700 cursor-pointer"
                >
                  {item.label}
                </a>
               ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700"
                >
                  {item.label}
                </Link>
               );
            })}
            <a
              href={SLACK_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-base font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 mt-4"
              onClick={() => setIsOpen(false)}
            >
              <Slack size={18} />
              Join Our Slack
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;