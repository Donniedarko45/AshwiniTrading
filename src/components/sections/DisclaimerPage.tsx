import React from 'react';
import { AlertTriangle, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 pt-28 pb-20 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Back Navigation */}
        <div className="mb-8 text-left">
          <a
            href="#/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-primary hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </a>
        </div>

        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-brand-navy border border-white/10 rounded-3xl p-8 sm:p-12 mb-10 text-left shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold tracking-widest uppercase mb-4">
            <AlertTriangle className="w-4 h-4" /> Important Legal Notice
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Disclaimer
          </h1>
          <p className="text-slate-400 text-sm font-medium">
            Effective Date: July 2026 | Last Updated: July 2026
          </p>
        </motion.div>

        {/* Content Body */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 text-left space-y-8 text-slate-300 text-sm leading-relaxed">
          <section className="space-y-3">
            <p>
              The information, courses, educational content, webinars, workshops, videos, articles, and materials provided by <strong>Ashwini Trading Academy</strong> (&quot;Academy&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) are intended solely for educational and informational purposes.
            </p>
            <p className="text-slate-400 italic">
              By accessing our website or participating in any of our programs, you acknowledge and agree to this Disclaimer.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* 1. Educational Purpose Only */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">1. Educational Purpose & No Investment Advice</h2>
            <p>
              All content provided by Ashwini Trading Academy is designed to enhance knowledge of financial markets, investing, technical analysis, and trading.
            </p>
            <div className="bg-brand-primary/10 border border-brand-primary/20 p-4 rounded-xl text-brand-primary text-xs leading-relaxed font-semibold">
              Our programs are intended for educational purposes only and should not be interpreted as personalized financial, investment, legal, accounting, or tax advice.
            </div>
            <p>
              Any examples, case studies, market discussions, charts, or strategies shared during training are intended solely for learning and should NOT be treated as recommendations to buy, sell, or hold any financial instrument.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* 2. Market Risks */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">2. Market Risk Disclosure</h2>
            <p>
              Trading and investing in financial markets involve substantial risk, including the possible loss of principal capital.
            </p>
            <p>
              Past performance, historical examples, back-tested strategies, or classroom demonstrations do NOT guarantee future performance or results.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* 3. No Guarantee of Results */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">3. No Guarantee of Profit or Results</h2>
            <p>Ashwini Trading Academy does not guarantee:</p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-300 pl-2">
              <li>Trading profits or investment returns</li>
              <li>Income generation or wealth creation</li>
              <li>Employment opportunities or examination outcomes</li>
            </ul>
            <p>
              Individual performance depends on personal knowledge, experience, discipline, risk management, and market conditions.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* 4. Limitation of Liability */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">4. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Ashwini Trading Academy, its trainers, and representatives shall not be liable for any direct or indirect losses or damages arising from reliance on educational materials or financial decisions made by users.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* Contact Box */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
            <h3 className="text-base font-bold text-white">Contact Us</h3>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-primary" />
                <span>Indiranagar, Bengaluru, Karnataka 560038</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-primary" />
                <a href="tel:+918861756040" className="hover:text-white">+91 88617 56040</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-primary" />
                <a href="mailto:info@ashwinitradingacademy.com" className="hover:text-white">info@ashwinitradingacademy.com</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
