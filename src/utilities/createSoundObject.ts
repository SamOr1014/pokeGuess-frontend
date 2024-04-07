type CreateSoundObj = {
  soundLink: string;
  volume?: number;
};

export const createSoundObj = ({ soundLink, volume }: CreateSoundObj) => {
  const sound = new Audio(soundLink);
  // default volume 0.1
  sound.volume = volume ?? 0.02;
  return sound;
};
