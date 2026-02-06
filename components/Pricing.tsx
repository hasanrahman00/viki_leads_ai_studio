import React from 'react';
import { Check, Info } from 'lucide-react';
import { PRICING_PLANS, SLACK_INVITE_URL } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">Transparent Pricing</h2>
          <p className="text-slate-400">No subscriptions. No credits. Pay per successful list.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PRICING_PLANS.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl p-8 ${
                plan.isPopular 
                  ? 'bg-slate-800 border-2 border-indigo-500 shadow-2xl shadow-indigo-900/20' 
                  : 'bg-slate-800/50 border border-slate-700'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                  MOST POPULAR
                </div>
              )}
              
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-slate-400">/ order</span>}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-slate-300 text-sm">
                    <Check className="text-emerald-400 mr-3 flex-shrink-0" size={18} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href={SLACK_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-3 px-6 rounded-xl font-bold text-center transition-colors ${
                  plan.isPopular 
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                    : 'bg-slate-700 hover:bg-slate-600 text-white'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-sm">
            <Info size={16} />
            <span className="font-semibold">Money-Back Guarantee:</span>
            If we can’t deliver as promised, request a full refund within 7 days.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;