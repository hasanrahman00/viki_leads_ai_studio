import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS, SLACK_INVITE_URL } from '../constants';

const ProductGrid: React.FC = () => {
  return (
    <section id="scrapers" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">Our Premium Scrapers</h2>
          <p className="text-lg text-slate-600">Powerful tools to extract data from any source you need.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product, index) => {
            const Icon = product.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all p-6 border border-slate-200 flex flex-col h-full group">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon size={24} />
                  </div>
                  {product.badge && (
                    <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                      {product.badge}
                    </span>
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-2">{product.title}</h3>
                <p className="text-slate-500 text-sm mb-6 flex-grow">
                  {product.description}
                </p>

                <div className="flex gap-3 mt-auto">
                   <a 
                    href={SLACK_INVITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-slate-900 text-white text-sm font-medium py-2 rounded-lg hover:bg-slate-800 transition-colors"
                   >
                    Request Leads
                   </a>
                   <button className="text-slate-400 hover:text-blue-600 transition-colors">
                    <ArrowRight size={20} />
                   </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;