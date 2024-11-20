import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, RotateCcw, Save, Code as CodeIcon, Terminal } from 'lucide-react';

interface CodePlaygroundProps {
  initialCode?: string;
  language?: 'python' | 'javascript';
  onRun?: (code: string) => void;
  onSave?: (code: string) => void;
}

const CodePlayground: React.FC<CodePlaygroundProps> = ({
  initialCode = '# Write your code here\n',
  language = 'python',
  onRun,
  onSave,
}) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = async () => {
    setIsRunning(true);
    setOutput('Running...');
    
    try {
      // Simulate code execution
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, just echo the code
      setOutput(`Output:\n${code}`);
      
      if (onRun) {
        onRun(code);
      }
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    } finally {
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    setCode(initialCode);
    setOutput('');
  };

  const handleSave = () => {
    if (onSave) {
      onSave(code);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      {/* Toolbar */}
      <div className="border-b bg-gray-50 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <CodeIcon className="w-5 h-5 text-blue-600" />
          <h3 className="font-semibold">Code Playground</h3>
          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-sm rounded-md">
            {language}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleReset}
            className="p-2 hover:bg-gray-200 rounded-lg text-gray-600"
            title="Reset Code"
          >
            <RotateCcw className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSave}
            className="p-2 hover:bg-gray-200 rounded-lg text-gray-600"
            title="Save Code"
          >
            <Save className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center px-4 py-2 rounded-lg text-white ${
              isRunning ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            <Play className="w-4 h-4 mr-2" />
            Run
          </motion.button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
        {/* Code Editor */}
        <div className="p-4">
          <div className="font-mono">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-[300px] p-4 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none font-mono"
              spellCheck="false"
            />
          </div>
        </div>

        {/* Output */}
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Terminal className="w-5 h-5 text-gray-600" />
            <h4 className="font-medium">Output</h4>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 h-[300px] overflow-auto">
            <pre className="text-green-400 font-mono text-sm">
              {output || 'Run your code to see the output'}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodePlayground;
