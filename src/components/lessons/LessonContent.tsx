
import React from 'react';
import CodeEditor from '@/components/editor/CodeEditor';
import { Button } from '@/components/ui/button';
import { Unlock } from 'lucide-react';

export interface LessonContent {
  title: string;
  description: string;
  code: string;
  language: string;
  locked?: boolean;
  id?: number;
}

interface LessonContentProps {
  content: LessonContent | null;
  onUnlock?: (lessonId: number) => void;
}

const LessonContent = ({ content, onUnlock }: LessonContentProps) => {
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
      
      {content.locked ? (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
          <div className="text-center py-8">
            <Unlock size={48} className="mx-auto mb-4 text-coderush-purple opacity-60" />
            <h3 className="text-xl font-semibold mb-2">This lesson is locked</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Complete previous lessons or unlock this one to continue your learning journey.
            </p>
            {content.id && onUnlock && (
              <Button 
                onClick={() => onUnlock(content.id!)}
                className="bg-coderush-purple hover:bg-coderush-purple/90"
              >
                <Unlock className="mr-2 h-4 w-4" /> Unlock This Lesson
              </Button>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-4">Practice</h3>
          <CodeEditor initialCode={content.code} language={content.language} />
        </div>
      )}
    </div>
  );
};

export default LessonContent;
