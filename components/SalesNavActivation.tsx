import React from 'react';
import { Check, Unlock } from 'lucide-react';
import { SLACK_INVITE_URL } from '../constants';

const SalesNavActivation: React.FC = () => {
  return (
    <section id="sales-nav" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-indigo-900 to-blue-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-blue-300 font-bold uppercase tracking-wider text-sm mb-4">
                <Unlock size={16} />
                Exclusive Offer
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
                LinkedIn Sales Navigator Advanced Activation
              </h2>
              <p className="text-blue-100 text-lg mb-8">
                Don't pay $100+/month to LinkedIn. For just <span className="text-white font-bold">$50</span>, we activate a Sales Navigator Advanced account for you for one month. Run unlimited searches and gather your URLs effortlessly.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  'Full Account Setup & Activation',
                  'Advanced Search Filters Unlocked',
                  'Unlimited Search URL Exports',
                  'Training Tips & Best Practices'
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-white">
                    <span className="bg-blue-500/20 text-blue-300 p-1 rounded-full mr-3">
                      <Check size={16} strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <a 
                href={SLACK_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-indigo-900 font-bold py-3 px-8 rounded-xl hover:bg-blue-50 transition-colors text-center w-full sm:w-auto shadow-lg"
              >
                Activate Now via Slack
              </a>
            </div>
            
            <div className="relative bg-slate-800 min-h-[300px] lg:min-h-full">
              {/* Decorative Mockup Area */}
               <img 
                src="https://picsum.photos/800/800?grayscale" 
                alt="Sales Navigator Interface" 
                className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-indigo-900/90 lg:to-indigo-900"></div>
              <div className="absolute inset-0 flex items-center justify-center p-12">
                 <div className="text-center">
                    <div className="text-6xl font-bold text-white mb-2">$50</div>
                    <div className="text-blue-200 font-medium">/ month</div>
                    <div className="mt-4 text-xs text-slate-400 uppercase tracking-widest">No recurring subscription</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesNavActivation;