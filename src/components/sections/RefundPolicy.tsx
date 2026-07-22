import React from 'react';
import { RotateCcw, Mail, Phone, MapPin, ArrowLeft, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function RefundPolicy() {
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
            <RotateCcw className="w-4 h-4" /> Policy & Terms
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Refund Policy
          </h1>
          <p className="text-slate-400 text-sm font-medium">
            Effective Date: July 2026 | Last Updated: July 2026
          </p>
        </motion.div>

        {/* Content Body */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 text-left space-y-8 text-slate-300 text-sm leading-relaxed">
          <section className="space-y-3">
            <p>
              At <strong>Ashwini Trading Academy</strong>, we are committed to providing high-quality educational programs and maintaining transparency in our policies. Please read our Refund Policy carefully before enrolling in any course or training program.
            </p>
            <p className="text-slate-400 italic">
              By registering for any course offered by Ashwini Trading Academy, you acknowledge and agree to the terms outlined below.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* 1. Course Fee Payments & Non-Refundability */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">1. Course Fee & Refund Eligibility</h2>
            <div className="bg-brand-primary/10 border border-brand-primary/20 p-4 rounded-xl text-brand-primary font-semibold text-xs leading-relaxed">
              Unless otherwise stated in writing, all course fees paid are non-refundable and non-transferable.
            </div>
            <p>Refund requests will generally not be accepted under circumstances such as:</p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-300 pl-2">
              <li>Change of mind after enrolment</li>
              <li>Inability to attend classes or schedule conflicts</li>
              <li>Personal commitments or relocation</li>
              <li>Lack of participation or failure to complete the course</li>
              <li>Change in career or financial plans</li>
            </ul>
          </section>

          <hr className="border-white/10" />

          {/* 2. Batch Rescheduling */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">2. Batch Rescheduling</h2>
            <p>
              If a student is unable to attend their enrolled batch due to genuine reasons, Ashwini Trading Academy may, at its sole discretion and subject to seat availability, allow the student to join a future batch.
            </p>
            <p className="text-slate-400 text-xs">
              Approval for batch transfers is evaluated on a case-by-case basis.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* 3. Course Cancellation & Duplicate Payments */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">3. Cancellation & Duplicate Payments</h2>
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Course Cancellation by Academy</h3>
              <p>
                In the unlikely event that the Academy cancels a batch and cannot offer an alternative schedule, eligible students will receive either a full refund or an option to transfer to another course.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Duplicate Payments</h3>
              <p>
                If a duplicate payment is made due to a technical error, the excess amount will be refunded after banking verification.
              </p>
            </div>
          </section>

          <hr className="border-white/10" />

          {/* 4. Digital Materials */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">4. Digital Learning Materials</h2>
            <p>
              Any digital content provided as part of a course (recorded sessions, study notes, e-books, templates) is considered delivered once access is granted and does not qualify for a refund.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* Contact Box */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
            <h3 className="text-base font-bold text-white">Refund & Billing Enquiries</h3>
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
