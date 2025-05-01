
import React from 'react';
import CodeEditor from '@/components/editor/CodeEditor';

export interface LessonContent {
  title: string;
  description: string;
  code: string;
  language: string;
}

interface LessonContentProps {
  content: LessonContent | null;
}

const LessonContent = ({ content }: LessonContentProps) => {
  if (!content) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">Select a lesson to begin</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-3">{content.title}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {content.description}
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-4">Practice</h3>
        <CodeEditor initialCode={content.code} language={content.language} />
      </div>
    </div>
  );
};

export default LessonContent;
