'use server';
/**
 * @fileOverview A bible passage summarization AI agent.
 *
 * - summarizeBiblePassage - A function that handles the bible passage summarization process.
 * - SummarizeBiblePassageInput - The input type for the summarizeBiblePassage function.
 * - SummarizeBiblePassageOutput - The return type for the summarizeBiblePassage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeBiblePassageInputSchema = z.object({
  passage: z.string().describe('The passage of scripture to summarize.'),
  addScripturalContext: z
    .boolean()
    .describe(
      'Whether or not to add scriptural context to the summary. Useful if the passage is taken out of context.'
    ),
});
export type SummarizeBiblePassageInput = z.infer<typeof SummarizeBiblePassageInputSchema>;

const SummarizeBiblePassageOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the passage.'),
});
export type SummarizeBiblePassageOutput = z.infer<typeof SummarizeBiblePassageOutputSchema>;

export async function summarizeBiblePassage(
  input: SummarizeBiblePassageInput
): Promise<SummarizeBiblePassageOutput> {
  return summarizeBiblePassageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeBiblePassagePrompt',
  input: {schema: SummarizeBiblePassageInputSchema},
  output: {schema: SummarizeBiblePassageOutputSchema},
  prompt: `You are an expert in biblical scripture. Please provide a concise summary of the following passage:\n\nPassage: {{{passage}}}\n\n{{#if addScripturalContext}}\nAdditionally, provide any relevant scriptural context to the summary, to ensure that the user understands the passage fully.\n{{/if}}`,
});

const summarizeBiblePassageFlow = ai.defineFlow(
  {
    name: 'summarizeBiblePassageFlow',
    inputSchema: SummarizeBiblePassageInputSchema,
    outputSchema: SummarizeBiblePassageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
