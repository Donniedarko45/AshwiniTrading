import React, { useState } from 'react';

export default function Curriculum() {
  const [activeTab, setActiveTab] = useState('PCP');

  return (
    <section id="curriculum" className="bg-white py-24 px-6 md:px-12">
       <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            What our <span className="text-blue-600">digital marketing training in Bangalore</span> covers – every module, every topic
          </h2>
          <p className="text-slate-600 text-lg font-medium max-w-3xl mx-auto leading-relaxed mb-10">
            3 courses. One direction: your dream job. Every hour in Course 1 counts toward Course 2. Every hour in Course 2 counts toward Course 3. Nothing is repeated. Everything builds.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
             <button 
                onClick={() => setActiveTab('PCP')} 
                className={`px-5 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all border ${activeTab === 'PCP' ? 'bg-blue-50 border-blue-200 text-blue-700' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}
             >
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500" /> Course 1 - PCP (3 months)</div>
             </button>
             <button 
                onClick={() => setActiveTab('PGCP')} 
                className={`px-5 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all border ${activeTab === 'PGCP' ? 'bg-purple-50 border-purple-200 text-purple-700' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}
             >
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-500" /> Course 2 - PGCP (5 months)</div>
             </button>
             <button 
                onClick={() => setActiveTab('ELEVATE')} 
                className={`px-5 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all border ${activeTab === 'ELEVATE' ? 'bg-amber-50 border-amber-200 text-amber-700' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}
             >
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-amber-500" /> Course 3 - ELEVATE™ (7 months)</div>
             </button>
          </div>
       </div>

       <div className="max-w-7xl mx-auto">
          {activeTab === 'PCP' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
               <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-8">
                  <div>
                     <div className="text-blue-600 text-[10px] font-extrabold tracking-widest uppercase bg-blue-50 px-2 py-1 rounded w-fit mb-2">● COURSE 1 - PCP</div>
                     <h3 className="text-2xl font-bold text-slate-900">Professional Certification in Digital Marketing with AI</h3>
                     <p className="text-slate-500 text-sm font-medium mt-1">3 Months · 132 Hours · Mon–Fri Weekdays</p>
                  </div>
                  <div className="hidden sm:flex flex-col items-end gap-2">
                     <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">11 modules</span>
                     <button className="bg-[#FF7B47] text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1">SWIPE →</button>
                  </div>
               </div>

               <div className="flex overflow-x-auto gap-6 pb-8 snap-x">
                  {/* Module 1 */}
                  <div className="min-w-[340px] md:min-w-[400px] bg-white border border-slate-200 rounded-3xl p-6 shadow-sm snap-start shrink-0">
                     <div className="flex justify-between items-start mb-6">
                        <div className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-lg">M1</div>
                        <div className="text-slate-400 text-xs font-bold">1 / 11</div>
                     </div>
                     <h4 className="text-[19px] font-bold text-slate-900 mb-2 line-clamp-2 min-h-[56px]">Digital Marketing Foundation & Business Thinking</h4>
                     <p className="text-slate-500 text-xs font-medium mb-6">2 Sessions · 4 Hours</p>
                     
                     <ul className="space-y-6">
                        <li className="flex gap-3">
                           <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"/>
                           <div>
                              <p className="text-sm font-medium text-slate-700 mb-2">Introduction to marketing, DM evolution, and the digital marketing ecosystem</p>
                              <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase tracking-wider">THEORY</span>
                           </div>
                        </li>
                        <li className="flex gap-3">
                           <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"/>
                           <div>
                              <p className="text-sm font-medium text-slate-700 mb-2">Principles of marketing, ATL/BTL/TTL funnels, and integrated strategy</p>
                           </div>
                        </li>
                     </ul>
                  </div>

                  {/* Module 2 */}
                  <div className="min-w-[340px] md:min-w-[400px] bg-white border border-slate-200 rounded-3xl p-6 shadow-sm snap-start shrink-0">
                     <div className="flex justify-between items-start mb-6">
                        <div className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-lg">M2</div>
                        <div className="text-slate-400 text-xs font-bold">2 / 11</div>
                     </div>
                     <h4 className="text-[19px] font-bold text-slate-900 mb-2 line-clamp-2 min-h-[56px]">Website Design & Development with AI – WordPress</h4>
                     <p className="text-slate-500 text-xs font-medium mb-6">2 Sessions · 4 Hours</p>
                     
                     <ul className="space-y-6">
                        <li className="flex gap-3">
                           <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"/>
                           <div>
                              <p className="text-sm font-medium text-slate-700 mb-2">WordPress website setup - domain, hosting, and site structure</p>
                              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded uppercase tracking-wider">PRACTICAL</span>
                           </div>
                        </li>
                        <li className="flex gap-3">
                           <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"/>
                           <div>
                              <p className="text-sm font-medium text-slate-700 mb-2">Elementor page builder - designing professional pages without code</p>
                           </div>
                        </li>
                     </ul>
                  </div>

                  {/* Module 3 */}
                  <div className="min-w-[340px] md:min-w-[400px] bg-white border border-slate-200 rounded-3xl p-6 shadow-sm snap-start shrink-0">
                     <div className="flex justify-between items-start mb-6">
                        <div className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-lg">M3</div>
                        <div className="text-slate-400 text-xs font-bold">3 / 11</div>
                     </div>
                     <h4 className="text-[19px] font-bold text-slate-900 mb-2 line-clamp-2 min-h-[56px]">SEO with AI – Classic + Next-Gen Search</h4>
                     <p className="text-slate-500 text-xs font-medium mb-6">12 Sessions · 24 Hours</p>
                     
                     <ul className="space-y-6">
                        <li className="flex gap-3">
                           <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"/>
                           <div>
                              <p className="text-sm font-medium text-slate-700 mb-2">Keyword research and strategic topic planning</p>
                              <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase tracking-wider">THEORY</span>
                           </div>
                        </li>
                        <li className="flex gap-3">
                           <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"/>
                           <div>
                              <p className="text-sm font-medium text-slate-700 mb-2">On-page SEO - content, headings, image optimization, anchor tags</p>
                              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded uppercase tracking-wider">PRACTICAL</span>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
          )}

          {activeTab === 'PGCP' && (
             <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
               <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-8">
                  <div>
                     <div className="text-purple-600 text-[10px] font-extrabold tracking-widest uppercase bg-purple-50 px-2 py-1 rounded w-fit mb-2">● COURSE 2 - PGCP</div>
                     <h3 className="text-2xl font-bold text-slate-900">Post Graduate Certification in AI-Driven Digital Marketing</h3>
                     <p className="text-slate-500 text-sm font-medium mt-1">5 Months · 220 Hours · All 13 Modules + 3 Specialisations + 5 Industry Deep Dives</p>
                  </div>
                  <div className="hidden sm:flex flex-col items-end gap-2">
                     <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">9 modules</span>
                     <button className="bg-[#FF7B47] text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1">SWIPE →</button>
                  </div>
               </div>

               <div className="flex overflow-x-auto gap-6 pb-8 snap-x">
                  {/* Base Note */}
                  <div className="min-w-[340px] md:min-w-[400px] bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-sm snap-start shrink-0">
                     <div className="flex justify-between items-start mb-6">
                        <div className="bg-slate-200 text-slate-700 text-xs font-bold px-3 py-1 rounded-lg">Note</div>
                        <div className="text-slate-400 text-xs font-bold">1 / 9</div>
                     </div>
                     <h4 className="text-[19px] font-bold text-slate-900 mb-2 line-clamp-2 min-h-[56px]">Modules 1–10 – Same as Course 1, But Deeper</h4>
                     <p className="text-slate-500 text-xs font-medium mb-6">Expanded content, more live projects</p>
                     
                     <ul className="space-y-6">
                        <li className="flex gap-3">
                           <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0"/>
                           <div>
                              <p className="text-sm font-medium text-slate-700 mb-2">Module 3 SEO: + programmatic SEO, parasite SEO, international SEO, and App Store SEO (ASO)</p>
                              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded uppercase tracking-wider">PRACTICAL</span>
                           </div>
                        </li>
                        <li className="flex gap-3">
                           <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0"/>
                           <div>
                              <p className="text-sm font-medium text-slate-700 mb-2">Module 4 Social Media: + HeyGen AI video, Veo 3, and advanced influencer agreement frameworks</p>
                              <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase tracking-wider">THEORY</span>
                           </div>
                        </li>
                     </ul>
                  </div>

                  {/* Module 11 */}
                  <div className="min-w-[340px] md:min-w-[400px] bg-white border border-purple-200 rounded-3xl p-6 shadow-sm snap-start shrink-0">
                     <div className="flex justify-between items-start mb-6">
                        <div className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-lg">M11</div>
                        <div className="text-slate-400 text-xs font-bold">2 / 9</div>
                     </div>
                     <h4 className="text-[19px] font-bold text-slate-900 mb-2 line-clamp-2 min-h-[56px]">Performance Marketing & E-Commerce Growth</h4>
                     <p className="text-slate-500 text-xs font-medium mb-6">9 Sessions · 18 Hours</p>
                     
                     <ul className="space-y-6">
                        <li className="flex gap-3">
                           <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0"/>
                           <div>
                              <p className="text-sm font-medium text-slate-700 mb-2">Performance marketing strategy - audience targeting, segmentation, and persona building with AI</p>
                              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded uppercase tracking-wider">PRACTICAL</span>
                           </div>
                        </li>
                         <li className="flex gap-3">
                           <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0"/>
                           <div>
                              <p className="text-sm font-medium text-slate-700 mb-2">Amazon Advertising - Sponsored Products, Sponsored Brands, Sponsored Display</p>
                              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded uppercase tracking-wider">PRACTICAL</span>
                           </div>
                        </li>
                     </ul>
                  </div>

                   {/* Module 12 */}
                  <div className="min-w-[340px] md:min-w-[400px] bg-white border border-purple-200 rounded-3xl p-6 shadow-sm snap-start shrink-0">
                     <div className="flex justify-between items-start mb-6">
                        <div className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-lg">M12</div>
                        <div className="text-slate-400 text-xs font-bold">3 / 9</div>
                     </div>
                     <h4 className="text-[19px] font-bold text-slate-900 mb-2 line-clamp-2 min-h-[56px]">Online Reputation Management & Brand Protection</h4>
                     <p className="text-slate-500 text-xs font-medium mb-6">3 Sessions · 6 Hours</p>
                     
                     <ul className="space-y-6">
                        <li className="flex gap-3">
                           <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0"/>
                           <div>
                              <p className="text-sm font-medium text-slate-700 mb-2">ORM fundamentals - why your online reputation is your most valuable marketing asset</p>
                              <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase tracking-wider">THEORY</span>
                           </div>
                        </li>
                         <li className="flex gap-3">
                           <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0"/>
                           <div>
                              <p className="text-sm font-medium text-slate-700 mb-2">Social listening with AI - Brand24, Mention, Google Alerts</p>
                              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded uppercase tracking-wider">PRACTICAL</span>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>
             </div>
          )}

           {activeTab === 'ELEVATE' && (
             <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
               <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-8">
                  <div>
                     <div className="text-amber-600 text-[10px] font-extrabold tracking-widest uppercase bg-amber-50 px-2 py-1 rounded w-fit mb-2">● COURSE 3 - ELEVATE™</div>
                     <h3 className="text-2xl font-bold text-slate-900">Digital Marketing + AI for Business Teams</h3>
                     <p className="text-slate-500 text-sm font-medium mt-1">7 Months · 268 Hours · Months 1–5 same as PGCP; Months 6–7 add the AI for Business Teams track</p>
                  </div>
                  <div className="hidden sm:flex flex-col items-end gap-2">
                     <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">16 modules</span>
                     <button className="bg-[#FF7B47] text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1">SWIPE →</button>
                  </div>
               </div>

               <div className="flex overflow-x-auto gap-6 pb-8 snap-x">
                  {/* Base Note */}
                  <div className="min-w-[340px] md:min-w-[400px] bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-sm snap-start shrink-0">
                     <div className="flex justify-between items-start mb-6">
                        <div className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-lg">★</div>
                        <div className="text-slate-600 text-xs font-bold bg-slate-200 px-2.5 py-1 rounded-md">Included</div>
                     </div>
                     <h4 className="text-[19px] font-bold text-slate-900 mb-2 line-clamp-2 min-h-[56px]">Everything in PGCP – fully included</h4>
                     <p className="text-slate-500 text-xs font-medium mb-6">All 5 months of PGCP, then 2 more</p>
                     
                     <ul className="space-y-6">
                        <li className="flex gap-3">
                           <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0"/>
                           <div>
                              <p className="text-sm font-medium text-slate-700 mb-2">All 13 PGCP modules + 3 specialisations (SEO & AI Search, Performance Marketing, AI E-Commerce)</p>
                              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded uppercase tracking-wider">PRACTICAL</span>
                           </div>
                        </li>
                        <li className="flex gap-3">
                           <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0"/>
                           <div>
                              <p className="text-sm font-medium text-slate-700 mb-2">5 industry domain deep dives + the real-budget agency capstone</p>
                              <span className="text-[10px] font-bold text-[#FF7B47] bg-orange-50 px-2 py-0.5 rounded uppercase tracking-wider">HANDS-ON PROJECT</span>
                           </div>
                        </li>
                     </ul>
                  </div>

                  {/* B1 */}
                  <div className="min-w-[340px] md:min-w-[400px] bg-white border border-amber-200 rounded-3xl p-6 shadow-sm snap-start shrink-0">
                     <div className="flex justify-between items-start mb-6">
                        <div className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-lg">B1</div>
                        <div className="text-slate-400 text-xs font-bold">1 / 16</div>
                     </div>
                     <h4 className="text-[19px] font-bold text-slate-900 mb-2 line-clamp-2 min-h-[56px]">AI Business Strategy Overview & Maturity Model</h4>
                     
                     <ul className="space-y-4 mt-6">
                        <li className="flex gap-3 items-center">
                           <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"/>
                           <div>
                              <p className="text-sm font-medium text-slate-700">AI transformation lifecycle</p>
                              <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase tracking-wider mt-1 block w-fit">THEORY</span>
                           </div>
                        </li>
                         <li className="flex gap-3 items-center">
                           <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"/>
                           <div>
                              <p className="text-sm font-medium text-slate-700">Top 20 AI business patterns</p>
                              <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase tracking-wider mt-1 block w-fit">THEORY</span>
                           </div>
                        </li>
                         <li className="flex gap-3 items-center">
                           <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"/>
                           <div>
                              <p className="text-sm font-medium text-slate-700">AI maturity assessment</p>
                              <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase tracking-wider mt-1 block w-fit">THEORY</span>
                           </div>
                        </li>
                     </ul>
                  </div>

                  {/* B2 */}
                  <div className="min-w-[340px] md:min-w-[400px] bg-white border border-amber-200 rounded-3xl p-6 shadow-sm snap-start shrink-0">
                     <div className="flex justify-between items-start mb-6">
                        <div className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-lg">B2</div>
                        <div className="text-slate-400 text-xs font-bold">2 / 16</div>
                     </div>
                     <h4 className="text-[19px] font-bold text-slate-900 mb-2 line-clamp-2 min-h-[56px]">AI-Native Analytics & Business Insight Generation</h4>
                     
                     <ul className="space-y-4 mt-6">
                        <li className="flex gap-3 items-center">
                           <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"/>
                           <div>
                              <p className="text-sm font-medium text-slate-700">Conversational analytics</p>
                              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded uppercase tracking-wider mt-1 block w-fit">PRACTICAL</span>
                           </div>
                        </li>
                         <li className="flex gap-3 items-center">
                           <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"/>
                           <div>
                              <p className="text-sm font-medium text-slate-700">Text-to-SQL</p>
                              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded uppercase tracking-wider mt-1 block w-fit">PRACTICAL</span>
                           </div>
                        </li>
                         <li className="flex gap-3 items-center">
                           <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"/>
                           <div>
                              <p className="text-sm font-medium text-slate-700">Multi-source synthesis</p>
                              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded uppercase tracking-wider mt-1 block w-fit">PRACTICAL</span>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>
             </div>
          )}
       </div>
    </section>
  );
}
