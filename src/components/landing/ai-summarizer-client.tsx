'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { summarizePassageAction } from '@/app/actions';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, AlertCircle } from 'lucide-react';

const initialState = {
  summary: '',
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
      {pending ? <Loader2 className="animate-spin mr-2" /> : null}
      Summarize Passage
    </Button>
  );
}

export function AiSummarizerClient() {
  const [state, formAction] = useFormState(summarizePassageAction, initialState);

  return (
    <div className="w-full max-w-3xl mx-auto space-y-8">
      <form action={formAction} className="space-y-6">
        <div className="grid w-full gap-2">
          <Label htmlFor="passage" className="font-bold text-lg">Bible Passage</Label>
          <Textarea
            id="passage"
            name="passage"
            placeholder="Paste a Bible passage here, for example, John 3:16-17..."
            rows={6}
            required
            className="bg-card border-border/50 text-card-foreground placeholder:text-card-foreground/50 focus:border-primary"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="addContext" name="addContext" className="border-primary data-[state=checked]:bg-primary" />
          <Label htmlFor="addContext" className="text-card-foreground/80">Add scriptural context to the summary</Label>
        </div>
        <SubmitButton />
      </form>

      {state?.error && (
        <Alert variant="destructive" className="bg-destructive/10 border-destructive/30 text-destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Summarization Failed</AlertTitle>
          <AlertDescription>{state.error}</AlertDescription>
        </Alert>
      )}

      {state?.summary && !state?.error && (
        <Card className="bg-background border-border shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-primary text-2xl">AI-Generated Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/90 whitespace-pre-wrap">{state.summary}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
