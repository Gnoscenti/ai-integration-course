import React, { useState, useEffect } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-python'; // Or other languages you want to support
import 'prismjs/themes/prism-tomorrow.css'; // Or your preferred theme
// Removed unused axios import

interface CodeSandboxProps {
  initialCode?: string;
  language?: string;
  apiEndpoint?: string;
}

const CodeSandbox: React.FC<CodeSandboxProps> = ({
  initialCode = '# Write your Python code here\nprint("Hello from the AI Course Sandbox!")',
  language = 'python',
  apiEndpoint = '/api/code/execute', // Default backend endpoint
}) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Ensure Prism language component is loaded if not already
    if (language === 'python' && !languages.python) {
      // This dynamic import is tricky with CRA and prism.js's structure.
      // It's usually better to import them statically as done above.
      // If more languages are needed dynamically, a more robust solution might be required.
      console.warn('Prism Python language not explicitly loaded, relying on static import.');
    }
  }, [language]);

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  const handleSubmitCode = async () => {
    setIsLoading(true);
    setOutput(null);
    setError(null);
    try {
      // const response = await axios.post(apiEndpoint, { language, code });
      // For MVP, let's simulate backend execution for Python
      if (language === 'python') {
        // Basic simulation - NOT SAFE FOR PRODUCTION - DO NOT EVALUATE USER CODE DIRECTLY
        // This is a placeholder for a secure backend execution environment.
        // In a real app, this would go to a backend service that runs the code in a sandbox.
        console.log(`Simulating execution of Python code: ${code}`);
        // For now, just echo the code as output for demonstration
        // In a real scenario, you'd get stdout/stderr from the backend.
        // This is a MOCK response.
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
        setOutput(`Simulated Output:\n${code.includes('print') ? code.split('print(')[1]?.split(')')[0]?.replace(/['"]/g, '') : 'No print statement found for simulation.'}`);
      } else {
        setError(`Language "${language}" execution not supported in this MVP sandbox.`);
      }
    } catch (err: any) {
      console.error('Code execution error:', err);
      setError(err.response?.data?.error || err.message || 'Failed to execute code.');
    }
    setIsLoading(false);
  };

  return (
    <div className="my-6 p-4 border rounded-md shadow-sm bg-white">
      <h4 className="font-semibold mb-3 text-gray-700">Interactive Code Sandbox ({language})</h4>
      <div className="editor-container bg-gray-800 rounded-md overflow-hidden mb-4" style={{ minHeight: '150px' }}>
        <Editor
          value={code}
          onValueChange={handleCodeChange}
          highlight={(code) => highlight(code, languages[language] || languages.clike, language)}
          padding={15}
          style={{
            fontFamily: '"Fira Code", "Fira Mono", monospace',
            fontSize: 14,
            outline: 'none',
            border: 'none',
            backgroundColor: '#2d2d2d', // Matches prism-tomorrow theme background
            color: '#ccc', // Default text color
            minHeight: '150px',
          }}
          textareaClassName="focus:outline-none"
          preClassName="focus:outline-none"
        />
      </div>
      <button
        onClick={handleSubmitCode}
        disabled={isLoading}
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 disabled:bg-green-300"
      >
        {isLoading ? 'Running...' : 'Run Code'}
      </button>
      {output && (
        <div className="mt-4 p-3 bg-gray-100 rounded-md">
          <h5 className="font-semibold text-gray-700 mb-1">Output:</h5>
          <pre className="text-sm text-gray-800 whitespace-pre-wrap">{output}</pre>
        </div>
      )}
      {error && (
        <div className="mt-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded-md">
          <h5 className="font-semibold mb-1">Error:</h5>
          <pre className="text-sm whitespace-pre-wrap">{error}</pre>
        </div>
      )}
    </div>
  );
};

export default CodeSandbox;

