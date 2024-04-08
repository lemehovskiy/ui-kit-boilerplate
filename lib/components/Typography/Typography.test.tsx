import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Typography } from './Typography';
import { expect } from '@storybook/test';

describe('Typography', () => {
  it('basic', async () => {
    render(<Typography>Lorem</Typography>);

    expect(screen.queryByText('Lorem')).toBeInTheDocument();
  });
});
