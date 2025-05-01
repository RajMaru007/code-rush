
import React from 'react';
import { CheckCircle, Circle, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Lesson {
  id: number;
  title: string;
  completed: boolean;
  locked: boolean;
}

interface LessonListProps {
  lessons: Lesson[];
  onSelectLesson?: (lessonId: number) => void;
  currentLessonId?: number;
}

const LessonList = ({ lessons, onSelectLesson, currentLessonId }: LessonListProps) => {
  return (
    <div className="space-y-2">
      {lessons.map((lesson) => (
        <div 
          key={lesson.id}
          className={cn(
            "p-3 rounded-lg flex items-center", 
            lesson.locked 
              ? "bg-gray-100 dark:bg-gray-700 cursor-not-allowed" 
              : "hover:bg-purple-50 dark:hover:bg-purple-900/20 cursor-pointer",
            currentLessonId === lesson.id && "bg-purple-50 dark:bg-purple-900/20"
          )}
          onClick={() => !lesson.locked && onSelectLesson?.(lesson.id)}
        >
          {lesson.completed ? (
            <CheckCircle size={18} className="text-green-500 mr-3 flex-shrink-0" />
          ) : lesson.locked ? (
            <Lock size={18} className="text-gray-400 mr-3 flex-shrink-0" />
          ) : (
            <Circle size={18} className="text-gray-400 mr-3 flex-shrink-0" />
          )}
          <span className={lesson.locked ? "text-gray-400" : ""}>
            {lesson.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default LessonList;
