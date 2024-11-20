import React, { useState } from 'react';
import { Play, RotateCcw } from 'lucide-react';

const PlaygroundPage: React.FC = () => {
  const [code, setCode] = useState<string>(`# Write your Python code here
print("Hello, World!")
`);
  const [output, setOutput] = useState<string>('');

  const handleRun = () => {
    // In a real implementation, this would send the code to a backend server
    setOutput('Hello, World!\n\nProgram completed successfully.');
  };

  const handleReset = () => {
    setCode(`# Write your Python code here
print("Hello, World!")
`);
    setOutput('');
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Code Playground</h1>
        <div className="flex space-x-4">
          <button
            onClick={handleRun}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Play className="w-4 h-4" />
            <span>Run Code</span>
          </button>
          <button
            onClick={handleReset}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Code Editor */}
        <div className="bg-white rounded-lg border shadow-sm">
          <div className="border-b px-4 py-2 bg-gray-50">
            <h2 className="font-medium">Editor</h2>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-[400px] p-4 font-mono text-sm focus:outline-none"
            spellCheck="false"
          />
        </div>

        {/* Output Console */}
        <div className="bg-white rounded-lg border shadow-sm">
          <div className="border-b px-4 py-2 bg-gray-50">
            <h2 className="font-medium">Output</h2>
          </div>
          <pre className="p-4 font-mono text-sm h-[400px] overflow-auto">
            {output || 'Run your code to see the output here...'}
          </pre>
        </div>
      </div>

      {/* Tips Section */}
      <div className="mt-6 bg-blue-50 border border-blue-100 rounded-lg p-4">
        <h3 className="font-medium text-blue-900 mb-2">Tips:</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
          <li>Use Python syntax for your code</li>
          <li>Print output using the print() function</li>
          <li>Keep your code clean and well-indented</li>
          <li>Use comments to explain your code</li>
        </ul>
      </div>
    </div>
  );
};

export default PlaygroundPage;
