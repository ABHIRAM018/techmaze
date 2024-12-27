import React from 'react';
import { useEditor } from '../../hooks/useEditor';

export function Console() {
  const { output, error } = useEditor();
  
  return (
    <div className="h-full bg-gray-900 text-white p-4 font-mono overflow-auto">
      <div className="space-y-2">
        {error ? (
          <div className="text-red-400">{error}</div>
        ) : (
          <div className="text-green-400">{output}</div>
        )}
      </div>
    </div>
  );
}