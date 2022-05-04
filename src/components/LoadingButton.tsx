import { CircleNotch } from 'phosphor-react';

export function Loading() {
  return (
    <div className='loadingContainer'>
      <CircleNotch weight='bold' className='loadingButton' />
    </div>
  );
}
