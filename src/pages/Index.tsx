
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import CourseList from '@/components/home/CourseList';
import FeatureSection from '@/components/home/FeatureSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CourseList />
        <FeatureSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
