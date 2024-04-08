import { VolumeX, Volume2 } from 'lucide-react';
import { Button } from '../../../../components/ui/button';
import { useQuizState } from '../../../../hooks/useQuizState';

export const MuteButton = () => {
  const { mute, toggleMute } = useQuizState((s) => s);
  return (
    <Button data-testid={'mute button'} variant={'ghost'} onClick={toggleMute}>
      {!mute ? (
        <div className="flex gap-2 text-xl justify-center items-center">
          <span>mute</span>
          <VolumeX />
        </div>
      ) : (
        <div className="flex gap-2 text-xl justify-center items-center">
          <span>unmute</span>
          <Volume2 />
        </div>
      )}
    </Button>
  );
};
