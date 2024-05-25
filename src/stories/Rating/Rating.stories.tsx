import type { Meta, StoryObj } from '@storybook/react';
import Rating from './Rating';

const meta = {
  title: 'Components/Rating',
  component: Rating,
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    number: 5,
  },
};
