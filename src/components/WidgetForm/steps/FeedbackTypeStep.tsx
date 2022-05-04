import { FeedbackType, feedbackTypes } from '..';
import { CloseButton } from '../../CloseButton';

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({onFeedbackTypeChanged }: FeedbackTypeStepProps) {
  return (
    <>
    <header>
      <span className='headerTextWidgetForm'>Deixe seu feedback</span>
      <CloseButton/>
      </header>
      
        <div className='contentContainerWidgetForm'>
        {
          Object.entries(feedbackTypes).map(([key, value]) => {
            return (
              <button
                key={key}
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              className='feedbackTypeButton'
              >
                <img src={value.image.source} alt={value.image.alt}></img>
                <span>{value.title}</span>
              </button>
            );
          })
        }
      </div>
      </>
  )
}