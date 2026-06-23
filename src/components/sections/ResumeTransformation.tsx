import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ResumeTransformation() {
  const tools = ['Google Ads', 'Meta Ads', 'GA4', 'Looker Studio', 'GPT-4', 'Midjourney', 'Ahrefs', 'n8n', 'Klaviyo', '+11 more'];
  const certifications = ['Google Ads (5)', 'Microsoft Ads', 'Meta Blueprint', 'HubSpot Inbound', 'HubSpot Content', 'SEMrush SEO'];
  const aiStack = ['Custom GPTs', 'Prompt engineering for performance', 'AI-driven attribution modeling'];

  const resumeProjects = [
    "Reduced CPA from <strong class='text-brand-blue'>₹1,200 → ₹380</strong> for BookMyScans, 6-week Google Ads campaign",
    "Built lead-gen funnel generating <strong class='text-brand-blue'>312 leads at ₹640 CPL</strong> for Decfort",
    "Programmatic SEO build: <strong class='text-brand-blue'>400+ pages, 18K organic visits/month</strong>",
    "Email lifecycle automation in Klaviyo: <strong class='text-brand-blue'>42% open rate, 8% CTR</strong>",
    "AI ad creative pipeline (GPT-4 + Midjourney): <strong class='text-brand-blue'>200+ variants shipped/week</strong>",
    "Marketing automation with n8n: <strong class='text-brand-blue'>12 workflows live</strong> for EY",
    "Live Looker Studio dashboard for Razorpay across <strong class='text-brand-blue'>5 channels</strong>",
    "WhatsApp campaign on Gupshup: <strong class='text-brand-blue'>28% reply rate, ₹47 CPL</strong>"
  ];

  return (
    <section className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-brand-blue font-bold tracking-widest text-sm uppercase mb-4">
          RESUME TRANSFORMATION
        </div>
        <h2 className="text-4xl md:text-[56px] font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-16 max-w-4xl">
          Your resume on Day 1 vs. your resume on Day 121
        </h2>

        <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-10 mb-16">
          
          {/* Day 1 Resume */}
          <div className="flex-1 bg-[#F8F9FA] rounded-[32px] p-8 md:p-12 border border-slate-200 font-mono text-sm text-slate-500 w-full relative">
            <div className="absolute top-8 right-8 text-right">
              <div className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-xs font-bold w-max ml-auto mb-1">DAY 1</div>
              <div className="text-xs">Fresh Graduate</div>
            </div>
            
            <h3 className="text-2xl font-bold text-slate-700 mb-8 font-sans">
              [Your Name]
            </h3>

            <div className="space-y-6">
              <div>
                <div className="uppercase tracking-widest text-xs font-bold mb-2">Objective</div>
                <p>Seeking a challenging position in a reputed organization where I can utilize my skills and contribute to the growth of the company.</p>
              </div>
              
              <div>
                <div className="uppercase tracking-widest text-xs font-bold mb-2">Education</div>
                <p>BBA, [College], 2024</p>
              </div>

              <div>
                <div className="uppercase tracking-widest text-xs font-bold mb-2">Skills</div>
                <p>MS Office, Communication, Teamwork, Hard Working, Quick Learner, Time Management</p>
              </div>

              <div>
                <div className="uppercase tracking-widest text-xs font-bold mb-2">Internships</div>
                <p>—</p>
              </div>

              <div>
                <div className="uppercase tracking-widest text-xs font-bold mb-2">Projects</div>
                <p>—</p>
              </div>

              <div>
                <div className="uppercase tracking-widest text-xs font-bold mb-2">Certifications</div>
                <p>—</p>
              </div>

              <div>
                <div className="uppercase tracking-widest text-xs font-bold mb-2">Languages</div>
                <p>English, Hindi, Kannada</p>
              </div>

              <div>
                <div className="uppercase tracking-widest text-xs font-bold mb-2">Hobbies</div>
                <p>Reading, Listening to Music, Travelling, Cricket</p>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-slate-200 border-dashed text-center italic">
              References available on request.
            </div>
          </div>

          <div className="hidden lg:flex shrink-0 w-12 h-12 rounded-full bg-blue-100 items-center justify-center text-brand-blue self-center z-10">
            <ArrowRight className="w-6 h-6" />
          </div>

          {/* Day 121 Resume */}
          <div className="flex-1 bg-white rounded-[32px] p-8 md:p-12 border-2 border-blue-500 shadow-[0_20px_50px_-12px_rgba(37,99,235,0.15)] font-sans w-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-bl-[100px] -z-10" />
            
            <div className="flex justify-between items-end border-b-4 border-blue-500 pb-4 mb-6">
              <div>
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold w-max mb-3">DAY 121</div>
                <h3 className="text-2xl font-black text-slate-900">
                  [Your Name]
                </h3>
              </div>
              <div className="text-brand-blue font-bold text-sm tracking-tight text-right mb-1">
                AI-native performance marketer
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="uppercase tracking-widest text-brand-blue text-[11px] font-bold mb-2">Education</div>
                <p className="font-semibold text-slate-800 text-sm">BBA + <span className="font-bold">Post Graduate Program in Digital Marketing & Analytics</span>, Ashwini Trading Academy</p>
              </div>

              <div>
                <div className="uppercase tracking-widest text-brand-blue text-[11px] font-bold mb-3">Live Projects</div>
                <div className="space-y-3 text-sm">
                  {resumeProjects.map((html, idx) => (
                    <div key={idx} className="flex gap-3 items-start animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <div className="min-w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[10px] font-bold mt-0.5">
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                      <span className="text-slate-700 leading-snug" dangerouslySetInnerHTML={{ __html: html }} />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="uppercase tracking-widest text-brand-blue text-[11px] font-bold mb-2">Tools</div>
                <div className="flex flex-wrap gap-2">
                  {tools.map(tool => (
                    <span key={tool} className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md text-[11px] font-semibold">{tool}</span>
                  ))}
                </div>
              </div>

              <div>
                <div className="uppercase tracking-widest text-brand-blue text-[11px] font-bold mb-2">Certifications</div>
                <div className="flex flex-wrap gap-2">
                  {certifications.map(cert => (
                    <span key={cert} className="bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-md text-[11px] font-semibold">{cert}</span>
                  ))}
                </div>
              </div>

              <div>
                <div className="uppercase tracking-widest text-brand-blue text-[11px] font-bold mb-2">AI Stack</div>
                <div className="flex flex-wrap gap-2">
                  {aiStack.map(ai => (
                    <span key={ai} className="bg-purple-50 text-purple-700 px-2.5 py-1 rounded-md text-[11px] font-semibold">{ai}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 text-slate-500 italic text-sm">
              Two dense pages of shippable work.
            </div>
          </div>
        </div>

        <p className="text-center text-slate-500 text-xl font-medium max-w-2xl mx-auto italic">
          This is the difference 120 days makes. Same person – a portfolio's worth of credibility heavier.
        </p>
      </div>
    </section>
  );
}
