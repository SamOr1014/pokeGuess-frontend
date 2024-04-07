import { describe, expect, it } from 'vitest';
import { cn } from '../utils';

describe('tailwind merge', () => {
  const classNameOne = 'px-2 py-1 bg-red hover:bg-dark-red';
  const classNameTwo = 'p-3 bg-[#B91C1C]';
  const expectResult = 'hover:bg-dark-red p-3 bg-[#B91C1C]';
  it('test', () => {
    expect(cn(classNameOne, classNameTwo)).toStrictEqual(expectResult);
  });
});
