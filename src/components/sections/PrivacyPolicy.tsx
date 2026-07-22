import React from 'react';
import { ShieldCheck, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export default function PrivacyPolicy() {
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
            <ShieldCheck className="w-4 h-4" /> Legal & Governance
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-sm font-medium">
            Effective Date: July 2026 | Last Updated: July 2026
          </p>
        </motion.div>

        {/* Content Body */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 text-left space-y-8 text-slate-300 text-sm leading-relaxed">
          <section className="space-y-3">
            <p>
              Welcome to <strong>Ashwini Trading Academy</strong> (&quot;Academy&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). We are committed to protecting your privacy and ensuring that your personal information is handled responsibly. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website, enroll in our courses, or interact with our services.
            </p>
            <p className="text-slate-400 italic">
              By accessing or using our website, you agree to the terms outlined in this Privacy Policy.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* 1. Information We Collect */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">1. Information We Collect</h2>
            <p>We may collect the following information when you interact with our website or services:</p>

            <div className="space-y-3 pl-2">
              <h3 className="text-sm font-bold text-brand-primary uppercase tracking-wider">Personal Information</h3>
              <ul className="list-disc list-inside space-y-1.5 text-slate-300">
                <li>Full Name</li>
                <li>Mobile Number</li>
                <li>Email Address</li>
                <li>City / Location</li>
                <li>Course Preferences & Learning Mode</li>
                <li>Any information voluntarily shared through enquiry forms, contact forms, or registrations.</li>
              </ul>

              <h3 className="text-sm font-bold text-brand-primary uppercase tracking-wider pt-2">Non-Personal Information</h3>
              <ul className="list-disc list-inside space-y-1.5 text-slate-300">
                <li>IP Address & Technical Device Specs</li>
                <li>Browser Type & Operating System</li>
                <li>Website Usage Statistics & Analytics Data via Cookies</li>
              </ul>
            </div>
          </section>

          <hr className="border-white/10" />

          {/* 2. How We Use Your Information */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-300">
              <li>Responding to your course enquiries and scheduling demo classes.</li>
              <li>Processing course registrations and providing dedicated customer support.</li>
              <li>Sharing course updates, educational newsletters, webinars, and event details.</li>
              <li>Improving our website, learning programs, and administrative operations.</li>
              <li>Complying with applicable Indian legal and regulatory requirements.</li>
            </ul>
          </section>

          <hr className="border-white/10" />

          {/* 3. Cookies & Information Sharing */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">3. Cookies & Information Sharing</h2>
            <p>
              Our website uses cookies to enhance browsing experience and analyze site traffic. You may choose to disable cookies in your browser settings; however, certain interactive features may be affected.
            </p>
            <p className="font-semibold text-white">
              We respect your privacy: We do NOT sell, rent, or trade your personal information.
            </p>
            <p>Your information is shared only when required by law or with trusted service infrastructure providers bound by strict confidentiality.</p>
          </section>

          <hr className="border-white/10" />

          {/* 4. Data Security & Rights */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">4. Data Security & Your Rights</h2>
            <p>
              We implement administrative, technical, and organizational measures to safeguard your personal information against unauthorized access, alteration, or disclosure.
            </p>
            <p>You have the right to access, correct, or request deletion of your personal data at any time by reaching out to our support team.</p>
          </section>

          <hr className="border-white/10" />

          {/* Contact Box */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
            <h3 className="text-base font-bold text-white">Contact Our Data Privacy Officer</h3>
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
