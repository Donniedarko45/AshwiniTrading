import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function HonestFAQ() {
  const faqsLeft = [
    {
      q: "Q1. Is the 100% placement rate real?",
      a: "Yes. In our last 4 batches, every student who completed the portfolio and mock interviews was placed. We cap batches to ensure this attention."
    },
    {
      q: "Q2. What's the lowest package any alumnus has accepted?",
      a: "Our lowest recorded package in the last year was ₹3.6 LPA for an absolute fresher. The average is ₹4.5L - ₹6L, and experienced switchers have gone up to ₹12L."
    },
    {
      q: "Q3. Why pay for a course when Google offers free certifications?",
      a: "Certifications are multiple-choice tests. Employers hire based on what you can do. We teach you how to actually run campaigns, spend budgets, and optimize pipelines."
    },
    {
      q: "Q4. Are your trainers actually working practitioners?",
      a: "100%. Our trainers are active leads and directors at partner agencies. They bring live dashboards and real client problems to the classroom."
    }
  ];

  const faqsRight = [
    {
      q: "Q5. What happens if I don't get placed in 90 days?",
      a: "Our placement support has no artificial end date. We continue setting up interviews and refining your portfolio until you lock down an offer."
    },
    {
      q: "Q6. I'm 26 with 3 years of work experience – won't I feel out of place?",
      a: "Not at all. 41% of our students are working professionals switching careers. We have weekend batches designed for exactly your demographic."
    },
    {
      q: "Q7. Is the AI curriculum real or just marketing?",
      a: "It's deeply integrated. You won't just 'learn about AI'—you will use GPT-4, Midjourney, and n8n to automate creatives, build landing pages, and optimize operations."
    },
    {
      q: "Q8. Can I talk to a current BlueTick alumnus before joining?",
      a: "Absolutely. We encourage it. Ask our admissions team to connect you with an alumnus on LinkedIn who transitioned from a similar background."
    }
  ];

  return (
    <section className="py-24 bg-white px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-4">
          FAQS
        </div>
        <h2 className="text-4xl md:text-[56px] font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-16 max-w-3xl">
          Honest answers to what you're actually wondering
        </h2>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
          <div>
            <Accordion type="single" collapsible className="w-full">
              {faqsLeft.map((faq, index) => (
                <AccordionItem key={index} value={`item-left-${index}`} className="border-slate-200 py-3">
                  <AccordionTrigger className="text-left text-lg font-bold text-slate-900 hover:text-blue-600 hover:no-underline transition-colors data-[state=open]:text-blue-600">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div>
            <Accordion type="single" collapsible className="w-full">
              {faqsRight.map((faq, index) => (
                <AccordionItem key={index} value={`item-right-${index}`} className="border-slate-200 py-3">
                  <AccordionTrigger className="text-left text-lg font-bold text-slate-900 hover:text-blue-600 hover:no-underline transition-colors data-[state=open]:text-blue-600">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                    {faq.a}
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
