import React from 'react';
import { motion } from 'motion/react';
import { Clock, Star, Users } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const courses = [
  {
    category: 'Development',
    title: 'Full Stack Web Development MERN',
    description: 'Master React, Node.js, Express, and MongoDB. Build scalable web applications from scratch.',
    duration: '6 Months',
    students: '12K+',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
  },
  {
    category: 'Design',
    title: 'UI/UX Design Masterclass',
    description: 'Learn design thinking, wireframing, prototyping, and user testing with Figma.',
    duration: '4 Months',
    students: '8K+',
    rating: '4.8',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
  },
  {
    category: 'Data Science',
    title: 'Data Science & Machine Learning',
    description: 'Dive into Python, pandas, scikit-learn, and build predictive models.',
    duration: '8 Months',
    students: '15K+',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-blue-600 text-sm font-bold tracking-wider uppercase mb-3"
            >
              Popular Courses
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-[42px] font-bold text-slate-900 tracking-tight leading-tight"
            >
              Transform Your Career with Top Programs
            </motion.h3>
          </div>
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
             <Button variant="outline" className="rounded-full border-slate-200 text-slate-700 bg-white hover:bg-slate-50 shadow-sm hover:shadow font-semibold">View All Courses</Button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="flex"
            >
              <Card className="flex flex-col w-full h-full overflow-hidden border border-slate-200 hover:border-blue-300 shadow-none hover:shadow-sm transition-all duration-300 rounded-2xl cursor-pointer">
                <div className="relative h-48 sm:h-48 overflow-hidden bg-slate-100">
                  <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply z-10" />
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  <div className="absolute top-4 left-4 z-20 bg-white shadow-sm px-3 py-1 rounded-full text-[11px] font-bold text-blue-600 uppercase tracking-widest">
                    {course.category}
                  </div>
                </div>
                
                <CardHeader className="pt-6 pb-4">
                  <h4 className="text-lg font-bold text-slate-900 line-clamp-2 leading-tight">{course.title}</h4>
                </CardHeader>
                
                <CardContent className="flex-1 pb-4">
                  <p className="text-slate-500 text-sm line-clamp-3 mb-6">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-slate-600 font-medium">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-blue-600" />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="pt-0 pb-6 mt-auto">
                  <Button className="w-full rounded-xl bg-slate-50 text-slate-900 hover:bg-slate-100 border border-slate-200 transition-colors font-bold shadow-none">Enroll Now</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
