import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm';


export function WidgetButton() {
  return(
    <Popover className='containerChat'>
      <Popover.Panel> 
        <WidgetForm/>
      </Popover.Panel>
      <Popover.Button  className='bg-brand-500 rounded-full px-3 h-12 text-white hover:bg-brand-hover flex items-center transition-colors group'>
        <ChatTeardropDots className="chat" />

        <span className='hoverFeedbackText'>
          <span className='spaceFeedbackText'></span>
          Feedback
        </span>
    </Popover.Button>
    
    </Popover>
  )
} 