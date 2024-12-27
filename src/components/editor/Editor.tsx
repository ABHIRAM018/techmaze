import React from 'react';
import MonacoEditor from '@monaco-editor/react';
import { useEditor } from '../../hooks/useEditor';
import { useParams } from 'react-router-dom';

const languageConfigs = {
  python: {
    defaultValue: '# Write your Python code here\n\nprint("Hello, World!")',
    language: 'python'
  },
  c: {
    defaultValue: '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}',
    language: 'c'
  },
  cpp: {
    defaultValue: '#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}',
    language: 'cpp'
  }
};

export function Editor() {
  const { language } = useParams<{ language: string }>();
  const { code, setCode } = useEditor();
  
  const config = languageConfigs[language as keyof typeof languageConfigs] || languageConfigs.python;

  return (
    <MonacoEditor
      height="100%"
      defaultValue={config.defaultValue}
      language={config.language}
      theme="vs-dark"
      onChange={(value) => setCode(value || '')}
      options={{
        minimap: { enabled: false },
        fontSize: 14,
        lineNumbers: 'on',
        roundedSelection: false,
        scrollBeyondLastLine: false,
        automaticLayout: true
      }}
    />
  );
}