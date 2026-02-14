import React from 'react';
import { Check, Zap, Users, CreditCard } from 'lucide-react';
import { SLACK_INVITE_URL } from '../constants';

const SalesNavPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-20 pb-20">
      
      {/* Header Section */}
      <div className="bg-slate-900 text-white py-16 relative z-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            LinkedIn Sales Navigator <br />
            <span className="text-indigo-400">Advanced Plan</span>
          </h1>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
             Unlock team collaboration, CRM integration, and advanced insights with Official LinkedIn Sales Navigator Advanced activation.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-medium">
            <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Official Activation by Viki Leads
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        
        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          
          <div className="p-8 md:p-12">
            
            {/* Intro */}
            <p className="text-slate-600 mb-12 leading-relaxed text-center">
              Empower your team with advanced collaboration tools, CRM integrations, and AI-powered insights. 
              We ensure <strong>100% official activation</strong>, fast turnaround, secure onboarding, and local after-sales support.
              <br/><br/>
              <strong>Delivery Time:</strong> Orders are processed within 1–3 hours.
            </p>

            {/* Advanced Plan Features */}
            <div className="max-w-3xl mx-auto mb-16">
              <div className="flex items-center gap-3 mb-6 justify-center">
                <div className="p-3 bg-indigo-100 text-indigo-700 rounded-lg">
                  <Zap size={28} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Sales Navigator Advanced</h2>
              </div>
              <p className="text-center text-lg font-semibold text-indigo-600 mb-8 uppercase tracking-wider">For Teams & Agencies</p>
              <p className="text-slate-600 mb-10 text-center">Perfect for teams selling together with advanced collaboration, tracking, and CRM connectivity.</p>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Core Search & Prospecting</h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex gap-3">
                      <Check size={18} className="text-indigo-600 mt-1 flex-shrink-0" />
                      <span><strong>50+ Advanced Search Filters</strong> to pinpoint ideal leads & accounts</span>
                    </li>
                    <li className="flex gap-3">
                      <Check size={18} className="text-indigo-600 mt-1 flex-shrink-0" />
                      <span>Lead & Account Recommendations based on your activity</span>
                    </li>
                    <li className="flex gap-3">
                      <Check size={18} className="text-indigo-600 mt-1 flex-shrink-0" />
                      <span>Relationship Map for visual org charts</span>
                    </li>
                    <li className="flex gap-3">
                      <Check size={18} className="text-indigo-600 mt-1 flex-shrink-0" />
                      <span>Real-time Alerts on job changes & news</span>
                    </li>
                    <li className="flex gap-3">
                      <Check size={18} className="text-indigo-600 mt-1 flex-shrink-0" />
                      <span><strong>50 InMail credits/month</strong></span>
                    </li>
                    <li className="flex gap-3">
                      <Check size={18} className="text-indigo-600 mt-1 flex-shrink-0" />
                      <span>Saved Lists & Searches</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Advanced Features</h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex gap-3">
                      <Check size={18} className="text-indigo-600 mt-1 flex-shrink-0" />
                      <span><strong>TeamLink</strong> to unlock warm paths via colleagues</span>
                    </li>
                    <li className="flex gap-3">
                      <Check size={18} className="text-indigo-600 mt-1 flex-shrink-0" />
                      <span><strong>Smart Links</strong> to share content & track engagement</span>
                    </li>
                    <li className="flex gap-3">
                      <Check size={18} className="text-indigo-600 mt-1 flex-shrink-0" />
                      <span><strong>CRM Integration</strong> (Salesforce, HubSpot)</span>
                    </li>
                    <li className="flex gap-3">
                      <Check size={18} className="text-indigo-600 mt-1 flex-shrink-0" />
                      <span>Advanced Reporting & Analytics</span>
                    </li>
                    <li className="flex gap-3">
                      <Check size={18} className="text-indigo-600 mt-1 flex-shrink-0" />
                      <span>AI Insights like Account IQ</span>
                    </li>
                    <li className="flex gap-3">
                      <Check size={18} className="text-indigo-600 mt-1 flex-shrink-0" />
                      <span>Team Collaboration Tools</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 bg-indigo-50 rounded-xl border border-indigo-200 text-indigo-900">
                <h4 className="font-bold mb-2 text-lg">Simple Activation Process</h4>
                <p className="text-sm">Invitation based. Share only your email. No login details required.</p>
                <p className="text-xs text-indigo-600 mt-2">Accept invitation to activate instantly.</p>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Why Choose Sales Navigator Advanced?</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white border-2 border-indigo-100 rounded-xl p-6 hover:border-indigo-300 transition-colors">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="text-indigo-600" size={24} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Team Collaboration</h4>
                  <p className="text-slate-600 text-sm">Leverage TeamLink to find warm introductions through your network and coordinate outreach across your team.</p>
                </div>

                <div className="bg-white border-2 border-indigo-100 rounded-xl p-6 hover:border-indigo-300 transition-colors">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="text-indigo-600" size={24} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">CRM Integration</h4>
                  <p className="text-slate-600 text-sm">Seamlessly sync with Salesforce, HubSpot, and other CRMs to keep your data unified and workflows efficient.</p>
                </div>

                <div className="bg-white border-2 border-indigo-100 rounded-xl p-6 hover:border-indigo-300 transition-colors">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <Check className="text-indigo-600" size={24} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Smart Links & Analytics</h4>
                  <p className="text-slate-600 text-sm">Track content engagement with Smart Links and get detailed reporting on your team's prospecting activities.</p>
                </div>
              </div>
            </div>

            {/* Pricing CTA */}
            <div className="bg-gradient-to-r from-slate-900 to-indigo-900 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
              <h2 className="text-3xl font-bold mb-4">Get Sales Navigator Advanced Today</h2>
              <div className="flex justify-center items-baseline gap-2 mb-2">
                <span className="text-5xl font-extrabold">$30</span>
                <span className="text-indigo-200">/ month</span>
              </div>
              <p className="text-indigo-300 mb-8 uppercase text-sm tracking-widest font-semibold">No Recurring Subscription</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={SLACK_INVITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2 bg-white text-indigo-900 font-bold py-4 px-8 rounded-xl hover:bg-indigo-50 transition-all shadow-lg hover:scale-105 transform"
                >
                  <CreditCard size={20} />
                  Order Now via Slack
                </a>
              </div>
              <p className="mt-6 text-sm text-slate-400">
                Contact us on Slack to start the activation process. 
                <br/>Safe, secure, and officially verified.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesNavPage;