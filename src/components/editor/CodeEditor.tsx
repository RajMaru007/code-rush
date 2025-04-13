
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Copy, Download } from 'lucide-react';

interface CodeEditorProps {
  initialCode?: string;
  language?: string;
  readOnly?: boolean;
  onRun?: (code: string) => void;
}

const CodeEditor = ({
  initialCode = '// Write your code here...',
  language = 'javascript',
  readOnly = false,
  onRun
}: CodeEditorProps) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  const handleRun = () => {
    setIsRunning(true);
    setOutput('');
    
    try {
      // For demonstration, we're just showing the code as output
      // In a real app, you would send the code to a backend for execution
      setTimeout(() => {
        setOutput(`// Output:\n${code}`);
        setIsRunning(false);
      }, 1000);
      
      if (onRun) {
        onRun(code);
      }
    } catch (error) {
      setOutput(`Error: ${error}`);
      setIsRunning(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    // You could show a toast notification here
  };

  const downloadCode = () => {
    const element = document.createElement('a');
    const file = new Blob([code], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `code.${language === 'javascript' ? 'js' : language}`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Editor Header */}
      <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 px-4 py-2 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {language === 'javascript' ? 'main.js' : `main.${language}`}
          </span>
        </div>
        <div className="flex space-x-2">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={copyToClipboard}
            title="Copy code"
          >
            <Copy size={16} />
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={downloadCode}
            title="Download code"
          >
            <Download size={16} />
          </Button>
        </div>
      </div>
      
      {/* Code Editor */}
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 border-r border-gray-200 dark:border-gray-700">
          <textarea
            className="w-full h-64 p-4 font-mono text-sm bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 resize-none focus:outline-none"
            value={code}
            onChange={handleCodeChange}
            readOnly={readOnly}
            placeholder="// Write your code here..."
            spellCheck="false"
          ></textarea>
        </div>
        
        {/* Output Panel */}
        <div className="w-full md:w-1/2 h-64 p-4 font-mono text-sm bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 overflow-auto">
          {isRunning ? (
            <div className="flex items-center justify-center h-full">
              <div className="animate-pulse">Running code...</div>
            </div>
          ) : output ? (
            <pre>{output}</pre>
          ) : (
            <div className="text-gray-400 dark:text-gray-500 h-full flex items-center justify-center">
              Output will appear here after running your code
            </div>
          )}
        </div>
      </div>
      
      {/* Editor Footer */}
      <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 border-t border-gray-200 dark:border-gray-700">
        <Button 
          className="bg-coderush-green hover:bg-coderush-green/90 text-white"
          onClick={handleRun}
          disabled={isRunning || readOnly}
        >
          <Play size={16} className="mr-2" />
          Run Code
        </Button>
      </div>
    </div>
  );
};

export default CodeEditor;
