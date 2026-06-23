/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Alumni from './components/Alumni';
import Placements from './components/Placements';
import PlacementSystem from './components/PlacementSystem';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import PlacementsCTA from './components/PlacementsCTA';
import WhyHireUs from './components/WhyHireUs';
import CourseTracks from './components/CourseTracks';
import Curriculum from './components/Curriculum';
import CurriculumCTA from './components/CurriculumCTA';
import AlumniGrid from './components/AlumniGrid';

import InterviewReadiness from './components/InterviewReadiness';
import ResumeTransformation from './components/ResumeTransformation';
import ResumeCTA from './components/ResumeCTA';
import DayInLife from './components/DayInLife';
import CareerSwitchers from './components/CareerSwitchers';
import Comparison from './components/Comparison';
import HonestFAQ from './components/HonestFAQ';
import FinalCTA from './components/FinalCTA';
import SEOSection from './components/SEOSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#110B29] font-sans selection:bg-orange-500/30">
      <Navbar />
      <main>
        <Hero />
        <Alumni />
        <WhyHireUs />
        <Placements />
        <PlacementSystem />
        <AlumniGrid />
        <PlacementsCTA />
        <CourseTracks />
        <Curriculum />
        <CurriculumCTA />
        <Certifications />
        <Projects />
        <InterviewReadiness />
        <ResumeTransformation />
        <ResumeCTA />
        <DayInLife />
        <CareerSwitchers />
        <Comparison />
        <HonestFAQ />
        <FinalCTA />
        <SEOSection />
      </main>
      <Footer />
    </div>
  );
}

