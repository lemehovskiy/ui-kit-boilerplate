import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta = {
  title: 'Example/Typography',
  component: Typography,
  tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Body1: Story = {
  args: {
    children: 'Body1',
  },
};

export const H1: Story = {
  args: {
    variant: 'h1',
    children: 'Header 1',
  },
};

export const H2: Story = {
  args: {
    variant: 'h2',
    children: 'Header 2',
  },
};

export const H3: Story = {
  args: {
    variant: 'h3',
    children: 'Header 3',
  },
};

export const H4: Story = {
  args: {
    variant: 'h4',
    children: 'Header 4',
  },
};

export const H5: Story = {
  args: {
    variant: 'h5',
    children: 'Header 5',
  },
};

export const H6: Story = {
  args: {
    variant: 'h6',
    children: 'Header 6',
  },
};
