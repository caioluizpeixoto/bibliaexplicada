'use server';

import { summarizeBiblePassage } from '@/ai/flows/ai-summarize-bible-passages';

export async function summarizePassageAction(
  prevState: any,
  formData: FormData
) {
  try {
    const passage = formData.get('passage') as string;
    const addScripturalContext = formData.get('addContext') === 'on';

    if (!passage || passage.trim().length < 10) {
      return { summary: '', error: 'Please provide a valid passage to summarize.' };
    }

    const result = await summarizeBiblePassage({ passage, addScripturalContext });
    return { summary: result.summary, error: null };
  } catch (error) {
    console.error('Summarization Error:', error);
    return {
      summary: '',
      error: 'An unexpected error occurred while summarizing the passage. Please try again later.',
    };
  }
}
