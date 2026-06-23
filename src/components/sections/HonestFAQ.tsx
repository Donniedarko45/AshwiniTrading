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
    <section id="faq" className="py-24 bg-white px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-brand-blue font-bold tracking-widest text-sm uppercase mb-4">
          FAQS
        </div>
        <h2 className="text-4xl md:text-[56px] font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-16 max-w-3xl">
          Honest answers to what you're actually wondering
        </h2>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
          <div>
            <Accordion type="single" collapsible className="w-full">
              {honestFAQsLeft.map((faq, index) => (
                <AccordionItem key={faq.id} value={`item-left-${index}`} className="border-slate-200 py-3">
                  <AccordionTrigger className="text-left text-lg font-bold text-slate-900 hover:text-brand-blue hover:no-underline transition-colors data-[state=open]:text-brand-blue">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div>
            <Accordion type="single" collapsible className="w-full">
              {honestFAQsRight.map((faq, index) => (
                <AccordionItem key={faq.id} value={`item-right-${index}`} className="border-slate-200 py-3">
                  <AccordionTrigger className="text-left text-lg font-bold text-slate-900 hover:text-brand-blue hover:no-underline transition-colors data-[state=open]:text-brand-blue">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
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
