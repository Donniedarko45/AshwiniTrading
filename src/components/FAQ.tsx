import React from 'react';
import { motion } from 'motion/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Do I need prior experience to join the courses?",
    answer: "No, our courses are designed for both absolute beginners and intermediate learners. We start from the basics and progressively move to advanced topics."
  },
  {
    question: "Are the certificates recognized by employers?",
    answer: "Yes, our certifications are industry-recognized. We partner with leading tech companies to ensure our curriculum aligns with current market demands."
  },
  {
    question: "Do you offer placement assistance?",
    answer: "Absolutely. We have a dedicated placement cell that helps with resume building, mock interviews, and connecting you with our 500+ hiring partners."
  },
  {
    question: "Can I access the course material after completion?",
    answer: "Yes! You get lifetime access to all course materials, including future updates, so you can always revisit concepts when needed."
  },
  {
    question: "What is the refund policy?",
    answer: "We offer a 7-day money-back guarantee. If you're not satisfied with the course content within the first week, we'll provide a full refund, no questions asked."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-[42px] font-bold text-slate-900 tracking-tight leading-tight mb-6"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500"
          >
            Everything you need to know about Bluetick Academy and our programs.
          </motion.p>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full bg-white border border-slate-200 rounded-2xl px-6">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-slate-100 py-2 last:border-0 hover:no-underline">
                <AccordionTrigger className="text-left text-base font-bold text-slate-900 hover:text-blue-600 hover:no-underline transition-colors data-[state=open]:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-sm leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
