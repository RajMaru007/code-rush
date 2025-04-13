
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Copy, Download } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

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
      if (language.toLowerCase() === 'javascript') {
        // Create a sandbox to execute the JavaScript code safely
        const executeCode = () => {
          try {
            // Create a function from the code to capture console.log output
            const consoleOutput: string[] = [];
            const sandboxConsole = {
              log: (...args: any[]) => {
                consoleOutput.push(args.map(arg => 
                  typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
                ).join(' '));
              },
              error: (...args: any[]) => {
                consoleOutput.push(`Error: ${args.map(arg => 
                  typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
                ).join(' ')}`);
              },
              warn: (...args: any[]) => {
                consoleOutput.push(`Warning: ${args.map(arg => 
                  typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
                ).join(' ')}`);
              }
            };

            // Execute the code with a custom console
            const executionFunction = new Function('console', code);
            executionFunction(sandboxConsole);
            
            setOutput(consoleOutput.join('\n'));
          } catch (error) {
            if (error instanceof Error) {
              setOutput(`Error: ${error.message}`);
            } else {
              setOutput('An unknown error occurred');
            }
          }
          setIsRunning(false);
        };
        
        // Execute the code with a slight delay to show loading state
        setTimeout(executeCode, 500);
      } else if (language.toLowerCase() === 'python') {
        // For Python, we can't execute it in the browser
        // This would need a backend service
        setOutput('Python execution requires a backend service.\nThis is a simulation.');
        setIsRunning(false);
      } else {
        setOutput(`Execution for ${language} is not supported in the browser.`);
        setIsRunning(false);
      }
      
      if (onRun) {
        onRun(code);
      }
    } catch (error) {
      if (error instanceof Error) {
        setOutput(`Error: ${error.message}`);
      } else {
        setOutput('An unknown error occurred');
      }
      setIsRunning(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Copied to clipboard",
      description: "The code has been copied to your clipboard",
      duration: 3000
    });
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
    <div className="pixel-code-window shadow-pixel-lg">
      {/* Editor Header */}
      <div className="flex items-center justify-between bg-black p-4">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-3">
            <div className="w-5 h-5 rounded-none bg-red-500 border-2 border-white"></div>
            <div className="w-5 h-5 rounded-none bg-yellow-500 border-2 border-white"></div>
            <div className="w-5 h-5 rounded-none bg-green-500 border-2 border-white"></div>
          </div>
          <span className="text-lg text-white font-retro">
            {language === 'javascript' ? 'main.js' : `main.${language}`}
          </span>
        </div>
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={copyToClipboard}
            title="Copy code"
            className="border-2 border-white rounded-none bg-transparent text-white hover:bg-gray-700"
          >
            <Copy size={16} />
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={downloadCode}
            title="Download code"
            className="border-2 border-white rounded-none bg-transparent text-white hover:bg-gray-700"
          >
            <Download size={16} />
          </Button>
        </div>
      </div>
      
      {/* Code Editor */}
      <div className="flex flex-col md:flex-row border-t-4 border-black">
        <div className="w-full md:w-1/2 border-r-4 border-black">
          <textarea
            className="w-full h-64 p-4 font-mono text-base bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 resize-none focus:outline-none focus:ring-0 border-none"
            value={code}
            onChange={handleCodeChange}
            readOnly={readOnly}
            placeholder="// Write your code here..."
            spellCheck="false"
            style={{ fontFamily: "'Fira Code', monospace" }}
          ></textarea>
        </div>
        
        {/* Output Panel */}
        <div className="w-full md:w-1/2 h-64 p-4 font-mono text-base bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 overflow-auto border-t-4 md:border-t-0 border-black">
          {isRunning ? (
            <div className="flex items-center justify-center h-full">
              <div className="animate-pulse font-retro text-xl">Loading...</div>
            </div>
          ) : output ? (
            <pre className="font-mono" style={{ fontFamily: "'Fira Code', monospace" }}>{output}</pre>
          ) : (
            <div className="text-gray-400 dark:text-gray-500 h-full flex items-center justify-center font-retro text-xl">
              Output will appear here after running your code
            </div>
          )}
        </div>
      </div>
      
      {/* Editor Footer */}
      <div className="bg-gray-100 dark:bg-gray-800 p-4 border-t-4 border-black">
        <Button 
          className="pixel-button bg-coderush-green hover:bg-coderush-green text-black font-pixel"
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
