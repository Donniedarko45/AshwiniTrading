import React from 'react';
import { FileText, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export default function TermsAndConditions() {
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
            <FileText className="w-4 h-4" /> Terms of Service
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Terms & Conditions
          </h1>
          <p className="text-slate-400 text-sm font-medium">
            Effective Date: July 2026 | Last Updated: July 2026
          </p>
        </motion.div>

        {/* Content Body */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 text-left space-y-8 text-slate-300 text-sm leading-relaxed">
          <section className="space-y-3">
            <p>
              Welcome to <strong>Ashwini Trading Academy</strong> (&quot;Academy&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). These Terms & Conditions govern your access to and use of our website, courses, training programs, and related services. By accessing our website or enrolling in any of our programs, you agree to comply with these Terms & Conditions.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* 1. Courses & Training Programs */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">1. Courses & Training Programs</h2>
            <p>
              Ashwini Trading Academy offers educational programs related to stock markets, investing, technical analysis, options trading, and financial literacy through:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-300 pl-2">
              <li>Online Learning & Webinars</li>
              <li>Offline Classroom Training in Bengaluru</li>
              <li>Hybrid Learning Programs</li>
            </ul>
            <p className="text-slate-400 text-xs">
              Course contents, schedules, duration, and fees are subject to change without prior notice to enhance the learning experience.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* 2. Enrolment & Payments */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">2. Enrolment & Payments</h2>
            <p>
              Course enrolment is confirmed only after successful registration and receipt of the applicable course fee. Fees must be paid through approved payment methods provided by the Academy.
            </p>
            <p>The Academy reserves the right to accept or decline any admission request at its sole discretion.</p>
          </section>

          <hr className="border-white/10" />

          {/* 3. Intellectual Property Rights */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">3. Intellectual Property</h2>
            <p>
              All course materials, videos, presentations, study notes, templates, website graphics, and logos are the intellectual property of Ashwini Trading Academy.
            </p>
            <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl text-red-200 text-xs space-y-1">
              <strong>Strictly Prohibited:</strong> Copying, recording live sessions, sharing login credentials, redistributing study materials, or uploading course content to public platforms without prior written consent. Violators will face legal action.
            </div>
          </section>

          <hr className="border-white/10" />

          {/* 4. Educational Purpose & Market Risk */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">4. Educational Purpose & Market Risks</h2>
            <p>
              All courses offered are intended solely for educational and informational purposes. The Academy does NOT guarantee trading profits, investment returns, or financial outcomes.
            </p>
            <p>
              Trading and investing in financial markets involve risk of capital loss. Students are encouraged to conduct independent research and exercise prudence.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* 5. Governing Law */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">5. Governing Law & Jurisdiction</h2>
            <p>
              These Terms & Conditions are governed by the laws of India. Any legal disputes arising out of these terms shall be subject to the exclusive jurisdiction of the competent courts in <strong>Bengaluru, Karnataka</strong>.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* Contact Box */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
            <h3 className="text-base font-bold text-white">Questions About Our Terms?</h3>
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
