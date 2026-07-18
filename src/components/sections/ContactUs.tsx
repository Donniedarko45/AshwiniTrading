import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, ShieldAlert, CheckCircle2, Loader2, MessageCircle, Youtube, Instagram, Linkedin, Facebook } from 'lucide-react';
import { coursesData } from '@/data/courses';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ContactUs() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [course, setCourse] = useState('Stock Market Foundation Program');
  const [mode, setMode] = useState('Online');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName || !email || !phone || !city) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          phone: cleanPhone,
          city,
          interestedCourse: course,
          learningMode: mode,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMsg(data.error || 'Failed to submit enquiry. Please try again.');
      } else {
        setIsSuccess(true);
        // Reset form
        setFullName('');
        setEmail('');
        setPhone('');
        setCity('');
        setMessage('');
      }
    } catch (err) {
      setErrorMsg('Server connection failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-brand-bg-deep pt-32 pb-24 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-widest text-brand-primary uppercase bg-brand-primary/10 border border-brand-primary/20 px-4 py-1.5 rounded-full inline-block">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-medium text-brand-navy leading-tight tracking-tight">
            Let's Start Your <span className="text-brand-primary italic">Stock Market</span> Learning Journey
          </h1>
          <p className="text-slate-500 text-sm leading-relaxed max-w-lg mx-auto">
            Have questions about our programs, course structure, or learning modes? Contact our academic counsellors today.
          </p>
        </div>

        {/* Contact coordinates and Form row */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Info & Maps (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Info Cards */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/60 shadow-sm space-y-6">
              <h3 className="text-xl font-serif font-semibold text-brand-navy border-b border-slate-100 pb-3">
                Contact Details
              </h3>
              
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs font-semibold block uppercase tracking-wider">Phone Support</span>
                    <a href="tel:+918861756040" className="text-brand-navy font-bold text-sm sm:text-base hover:text-brand-primary transition-colors">
                      +91 88617 56040
                    </a>
                    <span className="text-slate-400 text-sm mx-2">|</span>
                    <a href="tel:+919845961990" className="text-brand-navy font-bold text-sm sm:text-base hover:text-brand-primary transition-colors">
                      9845961990
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs font-semibold block uppercase tracking-wider">Email Address</span>
                    <a href="mailto:info@ashwinitradingacademy.com" className="text-brand-navy font-bold text-sm sm:text-base hover:text-brand-primary transition-colors">
                      info@ashwinitradingacademy.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs font-semibold block uppercase tracking-wider">Head Office</span>
                    <span className="text-slate-700 text-sm font-semibold leading-relaxed">
                      Ashwini Trading Academy, Bengaluru, Karnataka, India
                    </span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs font-semibold block uppercase tracking-wider">Business Hours</span>
                    <span className="text-slate-700 text-sm font-semibold block">
                      Monday – Saturday: 9:00 AM – 7:00 PM
                    </span>
                    <span className="text-slate-500 text-xs block mt-0.5">
                      Sunday: By Appointment / Closed
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Connects */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/60 shadow-sm flex items-center justify-between">
              <span className="text-slate-500 text-sm font-bold pl-2">Follow Us:</span>
              <div className="flex items-center gap-4">
                <a href="https://wa.me/919845961990" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 text-[#25D366] hover:bg-[#25D366]/10 flex items-center justify-center transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a href="https://youtube.com/ashwinitradingacademy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 text-[#FF0000] hover:bg-[#FF0000]/10 flex items-center justify-center transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/ashwinitradingacademy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 text-[#E1306C] hover:bg-[#E1306C]/10 flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/company/ashwinitradingacademy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 text-[#0A66C2] hover:bg-[#0A66C2]/10 flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right: Lead submission form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/60 shadow-sm">
            
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-brand-secondary/15 text-brand-secondary flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-brand-navy">Enquiry Submitted Successfully</h3>
                <p className="text-slate-500 max-w-sm mx-auto text-sm leading-relaxed">
                  Thank you for contacting Ashwini Trading Academy. Our academic counselor will reach out to you on your mobile number shortly.
                </p>
                <Button 
                  onClick={() => setIsSuccess(false)}
                  variant="dark"
                  className="rounded-xl px-6 h-12"
                >
                  Submit Another Query
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-semibold text-brand-navy">Send Us a Message</h3>
                  <p className="text-slate-400 text-xs">Fill out the form below and our counseling team will get back to you shortly.</p>
                </div>

                {errorMsg && (
                  <div className="bg-brand-error/10 border border-brand-error/25 text-brand-error text-xs rounded-xl p-4 flex items-center gap-2.5">
                    <ShieldAlert className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-500 pl-1">Full Name *</label>
                    <Input 
                      placeholder="Enter your full name" 
                      value={fullName}
                      onChange={e => setFullName(e.target.value)}
                      required 
                      className="h-12 border-slate-200 focus:border-brand-primary rounded-xl"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-500 pl-1">Email Address *</label>
                    <Input 
                      type="email" 
                      placeholder="name@example.com" 
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required 
                      className="h-12 border-slate-200 focus:border-brand-primary rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-500 pl-1">Mobile Number *</label>
                    <Input 
                      type="tel" 
                      placeholder="9876543210" 
                      value={phone}
                      onChange={e => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      required 
                      className="h-12 border-slate-200 focus:border-brand-primary rounded-xl"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-500 pl-1">City *</label>
                    <Input 
                      placeholder="e.g. Bengaluru" 
                      value={city}
                      onChange={e => setCity(e.target.value)}
                      required 
                      className="h-12 border-slate-200 focus:border-brand-primary rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-500 pl-1">Course Interested In *</label>
                    <select
                      value={course}
                      onChange={e => setCourse(e.target.value)}
                      className="w-full h-12 rounded-xl border border-slate-200 px-3 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50 cursor-pointer text-slate-700"
                    >
                      {coursesData.map(c => (
                        <option key={c.id} value={c.title}>{c.title}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-500 pl-1">Preferred Learning Mode *</label>
                    <select
                      value={mode}
                      onChange={e => setMode(e.target.value)}
                      className="w-full h-12 rounded-xl border border-slate-200 px-3 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50 cursor-pointer text-slate-700"
                    >
                      <option value="Online">Online Sessions</option>
                      <option value="Classroom">Classroom (Bengaluru)</option>
                      <option value="Hybrid">Hybrid Mode</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-500 pl-1">Message (Optional)</label>
                  <textarea
                    rows={4}
                    placeholder="Enter details of your requirements, backgrounds, or specific questions..."
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 p-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50 text-slate-700"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-13 rounded-xl bg-cta-gold text-brand-navy font-bold tracking-wide uppercase transition-all duration-300 gap-2 cursor-pointer shadow-brand-gold hover:shadow-brand-gold-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting Enquiry...
                    </>
                  ) : (
                    <>
                      Submit Enquiry
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            )}

          </div>

        </div>

        {/* Google Maps Location Iframe */}
        <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md h-96 w-full relative group">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0003714902187!2d77.5896395!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c0000001%3A0x633e5c9b685ea751!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
          />
        </div>

      </div>
    </section>
  );
}
