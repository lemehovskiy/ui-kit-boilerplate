import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { expect } from '@storybook/test';

describe('Button', () => {
  it('basic', async () => {
    render(<Button>Test button</Button>);

    expect(screen.getByRole('button'));
    expect(screen.queryByText('Test button')).toBeInTheDocument();
  });
});
