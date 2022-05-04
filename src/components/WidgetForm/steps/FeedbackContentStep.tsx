import { ArrowLeft, Camera } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { FeedbackType, feedbackTypes} from '..';
import { CloseButton } from '../../CloseButton';
import { ScreenshotButton } from '../ScreenshotButton';

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
};
export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState('');

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();

    console.log({
      screenshot,
      comment
    })

    onFeedbackSent();
  }

  return (
    <>
      <header>
           <button
          type='button'
          className='buttonForwardWidgetForm'
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight='bold' className='forwardWidgetForm'/>
        </button>

        <span className='headerTextWidgetForm'>
           <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className='imageContentForm'></img>
          {feedbackTypeInfo.title}
        </span>
      <CloseButton/>
      </header>
      
      <form className='formContainer' onSubmit={handleSubmitFeedback}>
        <textarea
          className='formTextArea'
          placeholder='Conte com detalhes o que está acontecendo...'
          onChange={e => setComment(e.target.value)}
        ></textarea>
        <footer className='formFooterContentStep'>

          <ScreenshotButton
            screenshot={screenshot}
          onScreenshotTaken={setScreenshot}
          />
          <button
            type='submit'
            disabled={comment.length === 0}
            className='formButtonContentStep'
          >
            Enviar Feedback
          </button>
        </footer>
      </form>
      </>
  )
}