
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AuthCard from '@/components/auth/AuthCard';

const Authentication = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-12 px-4 bg-gray-50 dark:bg-gray-900">
        <AuthCard />
      </main>
      <Footer />
    </div>
  );
};

export default Authentication;
