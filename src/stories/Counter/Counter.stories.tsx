import type { Meta, StoryObj } from '@storybook/react';
import Counter from './Counter';

const meta = {
  title: 'Components/Counter',
  component: Counter,
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    backgroundColor: '#00ff61',
    color: '#000',
  },
};

export const Yellow: Story = {
  args: {
    backgroundColor: "#ebe560",
    color: "#096e0e"
  }
};
