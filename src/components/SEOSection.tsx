import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function SEOSection() {
  const seoTopics = [
    "What you learn in a digital marketing course in Bangalore (2026 syllabus)",
    "How to choose the best digital marketing institute in Bangalore",
    "Digital marketing course fees in Bangalore – and the real ROI",
    "Is the digital marketing course in Bangalore suitable for beginners?",
    "Tools and certifications you master in our digital marketing training in Bangalore",
    "Areas in Bangalore we serve – from Indiranagar to Whitefield",
    "Why choose BlueTick Academy for digital marketing in Bangalore"
  ];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Media & Awards */}
        <div className="text-center mb-32">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-12">
            Media & Awards
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/The_Economic_Times_logo.png" alt="Economic Times" className="h-4 md:h-6 object-contain" />
             <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Business_Line_logo.svg/1200px-Business_Line_logo.svg.png" alt="Business Line" className="h-5 md:h-7 object-contain" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/YourStory_logo.svg/1024px-YourStory_logo.svg.png" alt="YourStory" className="h-6 md:h-8 object-contain" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Hindustan_Times_logo.svg" alt="Hindustan Times" className="h-5 md:h-7 object-contain" />
          </div>
        </div>

        {/* SEO Guide */}
        <div>
          <div className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-4">
            COMPLETE GUIDE
          </div>
          <h2 className="text-4xl md:text-[52px] font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8">
            Digital Marketing Course in Bangalore – the complete 2026 guide
          </h2>
          
          <p className="text-lg text-slate-600 mb-12 leading-relaxed font-medium">
            Everything you need to choose the right <strong>digital marketing course in Bangalore</strong> - what a 2026 syllabus covers, how to pick the best <strong>digital marketing institute in Bangalore</strong>, realistic fees and salaries, online vs classroom <strong>digital marketing training in Bangalore</strong>, and how placement actually works. Below we answer the questions students ask us most before joining one of our <strong>digital marketing courses in Bangalore</strong>.
          </p>

          <Accordion type="single" collapsible className="w-full">
              {seoTopics.map((topic, index) => (
                <AccordionItem key={index} value={`seo-${index}`} className="border-t border-b-0 border-slate-200 py-4 first:border-0">
                  <AccordionTrigger className="text-left text-lg font-bold text-slate-900 hover:text-blue-600 hover:no-underline transition-colors data-[state=open]:text-blue-600">
                    {topic}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-base leading-relaxed pb-4">
                    Detailed answer regarding {topic.toLowerCase()} outlining exactly what students should look for, comparing options, and detailing curriculum standards.
                  </AccordionContent>
                </AccordionItem>
              ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
}
