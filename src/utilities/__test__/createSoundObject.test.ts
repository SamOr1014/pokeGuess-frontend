import { describe, expect, it } from 'vitest';
import { createSoundObj } from '../createSoundObject';

describe('create sound obj', () => {
  it('create sound obj', async () => {
    const sound = createSoundObj({
      soundLink: 'link',
      volume: 1,
    });
    expect(sound.volume).toStrictEqual(1);
    expect(sound).toBeInstanceOf(Audio);
  });
});
