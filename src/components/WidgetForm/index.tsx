import { useState } from 'react';

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import otherImageUrl from '../../assets/other.svg';
import { FeedbackTypeStep } from './steps/FeedbackTypeStep';
import { FeedbackContentStep } from './steps/FeedbackContentStep';
import { FeedbackSuccessStep } from './steps/FeedbackSuccessStep';

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um centopeia roxa, inseto',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: otherImageUrl,
      alt: 'Imagem de um balão de pensamentos',
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className='containerWidgetForm'>
      {feedbackSent ? (
        <FeedbackSuccessStep
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className='footerTextWidgetForm'>
        Feito com ♥ pela
        <a
          href='https://www.linkedin.com/in/carolinateixeiracoelho/'
          className='underline underline-offset-2'
        >
          Caronte
        </a>
      </footer>
    </div>
  );
}
