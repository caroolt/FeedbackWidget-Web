import { useState } from 'react';

import { Camera, Trash } from 'phosphor-react';
import html2canvas from 'html2canvas';
import { Loading } from '../LoadingButton';

interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenshotTaken: (screenshot: string | null) => void;
}

export function ScreenshotButton({
  screenshot,
  onScreenshotTaken,
}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('image/png');

    onScreenshotTaken(base64image);
    setIsTakingScreenshot(false);
  }

  if (screenshot) {
    return (
      <button
        type='button'
        className='photoPreviewScreenshotButton'
        onClick={() => onScreenshotTaken(null)}
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 180,
        }}
      >
        <Trash weight='fill' />
      </button>
    );
  }

  return (
    <button
      type='button'
      className='screenshotButtonContentStep'
      onClick={handleTakeScreenshot}
    >
      {isTakingScreenshot ? (
        <Loading />
      ) : (
        <Camera className='cameraIconContentStep' />
      )}
    </button>
  );
}
