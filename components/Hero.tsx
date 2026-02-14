import React from 'react';
import { ArrowRight, Slack, CheckCircle } from 'lucide-react';
import { SLACK_INVITE_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 pt-20 pb-40 lg:pt-32 lg:pb-48">
      
      {/* Abstract Background Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Now delivering in under 4 hours
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-8">
          Stop Scraping. Start Closing. <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
            Verified B2B Leads Delivered in Hours.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-xl text-gray-300 mb-10 leading-relaxed">
          We turn your LinkedIn searches into actionable data. No complex software or monthly subscriptions—just send a URL and receive up to 10,000 verified leads with &lt;1% bounce rate today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16 w-full">
          <a
            href={SLACK_INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-4 text-base font-bold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30"
          >
            <Slack size={20} />
            Join Our Slack
          </a>
          <a
            href="#pricing"
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-4 text-base font-bold text-slate-900 bg-white rounded-xl hover:bg-slate-50 transition-all shadow-lg"
          >
            See Pricing
            <ArrowRight size={20} />
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-12 text-sm font-medium text-gray-400">
          <div className="flex items-center gap-2">
            <CheckCircle className="text-emerald-500" size={18} />
            10k verified leads for $99
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="text-emerald-500" size={18} />
            Delivered in 3-4 hours
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="text-emerald-500" size={18} />
            No invalid emails
          </div>
        </div>
      </div>

      {/* Curved Bottom Wave SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg 
          className="relative block w-[calc(100%+1.3px)] h-[60px] sm:h-[120px]" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
        >
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,96L48,112C96,128,192,160,288,176C384,192,480,192,576,176C672,160,768,128,864,128C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;