import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react'


export function Widget() {
  return(
    <Popover className='containerChat'>
      <Popover.Panel> Hello World!</Popover.Panel>
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