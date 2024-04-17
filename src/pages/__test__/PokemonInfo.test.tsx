import { describe, expect, it } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import { PokemonInfo } from '../layout/components/PokemonInfo';

describe('PokemonInfo', () => {
  it('render and function correctly', () => {
    const { getByTestId } = render(<PokemonInfo />);
    expect(getByTestId('pokemon-card-popover-trigger')).toBeInTheDocument();

    const triggerEle = getByTestId('pokemon-card-popover-trigger');
    fireEvent.click(triggerEle);
    expect(getByTestId('pokemon-card-popover-content')).toBeInTheDocument();
  });
});
