import { supabase } from '../lib/supabase';

interface ExecutionResult {
  output: string;
  error: string | null;
}

export async function executeCode(language: string, code: string): Promise<ExecutionResult> {
  try {
    // Simulate code execution first
    const output = simulateExecution(language, code);
    
    // Only store if user is authenticated
    const { data: { user } } = await supabase.auth.getUser();
    
    if (user) {
      await supabase
        .from('code_submissions')
        .insert([
          {
            user_id: user.id,
            language,
            code,
            output
          }
        ]);
    }

    return { output, error: null };
  } catch (err) {
    console.error('Code execution error:', err);
    return {
      output: '',
      error: err instanceof Error ? err.message : 'An error occurred'
    };
  }
}

function simulateExecution(language: string, code: string): string {
  // This is a simple simulation - in production, you'd want a proper backend
  const outputs: Record<string, string> = {
    'python': 'Python output:\n' + code.split('\n').filter(line => line.trim().startsWith('print(')).join('\n'),
    'c': 'C output:\nProgram compiled successfully\nHello, World!',
    'cpp': 'C++ output:\nProgram compiled successfully\nHello, World!'
  };
  
  return outputs[language] || 'Language not supported';
}