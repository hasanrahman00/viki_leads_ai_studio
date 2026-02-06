import React from 'react';
import { TARGET_AUDIENCE } from '../constants';

const TargetAudience: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Who Benefits from Viki Leads?</h2>
            <p className="mt-4 text-lg text-slate-600">Tailored solutions for every growth-focused professional.</p>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TARGET_AUDIENCE.map((item, idx) => {
                const Icon = item.icon;
                return (
                    <div key={idx} className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-all">
                        <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-4">
                            <Icon size={28} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                )
            })}
         </div>
      </div>
    </section>
  );
};

export default TargetAudience;