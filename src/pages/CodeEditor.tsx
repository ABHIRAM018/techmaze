import React from 'react';
import { useParams } from 'react-router-dom';
import { Editor } from '../components/editor/Editor';
import { Console } from '../components/editor/Console';
import { EditorProvider } from '../context/EditorContext';
import { Play } from 'lucide-react';
import { useEditor } from '../hooks/useEditor';
import { executeCode } from '../services/codeExecutionService';

export function CodeEditor() {
  const { language = 'python' } = useParams<{ language: string }>();
  const { code, setOutput, setError } = useEditor();
  
  const handleRunCode = async () => {
    try {
      setOutput('Running...');
      setError('');
      
      const result = await executeCode(language, code);
      
      if (result.error) {
        setError(result.error);
        setOutput('');
      } else {
        setOutput(result.output);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setOutput('');
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex-1 flex flex-col p-4 space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            {language.toUpperCase()} Editor
          </h1>
          <button
            className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
            onClick={handleRunCode}
          >
            <Play className="h-4 w-4" />
            <span>Run Code</span>
          </button>
        </div>
        
        <div className="flex-1 grid grid-rows-2 gap-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Editor />
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Console />
          </div>
        </div>
      </div>
    </div>
  );
}