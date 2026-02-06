import React from 'react';
import { Slack, Link, Search, FileDown, Repeat } from 'lucide-react';
import { SLACK_INVITE_URL } from '../constants';

const steps = [
  { icon: Slack, title: 'Join Slack', desc: 'Join our workspace to start a ticket.' },
  { icon: Link, title: 'Send URLs', desc: 'Paste your LinkedIn or directory search URLs.' },
  { icon: Search, title: 'We Scrape', desc: 'We verify emails & enrich data manually.' },
  { icon: FileDown, title: 'Receive List', desc: 'Get 10k verified leads in 3-4 hours.' },
  { icon: Repeat, title: 'Pay & Repeat', desc: 'Pay securely after delivery.' },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">How It Works</h2>
          <p className="text-lg text-slate-600">Five simple steps to your dream lead list.</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-sm border border-slate-100 lg:bg-transparent lg:shadow-none lg:border-none">
                  <div className="w-16 h-16 bg-white border-4 border-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-4 shadow-sm relative z-10">
                    <Icon size={28} />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-bold border-2 border-white">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
            <a 
                href={SLACK_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 text-white font-bold py-3 px-8 rounded-full hover:bg-slate-800 transition-colors shadow-lg"
            >
                <Slack size={18} />
                Start Your First Order
            </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;