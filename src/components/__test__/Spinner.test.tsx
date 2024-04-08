import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Spinner } from '../Spinner';

describe('Spinner', () => {
  it('render correctly', () => {
    const { getByTestId } = render(<Spinner />);

    expect(getByTestId('spinner')).toBeInTheDocument();
  });
});
