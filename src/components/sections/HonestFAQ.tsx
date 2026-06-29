import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { honestFAQsLeft, honestFAQsRight } from '@/data/faqs';

export default function HonestFAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-white px-5 sm:px-6 md:px-12 border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        <div className="mb-16 sm:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-200 pb-8">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 border border-slate-300 text-slate-500 font-mono text-xs tracking-widest uppercase mb-6 bg-slate-50">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-brand-navy tracking-tight leading-tight">
              Honest answers to <br className="hidden md:block" />
              <span className="text-brand-primary italic">what you're wondering.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-0">
          <div>
            <Accordion type="single" collapsible className="w-full">
              {honestFAQsLeft.map((faq, index) => (
                <AccordionItem key={faq.id} value={`item-left-${index}`} className="border-b border-slate-200 py-2">
                  <AccordionTrigger className="text-left text-lg font-serif font-medium text-brand-navy hover:text-brand-primary hover:no-underline transition-colors data-[state=open]:text-brand-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 font-light text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div>
            <Accordion type="single" collapsible className="w-full">
              {honestFAQsRight.map((faq, index) => (
                <AccordionItem key={faq.id} value={`item-right-${index}`} className="border-b border-slate-200 py-2">
                  <AccordionTrigger className="text-left text-lg font-serif font-medium text-brand-navy hover:text-brand-primary hover:no-underline transition-colors data-[state=open]:text-brand-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 font-light text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
