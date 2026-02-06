import React from 'react';
import { Slack, Twitter, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SLACK_INVITE_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pre-Footer CTA */}
        <div className="mb-16 p-8 md:p-12 bg-gradient-to-r from-indigo-900/40 to-slate-800/40 rounded-3xl text-center border border-indigo-500/20 shadow-xl backdrop-blur-sm">
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">Ready to scale your outreach?</h3>
            <p className="mb-8 text-indigo-200 text-lg max-w-2xl mx-auto">
                Join 500+ sales teams getting premium data delivered daily. No subscriptions, just results.
            </p>
            <a 
                href={SLACK_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg hover:shadow-indigo-500/25 transform hover:-translate-y-0.5"
            >
                <Slack size={20} />
                Get Started on Slack
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-slate-800 pb-12">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <span className="text-2xl font-bold text-white tracking-tight">Viki Leads</span>
            <p className="mt-4 text-slate-400 leading-relaxed mb-6 max-w-sm">
              We extract and enrich B2B data so you can focus on closing deals. 
              Verified emails, direct dials, and custom scraping solutions delivered in hours.
            </p>
            
            <div className="space-y-3 mb-6">
                <a href="mailto:contact@vikileads.co" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                    <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-indigo-600/20 transition-colors">
                        <Mail size={18} className="text-indigo-400" />
                    </div>
                    contact@vikileads.co
                </a>
            </div>

            <div className="flex gap-4">
              <a href={SLACK_INVITE_URL} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-indigo-600 hover:text-white transition-all" aria-label="Slack">
                <Slack size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-blue-400 hover:text-white transition-all" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-all" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-white font-bold mb-6">Solutions</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="/#scrapers" className="hover:text-indigo-400 transition-colors">LinkedIn Scraper</a></li>
              <li><a href="/#scrapers" className="hover:text-indigo-400 transition-colors">Sales Nav Export</a></li>
              <li><a href="/#scrapers" className="hover:text-indigo-400 transition-colors">Email Enrichment</a></li>
              <li><Link to="/sales-nav" className="hover:text-indigo-400 transition-colors">Sales Nav Activation</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="/#pricing" className="hover:text-indigo-400 transition-colors">Pricing</a></li>
              <li><a href="/#how-it-works" className="hover:text-indigo-400 transition-colors">How It Works</a></li>
              <li><a href="/#faqs" className="hover:text-indigo-400 transition-colors">FAQs</a></li>
              <li><a href="mailto:contact@vikileads.co" className="hover:text-indigo-400 transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>
        
        {/* SEO Text */}
        <div className="pt-8 pb-8 border-b border-slate-800">
            <p className="text-xs text-slate-600 leading-relaxed text-justify">
                <strong>Viki Leads</strong> is a premier B2B lead generation and data scraping agency. We specialize in 
                <strong> LinkedIn Sales Navigator scraping</strong>, <strong>email verification</strong>, and <strong>waterfall data enrichment</strong>. 
                Unlike traditional software, our done-for-you service ensures 99.9% deliverability on email lists for cold outreach. 
                We serve sales development teams (SDRs), marketing agencies, and recruiters looking for high-quality, 
                bounce-free contact lists. Services include <strong>Sales Navigator extraction</strong>, <strong>LinkedIn profile scraping</strong>, 
                <strong>finding direct dial phone numbers</strong>, and <strong>local business lead generation</strong>. 
                Operating with GDPR compliance and strict data accuracy standards.
            </p>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Viki Leads. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;